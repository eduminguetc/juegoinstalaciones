// Importar preguntas de los módulos (simulando la estructura de archivos separada)
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
let lastGameQuestionIds = []; // Para evitar repetición inmediata

// --- Elementos del DOM ---
let startScreen, gameScreen, endScreen;
let startGameBtn, nextQuestionBtn, playAgainBtn;
let questionCounter, scoreCounter;
let questionTextElem, optionsContainer, feedbackTextElem, explanationTextElem;
let errorMessageElem;

/**
 * Asigna los elementos del DOM a las variables globales.
 * Se llama después de que el DOM esté completamente cargado.
 */
function assignDOMelements() {
    console.log("Assigning DOM elements...");
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

    if (!startScreen || !gameScreen || !endScreen || !startGameBtn) {
        console.error("Error: No se pudieron encontrar algunos elementos del DOM. Verifica los IDs en HTML.");
        if (errorMessageElem) errorMessageElem.textContent = "Error al cargar la interfaz del juego.";
    }
}

/**
 * Carga y combina todas las preguntas de los módulos.
 */
function loadAllQuestions() {
    console.log("Loading all questions...");
    allQuestions = [
        ...unit1Questions,
        ...unit2Questions,
        ...unit3Questions,
        ...unit4Questions,
        ...unit5Questions,
        ...unit6Questions,
        ...unit7Questions,
        ...unit8Questions
    ];
    console.log(`Total questions loaded: ${allQuestions.length}`);
}

/**
 * Agrupa las preguntas por unidad.
 * @returns {Object} Un objeto donde las claves son los números de unidad y los valores son arrays de preguntas.
 */
function groupQuestionsByUnit() {
    const grouped = {};
    allQuestions.forEach(q => {
        if (!grouped[q.unit]) {
            grouped[q.unit] = [];
        }
        grouped[q.unit].push(q);
    });
    console.log("Questions grouped by unit:", grouped);
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
    const availableItems = arr.filter(item => !excludeIds.includes(item.id));
    let result = [];
    let tempArr = [...availableItems];

    if (availableItems.length < n) { // Si no hay suficientes sin excluir, usamos todos los disponibles
        tempArr = [...arr]; // Considerar todos los items de la unidad si es necesario para cumplir n
    }
    
    const takeN = Math.min(n, tempArr.length); // Tomar n o los que haya si son menos

    for (let i = 0; i < takeN; i++) {
        const randomIndex = Math.floor(Math.random() * tempArr.length);
        result.push(tempArr[randomIndex]);
        tempArr.splice(randomIndex, 1); // Evitar duplicados en esta selección
    }
    return result;
}


/**
 * Selecciona las preguntas para una nueva partida según la lógica especificada.
 * @returns {Array|null} Un array de preguntas para la partida o null si no hay suficientes.
 */
