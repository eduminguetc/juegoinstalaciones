// unit5_questions.js
// Preguntas basadas en el resumen de la Unidad 5: Configuración de instalaciones de gas y calefacción
export const unit5Questions = [
  {
    id: 'u5q1',
    unit: 5,
    questionText: '¿Qué es el "Poder Calorífico Superior (PCS)" de un gas?',
    options: [
      'La temperatura máxima que alcanza al arder.',
      'La cantidad de calor que se desprende en la combustión completa, incluyendo el calor del vapor de agua condensado.',
      'La presión a la que se suministra el gas.',
      'La velocidad con la que se quema el gas.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El Poder Calorífico Superior (PCS) es la cantidad de calor que se desprende en la combustión completa de una unidad de volumen de dicho gas, incluyendo el calor latente del vapor de agua contenido en los humos.'
  },
  {
    id: 'u5q2',
    unit: 5,
    questionText: '¿Cuál de estos gases combustibles es más ligero que el aire y se suministra comúnmente por red urbana?',
    options: [
      'Gas Butano',
      'Gas Propano',
      'Gas Natural',
      'Aire propanado'
    ],
    correctAnswerIndex: 2,
    explanation: 'El Gas Natural, compuesto principalmente de metano, es mucho más ligero que el aire y se distribuye por las redes de abastecimiento público.'
  },
  {
    id: 'u5q3',
    unit: 5,
    questionText: 'El Gas Butano y el Gas Propano son tipos de:',
    options: [
      'Gases manufacturados',
      'Gases Nobles',
      'Gases Licuados del Petróleo (GLP)',
      'Biogás'
    ],
    correctAnswerIndex: 2,
    explanation: 'El Gas Butano y el Gas Propano se obtienen del refino del petróleo crudo, por lo que se denominan Gases Licuados del Petróleo (G.L.P.).'
  },
  {
    id: 'u5q4',
    unit: 5,
    questionText: '¿Qué tipo de instalación de gas comprende desde la llave de edificio o válvula de acometida hasta la llave del usuario?',
    options: [
      'Instalación individual',
      'Instalación común',
      'Acometida interior',
      'Instalación de almacenamiento de GLP'
    ],
    correctAnswerIndex: 1,
    explanation: 'La instalación común es el conjunto de conducciones y accesorios comprendidos entre la llave de edificio o la válvula de acometida y la llave del usuario (inicio de las individuales).'
  },
  {
    id: 'u5q5',
    unit: 5,
    questionText: '¿Cuál es la función principal de las rejillas de ventilación en un local con aparatos de gas no estancos?',
    options: [
      'Decorar la estancia.',
      'Filtrar el aire de entrada.',
      'Asegurar la entrada de aire para la combustión y la evacuación en caso de fuga.',
      'Reducir el ruido de la combustión.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las rejillas de ventilación son necesarias en locales con aparatos de gas no estancos para asegurar el aporte de aire necesario para la combustión y para permitir la evacuación de posibles fugas de gas.'
  },
  {
    id: 'u5q6',
    unit: 5,
    questionText: 'Según la normativa, la evacuación de los productos de la combustión de una caldera de gas debe realizarse preferentemente:',
    options: [
      'Directamente a la fachada a cualquier altura.',
      'A un patio de ventilación interior sin importar sus dimensiones.',
      'Por la cubierta del edificio mediante una chimenea adecuada.',
      'Hacia el interior del local si este es suficientemente grande.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ITC ICG 07 establece que la evacuación de los productos de la combustión debe ser realizada por la cubierta de la vivienda o edificio plurifamiliar mediante una chimenea.'
  },
  {
    id: 'u5q7',
    unit: 5,
    questionText: '¿Qué es la "carga térmica" en el contexto de la calefacción?',
    options: [
      'El peso de la caldera.',
      'La cantidad de combustible almacenado.',
      'La proporción de energía térmica por unidad de tiempo (potencia) que un recinto pierde hacia el exterior.',
      'La temperatura máxima que pueden alcanzar los radiadores.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La carga térmica de calefacción es la potencia térmica que un recinto cerrado intercambia (pierde) con el exterior en las condiciones más desfavorables, y que el sistema de calefacción debe compensar.'
  },
  {
    id: 'u5q8',
    unit: 5,
    questionText: 'En un sistema de calefacción "bitubular", ¿cómo es la temperatura del agua a la entrada de cada radiador?',
    options: [
      'Disminuye progresivamente en cada radiador.',
      'Es la misma que la temperatura de retorno.',
      'Es casi la misma para todos los radiadores.',
      'Aumenta en cada radiador.'
    ],
    correctAnswerIndex: 2,
    explanation: 'En un sistema bitubular, la temperatura del agua a la entrada de cada radiador es casi la misma, ya que cada uno se conecta en paralelo a las tuberías de ida y retorno.'
  },
  {
    id: 'u5q9',
    unit: 5,
    questionText: '¿Cuál es una ventaja principal del sistema de calefacción por suelo radiante?',
    options: [
      'Su bajo coste inicial de instalación.',
      'Su rápida respuesta térmica.',
      'Mayor sensación de confort y alta eficiencia energética al funcionar a baja temperatura.',
      'No requiere ningún tipo de mantenimiento.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El suelo radiante ofrece mayor sensación de confort debido a la distribución uniforme del calor y es eficiente al operar con agua a baja temperatura.'
  },
  {
    id: 'u5q10',
    unit: 5,
    questionText: 'El Real Decreto 919/2006 aprueba el reglamento técnico de:',
    options: [
      'Instalaciones eléctricas de baja tensión.',
      'Instalaciones térmicas en los edificios (RITE).',
      'Distribución y utilización de combustibles gaseosos.',
      'Protección contra incendios.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El Real Decreto 919/2006, de 28 de julio, aprueba el reglamento técnico de distribución y utilización de combustibles gaseosos y sus instrucciones técnicas complementarias ICG 01 a 11.'
  },
  {
    id: 'u5q11',
    unit: 5,
    questionText: '¿Qué problema puede presentar el gas butano a temperaturas cercanas a los 0°C?',
    options: [
      'Aumenta excesivamente su poder calorífico.',
      'Se vuelve más ligero que el aire.',
      'No alcanza la presión de vapor suficiente para salir del envase.',
      'Se congela y solidifica.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El gas butano, a temperaturas cercanas a los 0ºC, no alcanza la presión suficiente de vapor para superar la presión atmosférica y salir del envase, dificultando su uso.'
  },
  {
    id: 'u5q12',
    unit: 5,
    questionText: 'Una "instalación receptora de gas" puede constar de las siguientes partes:',
    options: [
      'Solo la caldera y los radiadores.',
      'Únicamente la bombona y la manguera flexible.',
      'Acometida interior, instalaciones comunes e instalaciones individuales.',
      'El gasoducto principal y la estación de regulación.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una instalación receptora de gas consta de: acometida interior, instalaciones comunes (si aplica) e instalaciones individuales para cada usuario.'
  },
  {
    id: 'u5q13',
    unit: 5,
    questionText: 'Las mangueras flexibles para conectar aparatos de gas deben:',
    options: [
      'Ser fabricadas exclusivamente de PVC.',
      'Tener una longitud mínima de 5 metros.',
      'Ser homologadas y revisarse periódicamente ya que tienen fecha de caducidad.',
      'Pintarse del mismo color que la pared.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las mangueras flexibles deben ser homologadas para uso con gas, instalarse correctamente y tienen una fecha de caducidad, por lo que deben revisarse y sustituirse.'
  },
  {
    id: 'u5q14',
    unit: 5,
    questionText: 'La "conductividad térmica" de un material se refiere a su:',
    options: [
      'Capacidad para almacenar calor.',
      'Resistencia al paso del calor.',
      'Facilidad para conducir el calor.',
      'Temperatura de fusión.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La conductividad térmica es la propiedad que tienen algunos materiales para conducir fácilmente el calor. Los metales, por ejemplo, tienen alta conductividad térmica.'
  },
  {
    id: 'u5q15',
    unit: 5,
    questionText: 'En un sistema de calefacción individual, la producción de calor se realiza:',
    options: [
      'En una sala de calderas comunitaria.',
      'Mediante paneles solares exclusivamente.',
      'En un aparato propio de cada vivienda o local (ej. caldera individual).',
      'A través de la red de gas sin necesidad de caldera.'
    ],
    correctAnswerIndex: 2,
    explanation: 'En la calefacción individual o unitaria, un solo aparato (como una caldera mural o una estufa) produce el calor y lo emite al local o vivienda al que sirve.'
  },
  {
    id: 'u5q16',
    unit: 5,
    questionText: '¿Cuál es una desventaja del sistema de calefacción monotubular?',
    options: [
      'Requiere más tubería que el sistema bitubo.',
      'Los últimos radiadores del circuito reciben agua más fría y pueden necesitar ser más grandes.',
      'Es el sistema más caro de instalar.',
      'No permite la regulación individual de los radiadores.'
    ],
    correctAnswerIndex: 1,
    explanation: 'En el sistema monotubular, la temperatura del agua es diferente en cada radiador, disminuyendo a lo largo del circuito. Por lo tanto, los últimos radiadores deben sobredimensionarse para compensar.'
  },
  {
    id: 'u5q17',
    unit: 5,
    questionText: '¿Qué elemento es indispensable en una instalación de calefacción por agua para absorber el aumento de volumen del agua al calentarse?',
    options: [
      'El purgador.',
      'La bomba de circulación.',
      'El vaso de expansión.',
      'El termostato de ambiente.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El vaso de expansión es un depósito que absorbe el aumento de volumen que experimenta el agua al calentarse, manteniendo así estable la presión dentro del circuito de calefacción.'
  },
  {
    id: 'u5q18',
    unit: 5,
    questionText: 'La norma UNE 60670 es relevante para las instalaciones de:',
    options: [
      'Protección contra incendios.',
      'Gas natural en edificios.',
      'Telecomunicaciones.',
      'Energía solar fotovoltaica.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La norma UNE 60670 (y sus partes) especifica los requisitos para las instalaciones receptoras de gas, incluyendo diseño, construcción, tuberías, etc.'
  },
  {
    id: 'u5q19',
    unit: 5,
    questionText: '¿Qué presión de suministro de gas es la usual en las redes urbanas para consumo doméstico?',
    options: [
      'Alta Presión (AP)',
      'Media Presión B (MPB)',
      'Media Presión A (MPA)',
      'Baja Presión (BP)'
    ],
    correctAnswerIndex: 3,
    explanation: 'La Baja Presión (inferior a 50 mbar o 500 mm.c.a.) es el suministro usual en las redes urbanas para el consumo doméstico.'
  },
  {
    id: 'u5q20',
    unit: 5,
    questionText: 'El "contador individual" de gas en una vivienda tiene como función:',
    options: [
      'Regular la presión del gas.',
      'Filtrar las impurezas del gas.',
      'Medir el volumen de gas consumido por esa vivienda.',
      'Cortar el suministro en caso de fuga.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El contador individual de gas es el indicador que mide y refleja el volumen de gas consumido por una vivienda o usuario específico.'
  },
  {
    id: 'u5q21',
    unit: 5,
    questionText: '¿Qué es el "coeficiente de simultaneidad" en el contexto de una instalación de calderas?',
    options: [
      'La eficiencia de la caldera.',
      'Un factor de corrección que se aplica cuando varias calderas trabajan simultáneamente.',
      'La temperatura máxima de trabajo de la caldera.',
      'El tiempo que tarda la caldera en alcanzar la temperatura de consigna.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El coeficiente de simultaneidad, en este contexto, es un factor de corrección que se aplica al dimensionar sistemas con múltiples generadores (como calderas) para tener en cuenta que no todos operarán al 100% de su capacidad al mismo tiempo.'
  },
  {
    id: 'u5q22',
    unit: 5,
    questionText: 'La "resistencia térmica" de un material aislante idealmente debería ser:',
    options: [
      'Muy baja.',
      'Nula.',
      'Muy alta.',
      'Igual a su conductividad.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La resistencia térmica es la propiedad que tiene un material de oponerse al flujo de calor. Un buen aislante térmico debe tener una resistencia térmica muy alta.'
  },
  {
    id: 'u5q23',
    unit: 5,
    questionText: '¿Cuál de estos NO es un mecanismo de transmisión de calor?',
    options: [
      'Conducción',
      'Convección',
      'Capilaridad',
      'Radiación'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los tres mecanismos principales de transmisión de calor son conducción, convección y radiación. La capilaridad es un fenómeno relacionado con la tensión superficial de los líquidos.'
  },
  {
    id: 'u5q24',
    unit: 5,
    questionText: 'En un sistema de calefacción por suelo radiante, el agua circula por las tuberías a una temperatura:',
    options: [
      'Muy alta (80-90°C)',
      'Moderada (60-70°C)',
      'Baja (30-45°C)',
      'Cercana al punto de congelación.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El suelo radiante funciona con agua a baja temperatura (generalmente entre 30°C y 45°C), lo que contribuye a su confort y eficiencia.'
  },
  {
    id: 'u5q25',
    unit: 5,
    questionText: '¿Qué elemento de una instalación de calefacción es responsable de impulsar el agua a través del circuito?',
    options: [
      'El termostato',
      'La válvula de seguridad',
      'El vaso de expansión',
      'La bomba de circulación'
    ],
    correctAnswerIndex: 3,
    explanation: 'La bomba de circulación es el componente que impulsa el movimiento del agua caliente desde la caldera hacia los emisores y de retorno a la caldera.'
  },
  {
    id: 'u5q26',
    unit: 5,
    questionText: 'El "Poder Calorífico Inferior (PCI)" de un gas se diferencia del PCS en que:',
    options: [
      'El PCI es siempre mayor que el PCS.',
      'El PCI no considera el calor liberado por la condensación del vapor de agua de los humos.',
      'El PCI solo se mide a alta presión.',
      'El PCI es una medida de la toxicidad del gas.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El Poder Calorífico Inferior (PCI) no tiene en cuenta el calor latente del vapor de agua contenido en los productos de la combustión, asumiendo que este vapor no condensa.'
  },
  {
    id: 'u5q27',
    unit: 5,
    questionText: '¿Para qué tipo de uso se emplea principalmente el Gas Propano envasado en depósitos comunales?',
    options: [
      'Para pequeñas cocinas portátiles.',
      'En zonas sin red de abastecimiento de gas natural, para instalaciones centralizadas de edificios.',
      'Como combustible para vehículos.',
      'Para la industria química exclusivamente.'
    ],
    correctAnswerIndex: 1,
    explanation: 'En zonas sin red de abastecimiento de gas natural, los tanques públicos (depósitos comunales) suelen utilizar gas propano para abastecer instalaciones centralizadas de calefacción y ACS.'
  },
  {
    id: 'u5q28',
    unit: 5,
    questionText: 'Una "llave de usuario" en una instalación de gas marca el inicio de:',
    options: [
      'La acometida del edificio.',
      'La instalación común.',
      'La instalación individual de ese usuario.',
      'La conexión al aparato de consumo.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La llave de usuario es la válvula que se encuentra al inicio de la instalación individual, separándola de la instalación común o de la acometida (en caso de suministro único).'
  },
  {
    id: 'u5q29',
    unit: 5,
    questionText: 'Las campanas extractoras de cocina "de recirculación":',
    options: [
      'Expulsan los humos al exterior a través de un conducto.',
      'Filtran el aire aspirado y lo devuelven a la cocina.',
      'Necesitan una conexión a la red de gas.',
      'Solo funcionan con cocinas eléctricas.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las campanas de recirculación (sin salida al exterior) aspiran el aire, lo filtran a través de filtros de grasa y carbono activo, y lo devuelven limpio a la cocina.'
  },
  {
    id: 'u5q30',
    unit: 5,
    questionText: '¿Qué es un "termostato de ambiente" en un sistema de calefacción?',
    options: [
      'Un dispositivo que mide la temperatura del agua en la caldera.',
      'Una válvula que regula el caudal de gas a la caldera.',
      'Un sensor que mide la temperatura del local y ordena arrancar o parar la caldera para mantener la temperatura deseada.',
      'Un purgador automático para radiadores.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El termostato de ambiente mide la temperatura de la estancia donde está ubicado y envía una señal a la caldera para que funcione o se detenga, con el fin de mantener la temperatura programada.'
  },
  {
    id: 'u5q31',
    unit: 5,
    questionText: '¿Qué tipo de presión de gas es superior a 4.000 m.c.a. (0.4 bar) y se emplea para distribución en largas distancias?',
    options: [
      'Baja Presión (BP)',
      'Media Presión A (MPA)',
      'Media Presión B (MPB)',
      'Presión Atmosférica'
    ],
    correctAnswerIndex: 2,
    explanation: 'La Media Presión B (MPB) es una presión superior a 4.000 m.c.a. (0.4 bar) y hasta 5 bar, empleada para distribución en largas distancias. (El texto original la sitúa superior a 4000 mca).'
  },
  {
    id: 'u5q32',
    unit: 5,
    questionText: 'La "válvula de seguridad" en una caldera de calefacción tiene como función:',
    options: [
      'Cortar el gas si se apaga la llama.',
      'Liberar presión del circuito de agua si esta supera un límite de seguridad.',
      'Regular la temperatura del agua.',
      'Permitir el llenado del circuito.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La válvula de seguridad es un dispositivo que se abre automáticamente para liberar el exceso de presión en el circuito de agua de la calefacción, evitando daños a la instalación.'
  },
  {
    id: 'u5q33',
    unit: 5,
    questionText: '¿Cuál es el principal inconveniente de un sistema de calefacción monotubular respecto al bitubular en cuanto a la temperatura de los radiadores?',
    options: [
      'Todos los radiadores están demasiado calientes.',
      'Los primeros radiadores del circuito reciben agua más fría.',
      'La temperatura es irregular dentro de un mismo radiador.',
      'Los últimos radiadores del circuito reciben agua a menor temperatura que los primeros.'
    ],
    correctAnswerIndex: 3,
    explanation: 'En un sistema monotubular, el agua cede calor en cada radiador y continúa hacia el siguiente, por lo que los últimos radiadores del anillo reciben agua a una temperatura inferior que los primeros.'
  },
  {
    id: 'u5q34',
    unit: 5,
    questionText: 'El "armario de regulación" en una instalación de gas natural suele alojar:',
    options: [
      'Únicamente el contador de gas.',
      'El filtro y el regulador de presión del gas.',
      'Las llaves de corte de todos los aparatos.',
      'Un sistema de detección de fugas.'
    ],
    correctAnswerIndex: 1,
    explanation: 'En los armarios de regulación se alojan el filtro (para impurezas) y el regulador (para reducir la presión) de la instalación común o acometida.'
  },
  {
    id: 'u5q35',
    unit: 5,
    questionText: '¿Cuál es la principal diferencia entre una instalación de calefacción centralizada y una individual?',
    options: [
      'El tipo de combustible utilizado.',
      'Si la producción de calor es común para todo el edificio o propia de cada vivienda.',
      'El material de los radiadores.',
      'La temperatura máxima alcanzada.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La diferencia radica en que la calefacción centralizada tiene una única fuente de calor para todo el edificio, mientras que la individual implica que cada unidad de vivienda tiene su propio generador de calor.'
  },
  {
    id: 'u5q36',
    unit: 5,
    questionText: '¿Qué es la "renovación de aire" en el contexto de la calefacción y la calidad del aire interior?',
    options: [
      'El proceso de purgar los radiadores.',
      'La recirculación del aire caliente dentro de una estancia.',
      'La sustitución del aire interior por aire fresco del exterior para mantener la calidad y eliminar contaminantes.',
      'El filtrado del aire que pasa por la caldera.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La renovación de aire es el proceso para garantizar unas condiciones confortables y salubres dentro de un local, sustituyendo el aire interior viciado por aire nuevo del exterior.'
  },
  {
    id: 'u5q37',
    unit: 5,
    questionText: '¿Qué tipo de gas combustible se distribuye habitualmente en bombonas de menos de 15 kg para uso doméstico individual?',
    options: [
      'Gas Natural',
      'Gas Propano (en grandes cantidades)',
      'Gas Butano',
      'Hidrógeno'
    ],
    correctAnswerIndex: 2,
    explanation: 'El Gas Butano se distribuye comúnmente en envases (bombonas) con un máximo de 15 kg y se utiliza principalmente para uso doméstico en aparatos individuales.'
  },
  {
    id: 'u5q38',
    unit: 5,
    questionText: 'La excepción que permite evacuar los productos de la combustión de una caldera estanca directamente a fachada (en lugar de a cubierta) depende, entre otros factores, de:',
    options: [
      'El color de la fachada.',
      'La potencia útil nominal del aparato y el cumplimiento de las condiciones del RITE.',
      'La marca de la caldera.',
      'La altura del edificio exclusivamente.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La evacuación directa a fachada para aparatos estancos o de tiro forzado está permitida si su potencia útil nominal es igual o inferior a 70 kW (y otras condiciones específicas para calentadores de tiro natural), siempre cumpliendo los requisitos del RITE sobre distancias y ubicación.'
  },
  {
    id: 'u5q39',
    unit: 5,
    questionText: '¿Cuál es el objetivo de un "purgador" en un radiador de un sistema de calefacción por agua?',
    options: [
      'Drenar toda el agua del radiador para su limpieza.',
      'Regular el caudal de agua que entra al radiador.',
      'Eliminar el aire que pueda haberse acumulado en el interior del radiador.',
      'Medir la temperatura del agua dentro del radiador.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El purgador, situado en la parte alta del radiador, se utiliza para dejar salir el aire que pueda obstaculizar el normal funcionamiento del circuito e impedir que los radiadores se calienten correctamente.'
  },
  {
    id: 'u5q40',
    unit: 5,
    questionText: '¿Qué es la "presión de suministro" de gas?',
    options: [
      'La cantidad de gas que se puede almacenar en un depósito.',
      'La fuerza con la que el gas es entregado a la instalación del edificio.',
      'El poder calorífico del gas a una presión determinada.',
      'La temperatura a la que el gas se licua.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La presión de suministro es la fuerza (presión) con la que el gas fluye y es entregado desde la red de distribución a la instalación receptora del edificio.'
  }
];
