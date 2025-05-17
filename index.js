// index.js

// Importar preguntas de los módulos
import { unit1Questions } from './unit1_questions.js';
import { unit2Questions } from './unit2_questions.js';
import { unit3Questions } from './unit3_questions.js';
import { unit4Questions } from './unit4_questions.js';
import { unit5Questions } from './unit5_questions.js';
import { unit6Questions } from './unit6_questions.js';
import { unit7Questions } from './unit7_questions.js';
import { unit8Questions } from './unit8_questions.js';

// --- Variables Globales del Juego ---
let allQuestions = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let mistakes = 0;
const TOTAL_QUESTIONS_PER_GAME = 25;
const MIN_QUESTIONS_PER_UNIT = 3;
const TOTAL_UNITS = 8;
let lastGameQuestionIds = [];

// --- Elementos del DOM ---
let appContainer;
let startScreen, gameScreen, endScreen;
let startGameBtn, nextQuestionBtn, playAgainBtn;
let questionCounter, scoreCounter;
let questionTextElem, optionsContainer, feedbackTextElem, explanationTextElem;
let errorMessageElem;

/**
 * Asigna los elementos del DOM a las variables globales.
 */
function assignDOMelements() {
    console.log("[TRIVIA-DEBUG] assignDOMelements: Intentando asignar elementos del DOM...");
    appContainer = document.getElementById('app-container');
    startScreen = document.getElementById('start-screen');
    gameScreen = document.getElementById('game-screen');
    endScreen = document.getElementById('end-screen');

    startGameBtn = document.getElementById('start-game-btn');
    nextQuestionBtn = document.getElementById('next-question-btn');
    playAgainBtn = document.getElementById('play-again-btn');

    questionCounter = document.getElementById('question-counter');
    scoreCounter = document.getElementById('score-counter');

    questionTextElem = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    feedbackTextElem = document.getElementById('feedback-text');
    explanationTextElem = document.getElementById('explanation-text');
    errorMessageElem = document.getElementById('error-message');

    if (!appContainer) console.error("[TRIVIA-DEBUG] ERROR: appContainer no encontrado.");
    if (!startScreen) console.error("[TRIVIA-DEBUG] ERROR: startScreen no encontrado.");
    if (!gameScreen) console.error("[TRIVIA-DEBUG] ERROR: gameScreen no encontrado.");
    if (!endScreen) console.error("[TRIVIA-DEBUG] ERROR: endScreen no encontrado.");
    if (!startGameBtn) {
        console.error("[TRIVIA-DEBUG] ERROR: startGameBtn no encontrado. El juego no podrá iniciarse.");
        if(errorMessageElem) errorMessageElem.textContent = "Error crítico: El botón de inicio no se encuentra.";
    }
    if (!nextQuestionBtn) console.error("[TRIVIA-DEBUG] ERROR: nextQuestionBtn no encontrado.");
    if (!playAgainBtn) console.error("[TRIVIA-DEBUG] ERROR: playAgainBtn no encontrado.");
    if (!questionTextElem) console.error("[TRIVIA-DEBUG] ERROR: questionTextElem no encontrado.");
    if (!optionsContainer) console.error("[TRIVIA-DEBUG] ERROR: optionsContainer no encontrado.");

    console.log("[TRIVIA-DEBUG] assignDOMelements: Asignación completada.");
}

/**
 * Carga y combina todas las preguntas de los módulos.
 */
function loadAllQuestions() {
    console.log("[TRIVIA-DEBUG] loadAllQuestions: Cargando preguntas...");
    try {
        allQuestions = [
            ...(unit1Questions || []),
            ...(unit2Questions || []),
            ...(unit3Questions || []),
            ...(unit4Questions || []),
            ...(unit5Questions || []),
            ...(unit6Questions || []),
            ...(unit7Questions || []),
            ...(unit8Questions || [])
        ];
        console.log(`[TRIVIA-DEBUG] loadAllQuestions: Total de preguntas cargadas: ${allQuestions.length}`);
        if (allQuestions.length === 0) {
            console.warn("[TRIVIA-DEBUG] loadAllQuestions: No se cargó ninguna pregunta. Verifica los archivos de preguntas y sus exportaciones.");
        }
    } catch (error) {
        console.error("[TRIVIA-DEBUG] loadAllQuestions: Error al cargar las preguntas de los módulos.", error);
        if(errorMessageElem) errorMessageElem.textContent = "Error al cargar el banco de preguntas.";
        allQuestions = [];
    }
}