function selectNewQuestions() {
    console.log("Selecting new questions for the game...");
    const groupedByUnit = groupQuestionsByUnit();
    let selectedQuestions = [];
    let selectedIds = new Set();

    // 1. Garantizar representación de unidades
    for (let unitNum = 1; unitNum <= TOTAL_UNITS; unitNum++) {
        const questionsInUnit = groupedByUnit[unitNum] || [];
        if (questionsInUnit.length === 0) {
             console.warn(`Warning: No questions found for unit ${unitNum}.`);
            // Podríamos mostrar un error más severo si esto impide cumplir el mínimo
            // Por ahora, el juego podría continuar con menos unidades representadas si otras lo compensan
            // o fallar si no se alcanza TOTAL_QUESTIONS_PER_GAME
            continue; 
        }

        // Intentar seleccionar preguntas no usadas en el juego anterior para esta unidad
        let unitPicks = getRandomElements(questionsInUnit, MIN_QUESTIONS_PER_UNIT, lastGameQuestionIds);
        
        // Si no se pudieron obtener MIN_QUESTIONS_PER_UNIT sin repetir del juego anterior,
        // se completa con las que haya, permitiendo repetición de esa unidad específica.
        if (unitPicks.length < MIN_QUESTIONS_PER_UNIT) {
            const neededMore = MIN_QUESTIONS_PER_UNIT - unitPicks.length;
            const remainingInUnit = questionsInUnit.filter(q => !unitPicks.find(up => up.id === q.id)); // Excluir las ya seleccionadas para esta unidad
            unitPicks = [...unitPicks, ...getRandomElements(remainingInUnit, neededMore)]; // No pasamos lastGameQuestionIds aquí para permitir repetición si es necesario
        }
        
        unitPicks.forEach(q => {
            if (q && !selectedIds.has(q.id)) { // Asegurarse de que q no es undefined y no está ya seleccionada
                selectedQuestions.push(q);
                selectedIds.add(q.id);
            }
        });
    }
    console.log(`Questions after unit guarantee (${selectedQuestions.length}):`, selectedQuestions.map(q=>q.id));


    // 2. Completar aleatoriamente hasta TOTAL_QUESTIONS_PER_GAME
    const remainingNeeded = TOTAL_QUESTIONS_PER_GAME - selectedQuestions.length;
    if (remainingNeeded > 0) {
        let availablePool = allQuestions.filter(q => !selectedIds.has(q.id)); // Preguntas aún no seleccionadas
        
        // Priorizar las que no estuvieron en el juego anterior
        let preferredPool = availablePool.filter(q => !lastGameQuestionIds.includes(q.id));

        if (preferredPool.length >= remainingNeeded) {
            selectedQuestions = [...selectedQuestions, ...getRandomElements(preferredPool, remainingNeeded)];
        } else {
            // No hay suficientes "nuevas", tomar de las ya jugadas (que no estén ya en selectedQuestions)
            const neededFromPlayed = remainingNeeded - preferredPool.length;
            selectedQuestions = [...selectedQuestions, ...preferredPool]; // Tomar todas las preferidas
            
            let fallbackPool = availablePool.filter(q => !preferredPool.find(pp => pp.id === q.id)); // Resto de disponibles (pueden haber estado en lastGame)
            selectedQuestions = [...selectedQuestions, ...getRandomElements(fallbackPool, neededFromPlayed)];
        }
    }
    
    console.log(`Questions after random fill (${selectedQuestions.length}):`, selectedQuestions.map(q=>q.id));

    // Verificar si tenemos suficientes preguntas
    if (selectedQuestions.length < TOTAL_QUESTIONS_PER_GAME) {
        // Intentar completar con cualquier pregunta restante si aún faltan, incluso si ya se jugaron
        const stillNeeded = TOTAL_QUESTIONS_PER_GAME - selectedQuestions.length;
        if (stillNeeded > 0) {
            let finalFallbackPool = allQuestions.filter(q => !selectedIds.has(q.id));
            const finalAdditions = getRandomElements(finalFallbackPool, stillNeeded);
            finalAdditions.forEach(q => {
                if (q && !selectedIds.has(q.id)) {
                    selectedQuestions.push(q);
                    selectedIds.add(q.id);
                }
            });
        }
    }


    // 3. Manejo de insuficiencia y Mezcla final
    if (selectedQuestions.length < TOTAL_QUESTIONS_PER_GAME) {
        // Comprobar si al menos hay 3 preguntas por cada una de las 8 unidades (24 preguntas)
        // Esta es una condición mínima más flexible si no se alcanzan las 25.
        let unitsRepresentedCount = 0;
        for (let i = 1; i <= TOTAL_UNITS; i++) {
            if (selectedQuestions.some(q => q.unit === i)) {
                 // Contar cuántas preguntas hay por unidad
                const questionsFromUnit = selectedQuestions.filter(q => q.unit === i);
                if (questionsFromUnit.length >= MIN_QUESTIONS_PER_UNIT) {
                    unitsRepresentedCount++;
                } else if (questionsFromUnit.length > 0 && (groupedByUnit[i] && questionsFromUnit.length === groupedByUnit[i].length)) {
                    // Si tenemos todas las preguntas de esa unidad, y son menos de MIN_QUESTIONS_PER_UNIT, también cuenta como representada
                    unitsRepresentedCount++;
                }
            }
        }
        // Si no se cumple ni siquiera el mínimo de 3 por unidad (o todas las disponibles de esa unidad) para las 8 unidades
        // O si el total es menor que un umbral razonable (ej. 20)
        if (unitsRepresentedCount < TOTAL_UNITS || selectedQuestions.length < Math.min(TOTAL_QUESTIONS_PER_GAME, 20) ) {
            console.error("Error: Insufficient questions to meet game requirements.");
            if (errorMessageElem) errorMessageElem.textContent = "No hay suficientes preguntas para iniciar una partida completa. Inténtalo más tarde o contacta al administrador.";
            return null;
        }
        console.warn(`Warning: Game will start with ${selectedQuestions.length} questions instead of ${TOTAL_QUESTIONS_PER_GAME}.`);
    }
    
    // Mezcla final (Algoritmo de Fisher-Yates)
    for (let i = selectedQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedQuestions[i], selectedQuestions[j]] = [selectedQuestions[j], selectedQuestions[i]];
    }
    console.log("Final selected and shuffled questions:", selectedQuestions.map(q=>q.id));
    lastGameQuestionIds = selectedQuestions.map(q => q.id); // Guardar IDs para el próximo juego
    return selectedQuestions;
}


