// unit3_questions.js
// Preguntas basadas en el resumen de la Unidad 3: Configuración de instalaciones de detección y extinción de incendios
export const unit3Questions = [
  {
    id: 'u3q1',
    unit: 3,
    questionText: '¿Qué es un "sector de incendio" según el CTE?',
    options: [
      'El área donde es más probable que comience un incendio.',
      'Un espacio de un edificio separado por elementos constructivos resistentes al fuego para confinar un incendio.',
      'Un tipo de extintor específico para fuegos eléctricos.',
      'La ruta de evacuación más corta hacia el exterior.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Un sector de incendio es un espacio de un edificio separado de otras zonas por elementos constructivos delimitadores resistentes al fuego durante un período de tiempo determinado, con el fin de confinar o excluir el incendio.'
  },
  {
    id: 'u3q2',
    unit: 3,
    questionText: '¿Cuál es la función principal de un "vestíbulo de independencia"?',
    options: [
      'Servir como zona de descanso para los bomberos.',
      'Almacenar equipos de protección contra incendios.',
      'Aportar una mayor garantía de compartimentación contra incendios entre dos o más recintos.',
      'Ser el punto de inicio de todas las rutas de evacuación.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Un vestíbulo de independencia es un espacio de uso exclusivo para la circulación situado entre dos o más recintos con la finalidad de aportar una mayor garantía de compartimentación contra incendios.'
  },
  {
    id: 'u3q3',
    unit: 3,
    questionText: 'La "carga de fuego" se define como:',
    options: [
      'El peso de los equipos de extinción.',
      'La temperatura máxima que alcanza un incendio.',
      'La suma de las energías caloríficas liberadas en la combustión de todos los materiales combustibles en un espacio.',
      'La velocidad de propagación del fuego.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La carga de fuego es la suma de las energías caloríficas liberadas en la combustión de todos los materiales combustibles existentes en un espacio.'
  },
  {
    id: 'u3q4',
    unit: 3,
    questionText: 'Para limitar la propagación exterior horizontal del incendio entre dos sectores, los puntos de sus fachadas que no sean al menos EI 60 deben estar separados una distancia "d". ¿De qué depende esta distancia "d"?',
    options: [
      'De la altura del edificio.',
      'Del tipo de ocupantes del edificio.',
      'Del ángulo formado por los planos exteriores de dichas fachadas.',
      'Del material de la fachada exclusivamente.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La distancia "d" en proyección horizontal, para limitar la propagación exterior horizontal, depende del ángulo formado por los planos exteriores de las fachadas de los sectores de incendio.'
  },
  {
    id: 'u3q5',
    unit: 3,
    questionText: 'Según el CTE DB SI 3, ¿cómo se calcula la ocupación de una zona a efectos de evacuación?',
    options: [
      'Contando el número de sillas disponibles.',
      'Aplicando valores de densidad de ocupación (personas/m² útil) según el uso de la zona.',
      'Estimando un máximo de 2 personas por cada 10 m².',
      'Sumando el número de puertas de salida.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El cálculo de la ocupación se determina aplicando los valores de densidad de ocupación que se indican en la tabla 2.1 del DB SI 3, en función de la superficie útil de cada zona y su uso previsto.'
  },
  {
    id: 'u3q6',
    unit: 3,
    questionText: '¿Qué tipo de señalización se debe utilizar en una salida prevista para uso exclusivo en caso de emergencia?',
    options: [
      'Una flecha verde indicando la dirección.',
      'El rótulo "SALIDA".',
      'El rótulo "Salida de emergencia".',
      'Un pictograma de una escalera.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las señales "Salida de emergencia" deben ser visibles y utilizarse en toda salida prevista para uso exclusivo en caso de emergencia.'
  },
  {
    id: 'u3q7',
    unit: 3,
    questionText: '¿Cuál es la anchura mínima libre que deben tener los viales de aproximación para los vehículos de bomberos según el CTE DB SI 5?',
    options: [
      '2.5 metros',
      '3.0 metros',
      '3.5 metros',
      '4.0 metros'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los viales de aproximación de los vehículos de bomberos deben tener una anchura mínima libre de 3.5 metros.'
  },
  {
    id: 'u3q8',
    unit: 3,
    questionText: 'La resistencia al fuego de un elemento estructural se representa con la letra "R" seguida de un número. ¿Qué indica la "R"?',
    options: [
      'Resistencia a la Radiación.',
      'Capacidad Portante (Estabilidad).',
      'Reacción al fuego del material.',
      'Rapidez de ignición.'
    ],
    correctAnswerIndex: 1,
    explanation: 'En la clasificación de resistencia al fuego, "R" indica la Capacidad Portante, es decir, la aptitud del elemento para soportar las cargas aplicadas sin perder su estabilidad estructural durante el tiempo especificado.'
  },
  {
    id: 'u3q9',
    unit: 3,
    questionText: 'Una Boca de Incendio Equipada (BIE) es un elemento de:',
    options: [
      'Detección de incendios.',
      'Protección pasiva.',
      'Extinción de incendios (protección activa).',
      'Señalización de evacuación.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La BIE es un conjunto de elementos necesarios para transportar y proyectar agua hasta el lugar del incendio, por lo tanto, es un equipo de extinción (protección activa).'
  },
  {
    id: 'u3q10',
    unit: 3,
    questionText: '¿Cuál es la función principal de los "grupos de presión para incendios"?',
    options: [
      'Detectar aumentos de presión en las tuberías.',
      'Proporcionar el caudal y presión de agua necesarios para los sistemas de protección contra incendios.',
      'Almacenar agua en aljibes.',
      'Activar las alarmas sonoras en caso de incendio.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los grupos de presión contra incendios son equipos encargados de proporcionar el caudal de agua necesario y en condiciones de presión exigentes para los sistemas de protección contra incendios (BIEs, hidrantes, rociadores).'
  },
  {
    id: 'u3q11',
    unit: 3,
    questionText: 'Los detectores de humo fotoeléctricos e iónicos son parte de un sistema de:',
    options: [
      'Extinción automática.',
      'Ventilación de humos.',
      'Detección de incendios.',
      'Alumbrado de emergencia.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los detectores de humo (fotoeléctricos, iónicos, etc.) son dispositivos que detectan la presencia de humo y emiten una señal, formando parte de un sistema de detección de incendios.'
  },
  {
    id: 'u3q12',
    unit: 3,
    questionText: 'Un extintor portátil es un elemento de lucha contra incendios que se caracteriza por:',
    options: [
      'Estar fijo en la pared y conectado a una red de agua.',
      'Ser transportado y operado manualmente por una persona.',
      'Activar automáticamente al detectar calor.',
      'Contener únicamente CO2 como agente extintor.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El extintor portátil es un elemento manual de lucha contra incendios que es empleado por personas, pudiendo ser transportado con una mano o a la espalda (si pesa entre 20-30 kg).'
  },
  {
    id: 'u3q13',
    unit: 3,
    questionText: '¿Qué función cumple la "central de incendio"?',
    options: [
      'Bombear agua a los rociadores.',
      'Generar el agente extintor gaseoso.',
      'Gestionar, mantener y comprobar los dispositivos del sistema de detección y/o extinción, y activar alarmas/actuaciones.',
      'Suministrar energía eléctrica de emergencia a los sistemas.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La central de incendio es un componente electrónico encargado de gestionar, mantener y comprobar diferentes dispositivos que forman parte de un sistema de detección y/o extinción, y permite distintas actuaciones ante alarmas o fallos.'
  },
  {
    id: 'u3q14',
    unit: 3,
    questionText: 'Los "rociadores automáticos" (sprinklers) se activan por:',
    options: [
      'La detección de humo por un sensor óptico.',
      'La rotura de un elemento termosensible debido a una temperatura elevada.',
      'La pulsación manual de un botón de alarma.',
      'Una señal enviada desde la central de bomberos.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los rociadores automáticos tienen un elemento termosensible que se rompe a una determinada temperatura, liberando agua sobre el incendio de forma automática.'
  },
  {
    id: 'u3q15',
    unit: 3,
    questionText: '¿Para qué se utilizan los "hidrantes exteriores"?',
    options: [
      'Para que los ocupantes del edificio apaguen pequeños fuegos.',
      'Para el riego de jardines en caso de sequía.',
      'Para permitir a los bomberos la conexión de sus mangueras y obtener un gran caudal de agua.',
      'Para llenar los aljibes de protección contra incendios.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El hidrante está destinado a una ubicación exterior y su función es permitir la conexión de las mangueras y suministrar agua a los vehículos de bomberos.'
  },
  {
    id: 'u3q16',
    unit: 3,
    questionText: 'Una "columna seca" es una instalación que:',
    options: [
      'Contiene polvo químico extintor.',
      'Está permanentemente llena de agua a presión.',
      'Es una tubería vertical vacía con tomas para que los bomberos inyecten agua.',
      'Sirve para la extracción de humos en caso de incendio.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El sistema de columna seca está formado por una tubería vacía con toma de agua en fachada (para los bomberos) y bocas de salida en las plantas, de uso exclusivo de los bomberos.'
  },
  {
    id: 'u3q17',
    unit: 3,
    questionText: 'El Documento Básico SI 1 del CTE se enfoca en:',
    options: [
      'La resistencia al fuego de la estructura.',
      'La evacuación de los ocupantes.',
      'La propagación interior del incendio y la compartimentación en sectores.',
      'Las condiciones de intervención de los bomberos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El DB SI 1 "Propagación interior" evidencia las exigencias que debe cumplir el interior del edificio para limitar el riesgo de propagación del incendio, incluyendo la compartimentación en sectores.'
  },
  {
    id: 'u3q18',
    unit: 3,
    questionText: '¿Qué significa la clasificación EI 120 en un elemento constructivo?',
    options: [
      'Que resiste 120 segundos al fuego.',
      'Que tiene una capacidad portante (R) de 120 minutos.',
      'Que mantiene su Integridad (E) y Aislamiento (I) térmico durante 120 minutos de exposición al fuego.',
      'Que tiene una reacción al fuego clase E y una resistencia de 120 Pascales.'
    ],
    correctAnswerIndex: 2,
    explanation: 'EI 120 indica que el elemento mantiene su Integridad (E - no paso de llamas ni gases calientes) y su Aislamiento térmico (I - limitación de temperatura en cara no expuesta) durante 120 minutos.'
  },
  {
    id: 'u3q19',
    unit: 3,
    questionText: 'Según el CTE, los locales y zonas de riesgo especial integrados en edificios se clasifican en grados de riesgo:',
    options: [
      'Mínimo, moderado y severo.',
      'Tipo A, B y C.',
      'Alto, medio y bajo.',
      'Nivel 1, 2 y 3.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los locales y zonas de riesgo especial integrados en los edificios son clasificados conforme a los grados de riesgo alto, medio y bajo, según el DB SI 1.'
  },
  {
    id: 'u3q20',
    unit: 3,
    questionText: 'El objetivo principal del DB SI "Seguridad en caso de incendio" del CTE es:',
    options: [
      'Garantizar que ningún edificio sufra un incendio.',
      'Establecer las multas por incumplimiento de la normativa.',
      'Reducir a límites aceptables el riesgo de que los usuarios sufran daños derivados de un incendio accidental.',
      'Definir los tipos de mangueras a utilizar por los bomberos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El objetivo del DB SI es reducir a límites aceptables el riesgo de que los usuarios de un edificio sufran daños que derivan de un incendio de origen accidental, como consecuencia de las características de su proyecto, construcción, uso y mantenimiento.'
  },
  {
    id: 'u3q21',
    unit: 3,
    questionText: '¿Qué es un "aljibe exclusivo para incendios"?',
    options: [
      'Un tipo de camión de bomberos.',
      'Un depósito de agua específico para asegurar la reserva necesaria para los sistemas de extinción.',
      'Una boca de incendio especial para espumas.',
      'Un sistema de detección temprana de incendios en depósitos.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Un aljibe exclusivo para incendios es un depósito de agua destinado únicamente a proveer la reserva necesaria para los sistemas de protección contra incendios del edificio.'
  },
  {
    id: 'u3q22',
    unit: 3,
    questionText: 'La norma UNE 23034:1988, mencionada en el DB SI 3, se refiere a:',
    options: [
      'El diseño de extintores portátiles.',
      'La resistencia al fuego de puertas.',
      'La señalización de seguridad para evacuación y equipos contra incendios.',
      'El cálculo de la carga de fuego.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La norma UNE 23034:1988 especifica las características de las señales de evacuación y de los equipos de protección contra incendios.'
  },
  {
    id: 'u3q23',
    unit: 3,
    questionText: '¿Cuál es la altura mínima libre o gálibo que deben tener los viales de aproximación para bomberos?',
    options: [
      '3.0 metros',
      '3.5 metros',
      '4.0 metros',
      '4.5 metros'
    ],
    correctAnswerIndex: 3,
    explanation: 'Los viales de aproximación para los vehículos de bomberos deben tener una altura mínima libre o gálibo de 4.5 metros.'
  },
  {
    id: 'u3q24',
    unit: 3,
    questionText: 'El RIPCI (Reglamento de Instalaciones de Protección contra Incendios) establece las condiciones para:',
    options: [
      'El diseño estructural de edificios resistentes al fuego.',
      'La evacuación de humos en aparcamientos.',
      'El diseño, instalación, mantenimiento e inspección de los equipos y sistemas de protección activa contra incendios.',
      'La formación del personal de emergencias.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El RIPCI establece las condiciones técnicas para el diseño, instalación, mantenimiento e inspección de los equipos y sistemas de protección activa contra incendios (extintores, BIEs, detectores, etc.).'
  },
  {
    id: 'u3q25',
    unit: 3,
    questionText: '¿Qué se busca limitar con las exigencias de propagación exterior del DB SI 2?',
    options: [
      'El ruido generado por el incendio.',
      'La propagación del fuego a través de fachadas y cubiertas, hacia otras partes del edificio o a edificios colindantes.',
      'El acceso de curiosos a la zona del incendio.',
      'La cantidad de agua utilizada por los bomberos.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El DB SI 2 establece condiciones para fachadas, medianeras y cubiertas para limitar la propagación del fuego por el exterior del edificio, tanto dentro del mismo como hacia otros edificios.'
  },
  {
    id: 'u3q26',
    unit: 3,
    questionText: 'Si un establecimiento de uso Comercial está integrado en un edificio de viviendas y su superficie construida es de 600 m², ¿debe constituir un sector de incendio diferenciado?',
    options: [
      'No, si el edificio principal es de viviendas.',
      'Sí, porque supera los 500 m².',
      'Solo si tiene riesgo especial alto.',
      'No, nunca es necesario para uso comercial.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Generalmente, un establecimiento integrado en un edificio de otro uso principal debe constituir sector de incendio diferenciado si supera ciertos límites, como 500 m² para uso comercial.'
  },
  {
    id: 'u3q27',
    unit: 3,
    questionText: 'La altura de evacuación descendente máxima para que una planta pueda tener una única salida (cumpliendo otras condiciones) es de:',
    options: [
      '10 metros',
      '20 metros',
      '28 metros',
      'No hay límite de altura si la ocupación es baja.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una de las condiciones para que una planta o recinto disponga de una única salida es que la altura de evacuación descendente de la planta considerada no exceda de 28 metros (excepto en ciertos usos).'
  },
  {
    id: 'u3q28',
    unit: 3,
    questionText: 'Un "vestíbulo de independencia" que da acceso a un local de riesgo especial alto:',
    options: [
      'Puede ser utilizado en los recorridos de evacuación de zonas habitables.',
      'NO debe ser utilizado en los recorridos de evacuación de zonas habitables.',
      'No necesita puertas resistentes al fuego.',
      'Debe tener al menos 10 m² de superficie.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los vestíbulos que sean destinados a uno o a varios locales de riesgo especial, según lo establecido en el apartado 2 de la Sección SI 1, no deben ser utilizado en los recorridos de evacuación de zonas habitables.'
  },
  {
    id: 'u3q29',
    unit: 3,
    questionText: '¿Cuál de los siguientes NO es un agente extintor comúnmente utilizado en sistemas de extinción automática?',
    options: [
      'Agua pulverizada o nebulizada',
      'CO2',
      'Gasolina',
      'Polvo químico'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los agentes extintores comunes incluyen agua, CO2, polvo químico, agentes limpios y agentes inertes. La gasolina es un combustible, no un agente extintor.'
  },
  {
    id: 'u3q30',
    unit: 3,
    questionText: 'Para el cálculo de la ocupación, las "zonas de ocupación ocasional y accesibles únicamente a efectos de mantenimiento" (salas de máquinas, etc.) tienen una densidad de ocupación de:',
    options: [
      '1 persona / 10 m²',
      '0.5 personas / m²',
      'Ocupación nula.',
      'Depende del tamaño de la máquina.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Según la tabla 2.1 del DB SI 3, las zonas de ocupación ocasional y accesibles únicamente a efectos de mantenimiento tienen asignada una ocupación nula.'
  },
  {
    id: 'u3q31',
    unit: 3,
    questionText: 'La resistencia al fuego REI 60 de una cubierta significa que debe mantener su capacidad portante, integridad y aislamiento durante:',
    options: [
      '60 segundos',
      '60 minutos',
      '6 horas',
      'No tiene que ver con el tiempo.'
    ],
    correctAnswerIndex: 1,
    explanation: 'REI 60 significa que la cubierta debe mantener su Capacidad Portante (R), Integridad (E) y Aislamiento (I) durante 60 minutos bajo condiciones de incendio normalizado.'
  },
  {
    id: 'u3q32',
    unit: 3,
    questionText: '¿Qué tipo de protección contra incendios intenta minimizar la propagación y permitir la evacuación mediante el diseño y los materiales del edificio?',
    options: [
      'Protección activa',
      'Protección reactiva',
      'Protección pasiva',
      'Protección dinámica'
    ],
    correctAnswerIndex: 2,
    explanation: 'La protección pasiva se refiere a los materiales y equipos constructivos incorporados para evitar el colapso estructural, minimizar la propagación del incendio y permitir la evacuación.'
  },
  {
    id: 'u3q33',
    unit: 3,
    questionText: 'Si un edificio está equipado con columna seca, ¿a qué distancia máxima debe estar el acceso para un equipo de bombeo de bomberos?',
    options: [
      'Menos de 5 metros.',
      'Menos de 10 metros.',
      'Menos de 18 metros.',
      'Menos de 30 metros.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Si el edificio está equipado con columna seca, debe haber acceso para un equipo de bombeo de bomberos a menos de 18 metros de la conexión de la columna.'
  },
  {
    id: 'u3q34',
    unit: 3,
    questionText: 'Los ascensores de emergencia son una dotación de protección contra incendios que se exige en función de:',
    options: [
      'El color de la fachada del edificio.',
      'El número de extintores instalados.',
      'La altura de evacuación y el uso del edificio.',
      'La proximidad a una estación de bomberos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La exigencia de ascensores de emergencia, como otras instalaciones de protección, depende de factores como la altura de evacuación, el uso del edificio y su ocupación, según se establece en el CTE DB SI.'
  },
  {
    id: 'u3q35',
    unit: 3,
    questionText: '¿Cuál es el propósito de las "zonas de refugio" mencionadas en la señalización de evacuación?',
    options: [
      'Almacenar material inflamable.',
      'Servir como punto de encuentro exterior tras la evacuación.',
      'Proporcionar un espacio seguro temporal dentro del edificio para personas con discapacidad que no pueden usar las escaleras.',
      'Ser el lugar donde se ubica la central de incendios.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las zonas de refugio son espacios seguros dentro del edificio, compartimentados y protegidos, previstos para la evacuación de personas con discapacidad que no pueden utilizar las vías de evacuación habituales.'
  },
  {
    id: 'u3q36',
    unit: 3,
    questionText: 'La capacidad portante del vial de aproximación de bomberos debe ser como mínimo de:',
    options: [
      '5 kN/m²',
      '10 kN/m²',
      '15 kN/m²',
      '20 kN/m²'
    ],
    correctAnswerIndex: 3,
    explanation: 'Los viales de aproximación de los vehículos de bomberos deben tener una capacidad portante mínima de 20 kN/m².'
  },
  {
    id: 'u3q37',
    unit: 3,
    questionText: 'En el dimensionado de elementos de evacuación, la anchura de una puerta (A) se calcula en función de:',
    options: [
      'La altura de la puerta.',
      'El material de la puerta.',
      'El número de personas (P) que deben pasar por ella.',
      'El tipo de cerradura instalada.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La anchura de las puertas y otros elementos de evacuación se dimensiona en función del número total de personas (P) cuyo paso está previsto por ese punto (ej. A ≥ P/200).'
  },
  {
    id: 'u3q38',
    unit: 3,
    questionText: '¿Qué sección del CTE DB SI se ocupa de la "Resistencia al fuego de la estructura"?',
    options: [
      'SI 1',
      'SI 3',
      'SI 5',
      'SI 6'
    ],
    correctAnswerIndex: 3,
    explanation: 'La sección SI 6 del DB SI "Resistencia al fuego de la estructura" establece los métodos y requisitos para asegurar que la estructura mantenga su capacidad portante durante un incendio.'
  },
  {
    id: 'u3q39',
    unit: 3,
    questionText: '¿Cuál de estas NO es una condición que deba cumplir un vestíbulo de independencia?',
    options: [
      'Las puertas de paso deben tener cierta resistencia al fuego.',
      'Debe tener ventilación directa al exterior en todos los casos.',
      'Debe permitir el giro de una silla de ruedas si es parte de un itinerario accesible.',
      'No debe usarse en recorridos de evacuación de zonas habitables si da a un local de riesgo especial.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Un vestíbulo de independencia debe tener protección frente al humo si da a escaleras protegidas, pero no necesariamente ventilación directa al exterior en todos los casos; sus condiciones de ventilación/presurización dependen de a qué zonas conecte.'
  },
  {
    id: 'u3q40',
    unit: 3,
    questionText: 'El alumbrado de emergencia es un tipo de instalación de protección contra incendios que se considera:',
    options: [
      'Protección pasiva.',
      'Un sistema de detección.',
      'Un sistema de extinción.',
      'Protección activa (aunque su función es facilitar la evacuación y seguridad).'
    ],
    correctAnswerIndex: 3,
    explanation: 'Aunque su función principal es facilitar la evacuación segura y la intervención, el alumbrado de emergencia es una instalación técnica que se activa en caso de fallo del suministro normal, por lo que se encuadra dentro de las medidas de protección activa.'
  }
];