/**
 * Agrupa las preguntas por unidad.
 * @returns {Object} Un objeto donde las claves son los números de unidad y los valores son arrays de preguntas.
 */
function groupQuestionsByUnit() {
    const grouped = {};
    allQuestions.forEach(q => {
        if (q && q.unit) {
            if (!grouped[q.unit]) {
                grouped[q.unit] = [];
            }
            grouped[q.unit].push(q);
        } else {
            console.warn("[TRIVIA-DEBUG] groupQuestionsByUnit: Pregunta inválida o sin unidad encontrada:", q);
        }
    });
    console.log("[TRIVIA-DEBUG] groupQuestionsByUnit: Preguntas agrupadas:", grouped);
    return grouped;
}

/**
 * Selecciona aleatoriamente N elementos de un array.
 * @param {Array} arr El array del que seleccionar.
 * @param {number} n El número de elementos a seleccionar.
 * @param {Array} excludeIds IDs a excluir si es posible.
 * @returns {Array} Un array con N elementos seleccionados aleatoriamente.
 */
function getRandomElements(arr, n, excludeIds = []) {
    if (!arr || arr.length === 0) return [];
    
    const availableItems = arr.filter(item => item && item.id && !excludeIds.includes(item.id));
    let result = [];
    let tempArr = [...availableItems];

    if (availableItems.length < n) {
        tempArr = [...arr.filter(item => item && item.id)]; 
    }
    
    const takeN = Math.min(n, tempArr.length);

    for (let i = 0; i < takeN; i++) {
        if (tempArr.length === 0) break;
        const randomIndex = Math.floor(Math.random() * tempArr.length);
        result.push(tempArr[randomIndex]);
        tempArr.splice(randomIndex, 1);
    }
    return result;
}

/**
 * Selecciona las preguntas para una nueva partida.
 * @returns {Array|null}
 */
function selectNewQuestions() {
    console.log("[TRIVIA-DEBUG] selectNewQuestions: Iniciando selección de preguntas...");
    const groupedByUnit = groupQuestionsByUnit();
    let selectedQuestions = [];
    let selectedIds = new Set();

    for (let unitNum = 1; unitNum <= TOTAL_UNITS; unitNum++) {
        const questionsInUnit = groupedByUnit[unitNum] || [];
        if (questionsInUnit.length === 0) {
            console.warn(`[TRIVIA-DEBUG] selectNewQuestions: No hay preguntas para la unidad ${unitNum}.`);
            continue;
        }

        let unitPicks = getRandomElements(questionsInUnit, MIN_QUESTIONS_PER_UNIT, lastGameQuestionIds);
        
        if (unitPicks.length < MIN_QUESTIONS_PER_UNIT) {
            const neededMore = MIN_QUESTIONS_PER_UNIT - unitPicks.length;
            const remainingInUnitForThisSelection = questionsInUnit.filter(q => q && q.id && !unitPicks.find(up => up.id === q.id));
            unitPicks = [...unitPicks, ...getRandomElements(remainingInUnitForThisSelection, neededMore)]; 
        }
        
        unitPicks.forEach(q => {
            if (q && q.id && !selectedIds.has(q.id)) {
                selectedQuestions.push(q);
                selectedIds.add(q.id);
            }
        });
    }
    console.log(`[TRIVIA-DEBUG] selectNewQuestions: Preguntas tras garantía de unidad (${selectedQuestions.length}):`, selectedQuestions.map(q=>q.id));

    let remainingNeeded = TOTAL_QUESTIONS_PER_GAME - selectedQuestions.length;
    if (remainingNeeded > 0) {
        let availablePool = allQuestions.filter(q => q && q.id && !selectedIds.has(q.id));
        let preferredPool = availablePool.filter(q => !lastGameQuestionIds.includes(q.id));

        if (preferredPool.length >= remainingNeeded) {
            selectedQuestions = [...selectedQuestions, ...getRandomElements(preferredPool, remainingNeeded)];
        } else {
            selectedQuestions = [...selectedQuestions, ...preferredPool];
            remainingNeeded -= preferredPool.length;

            if (remainingNeeded > 0) {
                 let fallbackPool = availablePool.filter(q => q && q.id && !preferredPool.find(pp => pp.id === q.id));
                 selectedQuestions = [...selectedQuestions, ...getRandomElements(fallbackPool, remainingNeeded)];
            }
        }
    }
    console.log(`[TRIVIA-DEBUG] selectNewQuestions: Preguntas tras relleno aleatorio (${selectedQuestions.length}):`, selectedQuestions.map(q=>q.id));
    
    const minTotalForGame = MIN_QUESTIONS_PER_UNIT * TOTAL_UNITS;

    if (selectedQuestions.length < TOTAL_QUESTIONS_PER_GAME) {
        console.warn(`[TRIVIA-DEBUG] selectNewQuestions: Se seleccionaron ${selectedQuestions.length} preguntas, menos de las ${TOTAL_QUESTIONS_PER_GAME} deseadas.`);
        if (selectedQuestions.length < minTotalForGame && selectedQuestions.length < 20) {
            console.error(`[TRIVIA-DEBUG] selectNewQuestions: Insuficientes preguntas para un juego viable. Seleccionadas: ${selectedQuestions.length}, Mínimo requerido (aprox): ${minTotalForGame}`);
            if (errorMessageElem) errorMessageElem.textContent = "No hay suficientes preguntas distintas para iniciar una partida. Por favor, añade más preguntas al banco.";
            return null;
        }
    }

    for (let i = selectedQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedQuestions[i], selectedQuestions[j]] = [selectedQuestions[j], selectedQuestions[i]];
    }
    
    lastGameQuestionIds = selectedQuestions.slice(0, TOTAL_QUESTIONS_PER_GAME).map(q => q.id);
    console.log("[TRIVIA-DEBUG] selectNewQuestions: Preguntas finales seleccionadas y mezcladas:", lastGameQuestionIds);
    return selectedQuestions.slice(0, TOTAL_QUESTIONS_PER_GAME);
}

