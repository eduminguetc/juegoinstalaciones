// unit4_questions.js
// Preguntas basadas en el resumen de la Unidad 4: Configuración de instalaciones de electricidad y telecomunicaciones
export const unit4Questions = [
  {
    id: 'u4q1',
    unit: 4,
    questionText: '¿Qué es la "tensión" eléctrica?',
    options: [
      'La cantidad de electrones que fluyen por un conductor.',
      'La energía eléctrica consumida por unidad de tiempo.',
      'La diferencia de potencial eléctrico entre dos puntos, necesaria para que fluya la corriente.',
      'La oposición al paso de la corriente eléctrica.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La tensión es la diferencia de potencial que se produce entre dos puntos de un mismo circuito, necesaria para que circulen las cargas eléctricas. Se mide en Voltios (V).'
  },
  {
    id: 'u4q2',
    unit: 4,
    questionText: '¿Cuál es la principal diferencia entre corriente monofásica y trifásica?',
    options: [
      'La monofásica es solo para alta tensión y la trifásica para baja tensión.',
      'El número de fases que componen la línea (una fase vs. tres fases).',
      'La monofásica no utiliza conductor neutro.',
      'La trifásica solo se usa para iluminación.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La diferencia entre la corriente monofásica y trifásica se refiere al número de fases que componen la línea. Los sistemas monofásicos se componen de una fase (y neutro) y los trifásicos de 3 fases (y neutro) desfasadas 120º entre sí.'
  },
  {
    id: 'u4q3',
    unit: 4,
    questionText: 'En España, la tensión de suministro habitual en viviendas (Baja Tensión monofásica) es de:',
    options: [
      '110 V',
      '230 V',
      '400 V',
      '1000 V'
    ],
    correctAnswerIndex: 1,
    explanation: 'La Baja Tensión es la que llega a los usuarios, siendo en España 230V para monofásica y 400V entre fases para trifásica.'
  },
  {
    id: 'u4q4',
    unit: 4,
    questionText: '¿Cuál es la función principal del Reglamento Electrotécnico para Baja Tensión (REBT)?',
    options: [
      'Regular las instalaciones de alta tensión.',
      'Establecer las tarifas eléctricas.',
      'Fijar las condiciones técnicas y garantías para las instalaciones eléctricas en BT, protegiendo personas y bienes.',
      'Definir los colores de los electrodomésticos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El REBT establece las condiciones técnicas y garantías que deben reunir las instalaciones eléctricas conectadas a una fuente de suministro en los límites de baja tensión, con la finalidad de proteger la seguridad de las personas y los bienes, y asegurar el normal funcionamiento.'
  },
  {
    id: 'u4q5',
    unit: 4,
    questionText: 'La "instalación de enlace" en un edificio incluye desde la red de distribución pública hasta:',
    options: [
      'El interruptor de cada lámpara.',
      'La toma de corriente de la cocina.',
      'El Interruptor de Control de Potencia (ICP) dentro de la vivienda del usuario.',
      'El transformador del barrio.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La instalación de enlace es el recorrido de la electricidad desde la red de distribución pública hasta la vivienda del usuario, finalizando en el Interruptor de Control de Potencia (ICP) o en los dispositivos generales de mando y protección de la vivienda.'
  },
  {
    id: 'u4q6',
    unit: 4,
    questionText: '¿Qué elemento de la instalación de enlace contiene los fusibles de protección de la línea repartidora?',
    options: [
      'La centralización de contadores.',
      'La Derivación Individual.',
      'La Caja General de Protección (CGP).',
      'El Interruptor de Control de Potencia (ICP).'
    ],
    correctAnswerIndex: 2,
    explanation: 'La Caja General de Protección (CGP) contiene los elementos de protección (fusibles) que protegen la línea repartidora (o LGA) que ingresa al edificio.'
  },
  {
    id: 'u4q7',
    unit: 4,
    questionText: 'El Grado de Electrificación Básico para una vivienda prevé una potencia mínima de:',
    options: [
      '3.450 W',
      '5.750 W',
      '9.200 W',
      '12.500 W'
    ],
    correctAnswerIndex: 1,
    explanation: 'El Grado de Electrificación Básico plantea una potencia mínima a contratar de 5.750 W (a 230V) y debe disponer de al menos 5 circuitos independientes.'
  },
  {
    id: 'u4q8',
    unit: 4,
    questionText: '¿Cuál es el color normalizado para el conductor Neutro en una instalación monofásica en España?',
    options: [
      'Marrón',
      'Negro',
      'Amarillo-Verde',
      'Azul claro'
    ],
    correctAnswerIndex: 3,
    explanation: 'Según el REBT (ITC-BT-19), el conductor Neutro debe ser de color azul claro.'
  },
  {
    id: 'u4q9',
    unit: 4,
    questionText: 'Un interruptor automático magnetotérmico (PIA) protege un circuito contra:',
    options: [
      'Fugas de corriente a tierra exclusivamente.',
      'Sobrecargas y cortocircuitos.',
      'Subidas de tensión de la red.',
      'Fallo del conductor de tierra.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los interruptores automáticos magnetotérmicos (PIA) protegen los circuitos eléctricos contra sobrecargas (parte térmica) y cortocircuitos (parte magnética).'
  },
  {
    id: 'u4q10',
    unit: 4,
    questionText: '¿Cuál es la sensibilidad típica de un interruptor diferencial para la protección de personas en viviendas?',
    options: [
      '10 Amperios (A)',
      '300 Miliamperios (mA)',
      '30 Miliamperios (mA)',
      '3 Amperios (A)'
    ],
    correctAnswerIndex: 2,
    explanation: 'Para la protección de personas en viviendas, la sensibilidad de los interruptores diferenciales suele ser alta, de 30 mA (0.03 A).'
  },
  {
    id: 'u4q11',
    unit: 4,
    questionText: 'Un conmutador se utiliza para:',
    options: [
      'Regular la intensidad de una luz.',
      'Controlar un punto de luz desde un solo sitio.',
      'Controlar un punto de luz desde dos sitios diferentes.',
      'Proteger el circuito de iluminación contra cortocircuitos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los conmutadores se utilizan en instalaciones donde se quiere controlar un punto de luz (encendido/apagado) desde dos lugares distintos (ej. extremos de un pasillo).'
  },
  {
    id: 'u4q12',
    unit: 4,
    questionText: 'La función principal de la "red de tierra" en una instalación eléctrica es:',
    options: [
      'Aumentar la potencia disponible.',
      'Reducir el consumo eléctrico.',
      'Limitar la tensión de las masas metálicas respecto a tierra en caso de fallo, protegiendo a las personas.',
      'Servir como conductor de retorno para la corriente.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La puesta a tierra limita la tensión que, con respecto a tierra, pueden tener las masas metálicas en ciertos momentos (fallos de aislamiento), derivando la corriente de defecto y haciendo actuar al diferencial para proteger a las personas.'
  },
  {
    id: 'u4q13',
    unit: 4,
    questionText: '¿Qué tipo de lámpara funciona calentando un filamento hasta que emite luz visible, siendo poco eficiente energéticamente?',
    options: [
      'Lámpara LED',
      'Lámpara fluorescente',
      'Lámpara de incandescencia',
      'Lámpara de vapor de sodio'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las lámparas de incandescencia funcionan calentando un filamento conductor fino hasta que emite luz. Su eficiencia es baja ya que gran parte de la energía se pierde como calor.'
  },
  {
    id: 'u4q14',
    unit: 4,
    questionText: 'Una "luminaria" es:',
    options: [
      'Solo la bombilla o fuente de luz.',
      'El interruptor que enciende la luz.',
      'El conjunto de elementos que soporta, protege y distribuye la luz emitida por una o más lámparas.',
      'El cableado de la instalación de alumbrado.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una luminaria es el conjunto de elementos destinados a repartir, filtrar o transformar la luz emitida por una o más lámparas, englobando dispositivos de soporte, fijación y protección.'
  },
  {
    id: 'u4q15',
    unit: 4,
    questionText: 'El alumbrado exterior vial funcional (Clases A, B) se refiere principalmente a:',
    options: [
      'Iluminación de parques y jardines.',
      'Iluminación de autopistas, autovías y vías urbanas para seguridad del tráfico.',
      'Iluminación decorativa de fachadas.',
      'Alumbrado de emergencia en túneles.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El alumbrado vial funcional corresponde al alumbrado de autopistas, autovías, carreteras y vías urbanas, donde la velocidad del tráfico es un factor clave (Clases A y B).'
  },
  {
    id: 'u4q16',
    unit: 4,
    questionText: '¿Cuál es uno de los objetivos del "alumbrado de seguridad" en zonas como polígonos industriales?',
    options: [
      'Mejorar la estética de la zona.',
      'Reducir el consumo energético al mínimo.',
      'Vigilancia y reducción de la inseguridad.',
      'Facilitar el tráfico de vehículos pesados.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El alumbrado de seguridad se instala en zonas alejadas con un objetivo de vigilancia, buscando reducir la inseguridad.'
  },
  {
    id: 'u4q17',
    unit: 4,
    questionText: 'La "Infraestructura Común de Telecomunicaciones" (ICT) de un edificio NO tiene como función principal:',
    options: [
      'Captar y adaptar señales de radiodifusión sonora y televisión.',
      'Proporcionar acceso al servicio de telefonía.',
      'Generar energía eléctrica para los equipos de telecomunicaciones.',
      'Permitir la conexión a servicios de telecomunicaciones de banda ancha.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ICT facilita el acceso a servicios de telecomunicaciones (RTV, telefonía, banda ancha), pero no genera la energía eléctrica que estos necesitan (aunque sí prevé su alimentación desde la red eléctrica del edificio).'
  },
  {
    id: 'u4q18',
    unit: 4,
    questionText: 'El Recinto de Instalaciones de Telecomunicación Inferior (RITI) se encuentra generalmente en:',
    options: [
      'La cubierta del edificio, junto a las antenas.',
      'La parte baja del edificio, alojando registros principales de operadores.',
      'El interior de cada vivienda.',
      'Un local técnico en plantas intermedias.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El RITI se encuentra en la parte baja del edificio y contiene, entre otras cosas, los registros principales de los operadores de telefonía y telecomunicaciones de banda ancha.'
  },
  {
    id: 'u4q19',
    unit: 4,
    questionText: '¿Qué tipo de antena es comúnmente empleada en las instalaciones de televisión terrestre?',
    options: [
      'Antena de dipolo simple',
      'Antena Yagi',
      'Antena parabólica',
      'Antena de cuadro'
    ],
    correctAnswerIndex: 1,
    explanation: 'La antena Yagi es un tipo de antena direccional muy empleada para la recepción de señales de televisión terrestre (TDT).'
  },
  {
    id: 'u4q20',
    unit: 4,
    questionText: 'El "Punto de Terminación de Red" (PTR) en una instalación telefónica fija:',
    options: [
      'Es el teléfono principal de la vivienda.',
      'Es un amplificador de señal instalado por el usuario.',
      'Es un cuadro que separa la red interna del abonado del cable exterior del operador.',
      'Es la centralita telefónica del edificio.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El PTR es un dispositivo (cajetín) ubicado en el domicilio del abonado que separa la red interna del mismo y el cable exterior, considerándose parte de la red del operador.'
  },
  {
    id: 'u4q21',
    unit: 4,
    questionText: '¿Qué es el "coeficiente de simultaneidad" en instalaciones eléctricas?',
    options: [
      'La máxima caída de tensión permitida.',
      'Un factor que relaciona la potencia máxima que puede entregar una instalación con la suma de potencias nominales de los receptores.',
      'El tiempo que pueden funcionar los aparatos a la vez.',
      'La eficiencia de los transformadores.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El coeficiente de simultaneidad es el cociente entre la potencia eléctrica máxima que puede entregar una instalación y la suma de las potencias nominales de todos los receptores que pueden conectarse a ella.'
  },
  {
    id: 'u4q22',
    unit: 4,
    questionText: '¿Cuál es la tensión límite superior para ser considerada "Baja Tensión" en corriente alterna según el REBT?',
    options: [
      '230 V',
      '400 V',
      '750 V',
      '1000 V'
    ],
    correctAnswerIndex: 3,
    explanation: 'Se considera Baja Tensión en corriente alterna aquella cuya tensión nominal eficaz (Un) es superior a 50V pero inferior o igual a 1000V.'
  },
  {
    id: 'u4q23',
    unit: 4,
    questionText: 'La "Línea Repartidora" o "Línea General de Alimentación" (LGA) conecta:',
    options: [
      'El contador con el cuadro de la vivienda.',
      'La CGP con la centralización de contadores.',
      'La red de distribución pública con la CGP.',
      'Los diferentes circuitos dentro de la vivienda.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La Línea Repartidora (o LGA) conecta la Caja General de Protección (CGP) con el cuarto destinado a contener la centralización de contadores.'
  },
  {
    id: 'u4q24',
    unit: 4,
    questionText: 'En el Grado de Electrificación Básico, ¿cuál es el circuito C3?',
    options: [
      'Iluminación.',
      'Tomas de corriente de uso general.',
      'Cocina y horno.',
      'Lavadora, lavavajillas y termo.'
    ],
    correctAnswerIndex: 2,
    explanation: 'En el Grado de Electrificación Básico, el circuito C3 está destinado a alimentar la cocina y el horno.'
  },
  {
    id: 'u4q25',
    unit: 4,
    questionText: 'La "Intensidad Máxima Admisible" (Imax) de un conductor depende principalmente de:',
    options: [
      'Su color de aislamiento.',
      'Su longitud.',
      'Su sección y material.',
      'El tipo de canalización.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La Intensidad Máxima Admisible (Imax) de un conductor, es decir, la corriente que soporta sin sobrecalentarse peligrosamente, depende fundamentalmente de su sección y del material conductor.'
  },
  {
    id: 'u4q26',
    unit: 4,
    questionText: '¿Qué tipo de canalización se utiliza comúnmente para proteger los conductores eléctricos empotrados en paredes?',
    options: [
      'Bandejas metálicas perforadas.',
      'Tubos protectores (rígidos o flexibles).',
      'Canales de obra de fábrica abiertos.',
      'Cables armados sin protección adicional.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Para instalaciones empotradas, se utilizan tubos protectores, que pueden ser rígidos, curvables o flexibles, para alojar y proteger los conductores.'
  },
  {
    id: 'u4q27',
    unit: 4,
    questionText: 'Un "conmutador de cruce" se utiliza en una instalación de alumbrado para:',
    options: [
      'Regular la intensidad de la luz.',
      'Controlar un punto de luz desde un solo lugar.',
      'Controlar un punto de luz desde dos lugares.',
      'Controlar un punto de luz desde tres o más lugares (intercalado entre conmutadores).'
    ],
    correctAnswerIndex: 3,
    explanation: 'El conmutador de cruce (o cruzamiento) se intercala entre dos conmutadores para permitir el control de un mismo punto de luz desde tres o más ubicaciones diferentes.'
  },
  {
    id: 'u4q28',
    unit: 4,
    questionText: '¿Cuál es el propósito de un "electrodo" en una instalación de puesta a tierra?',
    options: [
      'Conectar los cables de fase y neutro.',
      'Ser una masa metálica en buen contacto con el terreno para facilitar el paso de corrientes de defecto.',
      'Aislar la instalación eléctrica del suelo.',
      'Medir la resistividad del terreno.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El electrodo es una masa metálica (pica, placa, etc.) permanentemente en buen contacto con el terreno, que facilita el paso de las corrientes de defecto o la carga eléctrica hacia tierra.'
  },
  {
    id: 'u4q29',
    unit: 4,
    questionText: 'Las lámparas fluorescentes compactas (CFL) fueron diseñadas principalmente para:',
    options: [
      'Iluminación de grandes estadios.',
      'Sustituir a las lámparas incandescentes convencionales ofreciendo mayor eficiencia y vida útil.',
      'Alumbrado público de carreteras.',
      'Funcionar con corriente continua exclusivamente.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las lámparas fluorescentes compactas se fabricaron para sustituir a las lámparas incandescentes convencionales, consumiendo menos energía y teniendo una vida útil más larga, con un casquillo compatible.'
  },
  {
    id: 'u4q30',
    unit: 4,
    questionText: 'El Recinto de Instalaciones de Telecomunicación Superior (RITS) aloja principalmente:',
    options: [
      'Los contadores de telefonía.',
      'Los equipos de cabecera para la captación y distribución de señales de Radio y Televisión (RTV).',
      'Los puntos de interconexión con los operadores de banda ancha.',
      'Los servidores de datos del edificio.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El RITS es el local donde se instalan los elementos necesarios para la prestación del servicio de RTV, como los equipos de cabecera (amplificadores, etc.) para su distribución.'
  },
  {
    id: 'u4q31',
    unit: 4,
    questionText: '¿Qué característica define la "directividad" de una antena?',
    options: [
      'Su resistencia al viento.',
      'El rango de frecuencias que puede recibir.',
      'Su capacidad de concentrar la energía absorbida o radiada en una dirección específica.',
      'El material del que está fabricada.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La directividad de una antena se refiere a su capacidad de concentrar la energía que radia (si es emisora) o que capta (si es receptora) en una dirección particular del espacio.'
  },
  {
    id: 'u4q32',
    unit: 4,
    questionText: 'El "cableado estructurado" en un edificio busca proporcionar una infraestructura de comunicaciones que sea:',
    options: [
      'Lo más barata posible, usando cables de baja calidad.',
      'Exclusivamente para la red eléctrica.',
      'Versátil, organizada y capaz de soportar diversos servicios (voz, datos, vídeo) y tecnologías futuras.',
      'Visible y accesible desde cualquier punto del edificio.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los sistemas de cableado estructurado sirven para satisfacer las necesidades de comunicación del edificio de forma global, permitiendo la transmisión de voz, datos y otras señales, y facilitando futuras ampliaciones o cambios.'
  },
  {
    id: 'u4q33',
    unit: 4,
    questionText: '¿Cuál es la principal ventaja de transmitir "voz y datos digitalizados" por el mismo cableado?',
    options: [
      'Reduce la velocidad de transmisión.',
      'Aumenta la necesidad de diferentes tipos de cables.',
      'Permite un sistema de comunicaciones global e integrado utilizando una infraestructura común.',
      'Elimina la necesidad de un router.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Al digitalizar la voz y transmitirla como datos, se puede utilizar la misma infraestructura de cableado estructurado para todos los servicios de comunicación (teléfono, ordenadores, etc.), logrando un sistema integrado.'
  },
  {
    id: 'u4q34',
    unit: 4,
    questionText: 'El Real Decreto 346/2011 es conocido como el reglamento de:',
    options: [
      'Baja Tensión (REBT).',
      'Protección Contra Incendios (RIPCI).',
      'Instalaciones Térmicas (RITE).',
      'Infraestructuras Comunes de Telecomunicaciones (ICT2).'
    ],
    correctAnswerIndex: 3,
    explanation: 'El Real Decreto 346/2011, de 11 de marzo, aprueba el Reglamento regulador de las infraestructuras comunes de telecomunicaciones para el acceso a los servicios de telecomunicación en el interior de los edificios, conocido como ICT2.'
  },
  {
    id: 'u4q35',
    unit: 4,
    questionText: '¿Qué es la "caída de tensión" en un circuito eléctrico?',
    options: [
      'Un aumento repentino del voltaje.',
      'La diferencia de potencial que suministra la fuente.',
      'La disminución de la tensión eléctrica a lo largo de un conductor debido a su resistencia.',
      'El punto donde el circuito se interrumpe.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La caída de tensión es la diferencia de potencial (voltaje) que se pierde a lo largo de un conductor cuando circula una corriente eléctrica, debido a la resistencia del propio conductor.'
  },
  {
    id: 'u4q36',
    unit: 4,
    questionText: '¿Para qué sirve el "poder de corte" de un interruptor magnetotérmico?',
    options: [
      'Indica la potencia máxima que puede consumir el circuito.',
      'Es la intensidad máxima de cortocircuito que el interruptor puede interrumpir de forma segura.',
      'Define la sensibilidad del interruptor a las sobrecargas.',
      'Mide el tiempo que tarda en dispararse.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El poder de corte es la intensidad máxima de cortocircuito (en kA) que el interruptor automático puede interrumpir sin sufrir daños.'
  },
  {
    id: 'u4q37',
    unit: 4,
    questionText: 'Las lámparas halógenas son una evolución de las incandescentes que contienen en su interior:',
    options: [
      'Vapor de mercurio a alta presión.',
      'Un gas inerte y un halógeno (yodo, bromo).',
      'Polvos fluorescentes.',
      'Un chip LED.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las lámparas halógenas contienen en su interior una atmósfera gaseosa formada por un gas inerte y una pequeña cantidad de un halógeno (como yodo o bromo) o un halogenuro metálico.'
  },
  {
    id: 'u4q38',
    unit: 4,
    questionText: 'En el contexto de las ICT, ¿qué significa RTV?',
    options: [
      'Red Telefónica de Vivienda.',
      'Registro Técnico de Verificación.',
      'Radiodifusión y Televisión (terrestre y satélite).',
      'Regulador de Tensión Variable.'
    ],
    correctAnswerIndex: 2,
    explanation: 'RTV en el ámbito de las ICT se refiere a los servicios de Radiodifusión y Televisión, tanto terrestre como por satélite.'
  },
  {
    id: 'u4q39',
    unit: 4,
    questionText: '¿Cuál es una precaución importante al instalar cableado estructurado para voz/datos cerca de cables de energía eléctrica?',
    options: [
      'Utilizar los mismos tubos para ahorrar espacio.',
      'Cruzar los cables de datos y energía perpendicularmente siempre que sea posible.',
      'Mantenerlos separados en canalizaciones distintas o con separadores para evitar interferencias electromagnéticas.',
      'Conectar las tierras de ambos sistemas en múltiples puntos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los conductores de señal (voz/datos) deben estar separados en canalizaciones distintas de los conductores de energía eléctrica, o usar separadores, para evitar interferencias debidas al campo magnético generado por la corriente eléctrica.'
  },
  {
    id: 'u4q40',
    unit: 4,
    questionText: 'El "borne principal de tierra" de una instalación eléctrica sirve para:',
    options: [
      'Conectar el interruptor general automático.',
      'Unir los conductores de tierra, los de protección y los de unión equipotencial.',
      'Distribuir la fase a los diferentes circuitos.',
      'Alojar el contador de energía.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El borne principal de tierra es el punto donde se unen los conductores de tierra (de los electrodos), los conductores de protección de la instalación, los de unión equipotencial principal y los de puesta a tierra funcional si son necesarios.'
  }
];