/**
 * Muestra la pregunta actual y sus opciones.
 */
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionTextElem.textContent = question.questionText;
    questionTextElem.classList.add('fade-in'); // Añadir animación

    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button', 'w-full', 'bg-slate-100', 'hover:bg-slate-200', 'text-slate-700', 'font-medium', 'py-3', 'px-4', 'rounded-lg', 'border', 'border-slate-300', 'transition-all', 'duration-150', 'ease-in-out', 'text-left', 'sm:text-base', 'text-sm');
        button.dataset.index = index;
        button.addEventListener('click', handleOptionClick);
        optionsContainer.appendChild(button);
    });

    updateCounters();
    feedbackTextElem.textContent = '';
    feedbackTextElem.className = 'text-center font-medium p-3 rounded-md'; // Reset class
    explanationTextElem.classList.add('hidden');
    explanationTextElem.textContent = '';
    nextQuestionBtn.classList.add('hidden');

    // Forzar reflow para reiniciar animación
    void questionTextElem.offsetWidth;
    questionTextElem.classList.add('fade-in');
}

/**
 * Maneja el clic en una opción de respuesta.
 * @param {Event} event El evento de clic.
 */
function handleOptionClick(event) {
    const selectedButton = event.target;
    const selectedAnswerIndex = parseInt(selectedButton.dataset.index);
    const correctAnswerIndex = currentQuestions[currentQuestionIndex].correctAnswerIndex;

    // Deshabilitar todos los botones de opción
    const optionButtons = optionsContainer.querySelectorAll('.option-button');
    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedAnswerIndex === correctAnswerIndex) {
        score++;
        selectedButton.classList.add('correct');
        feedbackTextElem.textContent = '¡Respuesta Correcta!';
        feedbackTextElem.classList.add('bg-green-100', 'text-green-700');
        setTimeout(() => {
            currentQuestionIndex++;
            displayQuestion();
        }, 1500); // Pase automático
    } else {
        mistakes++;
        selectedButton.classList.add('selected-incorrect'); // Marcar la seleccionada incorrecta
        optionButtons[correctAnswerIndex].classList.add('correct'); // Marcar la correcta

        feedbackTextElem.textContent = 'Respuesta Incorrecta.';
        feedbackTextElem.classList.add('bg-red-100', 'text-red-700');
        explanationTextElem.textContent = `Explicación: ${currentQuestions[currentQuestionIndex].explanation}`;
        explanationTextElem.classList.remove('hidden');
        nextQuestionBtn.classList.remove('hidden');
    }
    updateCounters();
}

/**
 * Actualiza los contadores de pregunta y puntuación.
 */
function updateCounters() {
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    scoreCounter.textContent = `Aciertos: ${score} | Fallos: ${mistakes}`;
}

/**
 * Inicia el juego.
 */
function startGame() {
    console.log("Starting game...");
    currentQuestions = selectNewQuestions();

    if (!currentQuestions || currentQuestions.length === 0) {
        console.error("No questions selected or available to start the game.");
         if (errorMessageElem && !errorMessageElem.textContent) { // No sobrescribir si ya hay un error más específico
            errorMessageElem.textContent = "No se pudieron cargar las preguntas para iniciar el juego.";
        }
        startScreen.classList.remove('hidden'); // Mostrar pantalla de inicio de nuevo
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        return; // No iniciar el juego
    }
    
    errorMessageElem.textContent = ''; // Limpiar mensaje de error si lo había
    currentQuestionIndex = 0;
    score = 0;
    mistakes = 0;
    
    startScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    gameScreen.classList.add('fade-in');


    displayQuestion();
}

/**
 * Termina el juego y muestra la pantalla final.
 */
function endGame() {
    console.log("Ending game...");
    document.getElementById('final-score').textContent = `Aciertos: ${score}`;
    document.getElementById('final-mistakes').textContent = `Fallos: ${mistakes}`;
    
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    endScreen.classList.add('fade-in');
}

/**
 * Inicializa la aplicación.
 * Se llama cuando el DOM está completamente cargado.
 */
functioninitializeApp() 
    {
    assignDOMelements(); // Asignar elementos del DOM primero
    loadAllQuestions(); // Cargar todas las preguntas

    if (!startGameBtn || !nextQuestionBtn || !playAgainBtn) {
        console.error("Botones principales no encontrados. El juego no puede iniciarse.");
        if(errorMessageElem) errorMessageElem.textContent = "Error: Faltan botones de control del juego.";
        return;
    }

    startGameBtn.addEventListener('click', startGame);
    nextQuestionBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        displayQuestion();
    });
    playAgainBtn.addEventListener('click', startGame);

    console.log("App initialized.");
}

// --- Event Listener para iniciar la app ---
document.addEventListener('DOMContentLoaded', initializeApp);