/**
 * Muestra la pregunta actual y sus opciones.
 */
function displayQuestion() {
    console.log(`[TRIVIA-DEBUG] displayQuestion: Mostrando pregunta ${currentQuestionIndex + 1} de ${currentQuestions.length}`);
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    if (!question || !question.options || !Array.isArray(question.options)) {
        console.error("[TRIVIA-DEBUG] displayQuestion: Pregunta inválida o sin opciones:", question);
        if(errorMessageElem) errorMessageElem.textContent = "Error al mostrar la pregunta. Datos corruptos.";
        endGame();
        return;
    }

    questionTextElem.textContent = question.questionText;
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-button w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-lg border border-slate-300 transition-all duration-150 ease-in-out text-left sm:text-base text-sm';
        button.dataset.index = index;
        button.addEventListener('click', handleOptionClick);
        optionsContainer.appendChild(button);
    });

    updateCounters();
    feedbackTextElem.textContent = '';
    feedbackTextElem.className = 'text-center font-medium p-3 rounded-md';
    explanationTextElem.classList.add('hidden');
    explanationTextElem.textContent = '';
    nextQuestionBtn.classList.add('hidden');
    
    questionTextElem.classList.remove('fade-in');
    void questionTextElem.offsetWidth;
    questionTextElem.classList.add('fade-in');
}

/**
 * Maneja el clic en una opción de respuesta.
 * @param {Event} event
 */
function handleOptionClick(event) {
    const selectedButton = event.target;
    const selectedAnswerIndex = parseInt(selectedButton.dataset.index);
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correctAnswerIndex;

    const optionButtons = optionsContainer.querySelectorAll('.option-button');
    optionButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-slate-200');
    });

    explanationTextElem.textContent = `Explicación: ${currentQuestion.explanation}`;
    explanationTextElem.classList.remove('hidden');

    if (selectedAnswerIndex === correctAnswerIndex) {
        score++;
        selectedButton.classList.remove('bg-slate-100', 'border-slate-300');
        selectedButton.classList.add('correct');
        feedbackTextElem.textContent = '¡Respuesta Correcta!';
        feedbackTextElem.className = 'text-center font-medium p-3 rounded-md bg-green-100 text-green-700';
        console.log("[TRIVIA-DEBUG] handleOptionClick: Respuesta correcta.");
    } else {
        mistakes++;
        selectedButton.classList.remove('bg-slate-100', 'border-slate-300');
        selectedButton.classList.add('selected-incorrect');
        
        if (optionButtons[correctAnswerIndex]) {
            optionButtons[correctAnswerIndex].classList.remove('bg-slate-100', 'border-slate-300');
            optionButtons[correctAnswerIndex].classList.add('correct');
        } else {
            console.error("[TRIVIA-DEBUG] handleOptionClick: Índice de respuesta correcta inválido:", correctAnswerIndex);
        }
        
        feedbackTextElem.textContent = 'Respuesta Incorrecta.';
        feedbackTextElem.className = 'text-center font-medium p-3 rounded-md bg-red-100 text-red-700';
        console.log("[TRIVIA-DEBUG] handleOptionClick: Respuesta incorrecta.");
    }
    updateCounters();
    nextQuestionBtn.classList.remove('hidden'); // Mostrar siempre el botón "Siguiente Pregunta"
}

/**
 * Actualiza los contadores de pregunta y puntuación.
 */
function updateCounters() {
    if (questionCounter && scoreCounter && currentQuestions.length > 0) {
        questionCounter.textContent = `Pregunta ${Math.min(currentQuestionIndex + 1, currentQuestions.length)} / ${currentQuestions.length}`;
        scoreCounter.textContent = `Aciertos: ${score} | Fallos: ${mistakes}`;
    }
}

/**
 * Inicia el juego.
 */
function startGame() {
    console.log("[TRIVIA-DEBUG] startGame: Botón 'Comenzar Juego' presionado.");
    if(errorMessageElem) errorMessageElem.textContent = '';

    currentQuestions = selectNewQuestions();

    if (!currentQuestions || currentQuestions.length === 0) {
        console.error("[TRIVIA-DEBUG] startGame: No se pudieron seleccionar preguntas. El juego no comenzará.");
        if(startScreen) startScreen.classList.remove('hidden');
        if(gameScreen) gameScreen.classList.add('hidden');
        if(endScreen) endScreen.classList.add('hidden');
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    mistakes = 0;
    
    if(startScreen) startScreen.classList.add('hidden');
    if(endScreen) endScreen.classList.add('hidden');
    if(gameScreen) {
        gameScreen.classList.remove('hidden');
        gameScreen.classList.remove('fade-in');
        void gameScreen.offsetWidth;
        gameScreen.classList.add('fade-in');
    }
    
    console.log(`[TRIVIA-DEBUG] startGame: Juego iniciado con ${currentQuestions.length} preguntas.`);
    displayQuestion();
}

/**
 * Termina el juego y muestra la pantalla final.
 */
function endGame() {
    console.log("[TRIVIA-DEBUG] endGame: Finalizando el juego.");
    const finalScoreElem = document.getElementById('final-score');
    const finalMistakesElem = document.getElementById('final-mistakes');

    if (finalScoreElem) finalScoreElem.textContent = `Aciertos: ${score}`;
    if (finalMistakesElem) finalMistakesElem.textContent = `Fallos: ${mistakes}`;
    
    if(gameScreen) gameScreen.classList.add('hidden');
    if(endScreen) {
        endScreen.classList.remove('hidden');
        endScreen.classList.remove('fade-in');
        void endScreen.offsetWidth;
        endScreen.classList.add('fade-in');
    }
}

/**
 * Inicializa la aplicación.
 */
function initializeApp() {
    console.log("[TRIVIA-DEBUG] initializeApp: DOM completamente cargado. Inicializando aplicación...");
    assignDOMelements();
    loadAllQuestions();

    if (startGameBtn) {
        startGameBtn.addEventListener('click', startGame);
    } else {
        console.error("[TRIVIA-DEBUG] initializeApp: El botón de inicio (startGameBtn) no fue encontrado. No se puede añadir event listener.");
        if(errorMessageElem) errorMessageElem.textContent = "Error crítico: No se puede iniciar el juego (botón no encontrado).";
    }

    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            displayQuestion();
        });
    }

    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', startGame);
    }
    console.log("[TRIVIA-DEBUG] initializeApp: Aplicación inicializada.");
}

// --- Event Listener para iniciar la app ---
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

console.log("[TRIVIA-DEBUG] index.js: Script cargado y parseado completamente (versión con feedback modificado).");
