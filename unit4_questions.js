// unit4_questions.js
// Preguntas basadas en el resumen de la Unidad 4: Configuración de instalaciones de electricidad y telecomunicaciones (Opciones Revisadas)
export const unit4Questions = [
  {
    id: 'u4q1',
    unit: 4,
    questionText: '¿Qué es la "tensión" eléctrica?',
    options: [
      'Flujo de electrones',
      'Energía por tiempo',
      'Diferencia de potencial',
      'Oposición a la corriente'
    ],
    correctAnswerIndex: 2,
    explanation: 'La tensión es la diferencia de potencial eléctrico entre dos puntos, necesaria para que fluya la corriente. Se mide en Voltios (V).'
  },
  {
    id: 'u4q2',
    unit: 4,
    questionText: 'Diferencia principal: corriente monofásica vs. trifásica:',
    options: [
      'Monofásica solo AT',
      'Número de fases',
      'Monofásica sin neutro',
      'Trifásica solo para luz'
    ],
    correctAnswerIndex: 1,
    explanation: 'La diferencia principal es el número de fases: monofásica tiene una fase (y neutro), trifásica tiene tres fases (y neutro) desfasadas 120º.'
  },
  {
    id: 'u4q3',
    unit: 4,
    questionText: 'Tensión de suministro monofásica habitual en viviendas (España):',
    options: [
      '110 V',
      '230 V',
      '400 V',
      '1000 V'
    ],
    correctAnswerIndex: 1,
    explanation: 'La Baja Tensión es la que llega a los usuarios, siendo en España 230V para monofásica.'
  },
  {
    id: 'u4q4',
    unit: 4,
    questionText: 'Función principal del REBT (Reglamento Electrotécnico Baja Tensión):',
    options: [
      'Regular alta tensión',
      'Establecer tarifas',
      'Fijar condiciones BT',
      'Definir color aparatos'
    ],
    correctAnswerIndex: 2,
    explanation: 'El REBT establece las condiciones técnicas y garantías para las instalaciones eléctricas en BT, protegiendo personas y bienes.'
  },
  {
    id: 'u4q5',
    unit: 4,
    questionText: 'La "instalación de enlace" eléctrica va desde la red pública hasta:',
    options: [
      'Interruptor de lámpara',
      'Enchufe de cocina',
      'ICP de la vivienda',
      'Transformador barrio'
    ],
    correctAnswerIndex: 2,
    explanation: 'La instalación de enlace es el recorrido de la electricidad desde la red pública hasta el Interruptor de Control de Potencia (ICP) dentro de la vivienda.'
  },
  {
    id: 'u4q6',
    unit: 4,
    questionText: '¿Qué elemento contiene los fusibles de protección de la línea repartidora?',
    options: [
      'Centralización contadores',
      'Derivación Individual',
      'Caja General Protección (CGP)',
      'Interruptor Control Potencia (ICP)'
    ],
    correctAnswerIndex: 2,
    explanation: 'La Caja General de Protección (CGP) contiene los fusibles que protegen la línea repartidora (o LGA) que ingresa al edificio.'
  },
  {
    id: 'u4q7',
    unit: 4,
    questionText: 'Potencia mínima prevista para Grado de Electrificación Básico:',
    options: [
      '3.450 W',
      '5.750 W',
      '9.200 W',
      '12.500 W'
    ],
    correctAnswerIndex: 1,
    explanation: 'El Grado de Electrificación Básico plantea una potencia mínima a contratar de 5.750 W (a 230V).'
  },
  {
    id: 'u4q8',
    unit: 4,
    questionText: 'Color normalizado para el conductor Neutro en España:',
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
    questionText: 'Un interruptor magnetotérmico (PIA) protege contra:',
    options: [
      'Solo fugas a tierra',
      'Sobrecargas y cortocircuitos',
      'Subidas de tensión',
      'Fallo de tierra'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los interruptores automáticos magnetotérmicos (PIA) protegen los circuitos contra sobrecargas (térmica) y cortocircuitos (magnética).'
  },
  {
    id: 'u4q10',
    unit: 4,
    questionText: 'Sensibilidad típica de un interruptor diferencial en viviendas:',
    options: [
      '10 Amperios',
      '300 Miliamperios',
      '30 Miliamperios',
      '3 Amperios'
    ],
    correctAnswerIndex: 2,
    explanation: 'Para la protección de personas en viviendas, la sensibilidad de los interruptores diferenciales suele ser alta, de 30 mA (0.03 A).'
  },
  {
    id: 'u4q11',
    unit: 4,
    questionText: 'Un conmutador se utiliza para controlar una luz desde:',
    options: [
      'Un solo sitio',
      'Dos sitios diferentes',
      'Tres o más sitios',
      'De forma remota'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los conmutadores se utilizan para controlar un punto de luz (encendido/apagado) desde dos lugares distintos.'
  },
  {
    id: 'u4q12',
    unit: 4,
    questionText: 'Función principal de la "red de tierra" eléctrica:',
    options: [
      'Aumentar potencia',
      'Reducir consumo',
      'Protección de personas',
      'Retorno de corriente'
    ],
    correctAnswerIndex: 2,
    explanation: 'La puesta a tierra limita la tensión de las masas metálicas respecto a tierra en caso de fallo, protegiendo a las personas al derivar la corriente de defecto.'
  },
  {
    id: 'u4q13',
    unit: 4,
    questionText: 'Lámpara poco eficiente que calienta un filamento:',
    options: [
      'LED',
      'Fluorescente',
      'Incandescente',
      'Vapor de sodio'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las lámparas de incandescencia funcionan calentando un filamento hasta que emite luz, siendo poco eficientes energéticamente.'
  },
  {
    id: 'u4q14',
    unit: 4,
    questionText: 'Una "luminaria" es el conjunto que incluye:',
    options: [
      'Solo la bombilla',
      'El interruptor',
      'Lámpara, soporte y óptica',
      'El cableado'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una luminaria es el conjunto de elementos que soporta, protege y distribuye la luz emitida por una o más lámparas (incluye óptica como reflector/difusor).'
  },
  {
    id: 'u4q15',
    unit: 4,
    questionText: 'Alumbrado exterior vial funcional (Clases A, B) es para:',
    options: [
      'Parques y jardines',
      'Seguridad del tráfico',
      'Decoración fachadas',
      'Emergencia túneles'
    ],
    correctAnswerIndex: 1,
    explanation: 'El alumbrado vial funcional (Clases A y B) corresponde al alumbrado de autopistas, autovías y vías urbanas, donde la seguridad del tráfico es clave.'
  },
  {
    id: 'u4q16',
    unit: 4,
    questionText: 'Objetivo del "alumbrado de seguridad" en polígonos:',
    options: [
      'Mejorar estética',
      'Reducir consumo',
      'Vigilancia y seguridad',
      'Facilitar tráfico'
    ],
    correctAnswerIndex: 2,
    explanation: 'El alumbrado de seguridad en zonas como polígonos industriales tiene un objetivo de vigilancia y reducción de la inseguridad.'
  },
  {
    id: 'u4q17',
    unit: 4,
    questionText: '¿Cuál NO es función principal de una ICT?',
    options: [
      'Captar señales RTV',
      'Acceso a telefonía',
      'Generar energía eléctrica',
      'Conexión a banda ancha'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ICT facilita el acceso a servicios de telecomunicaciones, pero no genera la energía eléctrica que estos necesitan.'
  },
  {
    id: 'u4q18',
    unit: 4,
    questionText: 'El Recinto de Instalaciones de Telecomunicación Inferior (RITI) se ubica:',
    options: [
      'En la cubierta',
      'Parte baja del edificio',
      'Interior de viviendas',
      'Plantas intermedias'
    ],
    correctAnswerIndex: 1,
    explanation: 'El RITI se encuentra generalmente en la parte baja del edificio y aloja los registros principales de los operadores de telefonía y banda ancha.'
  },
  {
    id: 'u4q19',
    unit: 4,
    questionText: 'Antena comúnmente empleada para televisión terrestre (TDT):',
    options: [
      'Dipolo simple',
      'Antena Yagi',
      'Parabólica',
      'De cuadro'
    ],
    correctAnswerIndex: 1,
    explanation: 'La antena Yagi es un tipo de antena direccional muy empleada para la recepción de señales de televisión terrestre (TDT).'
  },
  {
    id: 'u4q20',
    unit: 4,
    questionText: 'El "Punto de Terminación de Red" (PTR) en telefonía fija:',
    options: [
      'Teléfono principal',
      'Amplificador de señal',
      'Separa red abonado/operador',
      'Centralita del edificio'
    ],
    correctAnswerIndex: 2,
    explanation: 'El PTR es un dispositivo que separa la red interna del abonado del cable exterior del operador, considerándose parte de la red del operador.'
  },
  {
    id: 'u4q21',
    unit: 4,
    questionText: 'El "coeficiente de simultaneidad" eléctrico relaciona potencia máxima con:',
    options: [
      'Caída de tensión',
      'Suma potencias nominales',
      'Tiempo de funcionamiento',
      'Eficiencia transformador'
    ],
    correctAnswerIndex: 1,
    explanation: 'El coeficiente de simultaneidad relaciona la potencia máxima que puede entregar una instalación con la suma de potencias nominales de los receptores.'
  },
  {
    id: 'u4q22',
    unit: 4,
    questionText: 'Límite superior de "Baja Tensión" en CA según REBT:',
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
    questionText: 'La "Línea General de Alimentación" (LGA) conecta:',
    options: [
      'Contador a cuadro vivienda',
      'CGP a centralización contadores',
      'Red pública a CGP',
      'Circuitos en vivienda'
    ],
    correctAnswerIndex: 1,
    explanation: 'La Línea General de Alimentación (LGA) o línea repartidora conecta la Caja General de Protección (CGP) con la centralización de contadores.'
  },
  {
    id: 'u4q24',
    unit: 4,
    questionText: 'En Grado Electrificación Básico, el circuito C3 es para:',
    options: [
      'Iluminación',
      'Tomas uso general',
      'Cocina y horno',
      'Lavadora y termo'
    ],
    correctAnswerIndex: 2,
    explanation: 'En el Grado de Electrificación Básico, el circuito C3 está destinado a alimentar la cocina y el horno.'
  },
  {
    id: 'u4q25',
    unit: 4,
    questionText: '"Intensidad Máxima Admisible" (Imax) de un conductor depende de:',
    options: [
      'Color aislamiento',
      'Longitud',
      'Sección y material',
      'Tipo canalización'
    ],
    correctAnswerIndex: 2,
    explanation: 'La Intensidad Máxima Admisible (Imax) de un conductor depende fundamentalmente de su sección y del material conductor.'
  },
  {
    id: 'u4q26',
    unit: 4,
    questionText: 'Canalización común para conductores eléctricos empotrados:',
    options: [
      'Bandejas perforadas',
      'Tubos protectores',
      'Canales abiertos',
      'Cables armados solos'
    ],
    correctAnswerIndex: 1,
    explanation: 'Para instalaciones empotradas, se utilizan tubos protectores (rígidos o flexibles) para alojar y proteger los conductores.'
  },
  {
    id: 'u4q27',
    unit: 4,
    questionText: 'Un "conmutador de cruce" sirve para controlar una luz desde:',
    options: [
      'Regular intensidad',
      'Un solo lugar',
      'Dos lugares',
      'Tres o más lugares'
    ],
    correctAnswerIndex: 3,
    explanation: 'El conmutador de cruce (o cruzamiento) se intercala entre dos conmutadores para permitir el control de un mismo punto de luz desde tres o más ubicaciones.'
  },
  {
    id: 'u4q28',
    unit: 4,
    questionText: 'Propósito de un "electrodo" en una puesta a tierra:',
    options: [
      'Conectar fase y neutro',
      'Disipar corriente a tierra',
      'Aislar del suelo',
      'Medir resistividad'
    ],
    correctAnswerIndex: 1,
    explanation: 'El electrodo es una masa metálica en buen contacto con el terreno, que facilita el paso de las corrientes de defecto o la carga eléctrica hacia tierra.'
  },
  {
    id: 'u4q29',
    unit: 4,
    questionText: 'Lámparas fluorescentes compactas (CFL) fueron diseñadas para:',
    options: [
      'Iluminar estadios',
      'Sustituir incandescentes',
      'Alumbrado público',
      'Funcionar solo con CC'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las lámparas fluorescentes compactas se fabricaron para sustituir a las lámparas incandescentes convencionales, ofreciendo mayor eficiencia y vida útil.'
  },
  {
    id: 'u4q30',
    unit: 4,
    questionText: 'El Recinto de Instalaciones de Telecomunicación Superior (RITS) aloja:',
    options: [
      'Contadores telefonía',
      'Equipos cabecera RTV',
      'Puntos interconexión BA',
      'Servidores de datos'
    ],
    correctAnswerIndex: 1,
    explanation: 'El RITS es el local donde se instalan los elementos necesarios para la prestación del servicio de RTV, como los equipos de cabecera (amplificadores).'
  },
  {
    id: 'u4q31',
    unit: 4,
    questionText: 'Característica "directividad" de una antena:',
    options: [
      'Resistencia al viento',
      'Rango de frecuencias',
      'Concentración de energía',
      'Material de fabricación'
    ],
    correctAnswerIndex: 2,
    explanation: 'La directividad de una antena se refiere a su capacidad de concentrar la energía que radia o capta en una dirección específica del espacio.'
  },
  {
    id: 'u4q32',
    unit: 4,
    questionText: '"Cableado estructurado" busca una infraestructura de comunicaciones:',
    options: [
      'Barata y baja calidad',
      'Solo para red eléctrica',
      'Versátil y organizada',
      'Visible y accesible'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los sistemas de cableado estructurado buscan proporcionar una infraestructura versátil, organizada y capaz de soportar diversos servicios (voz, datos, vídeo) y tecnologías futuras.'
  },
  {
    id: 'u4q33',
    unit: 4,
    questionText: 'Ventaja de transmitir "voz y datos digitalizados" por mismo cableado:',
    options: [
      'Reduce velocidad',
      'Más tipos de cables',
      'Sistema global integrado',
      'Elimina router'
    ],
    correctAnswerIndex: 2,
    explanation: 'Al digitalizar la voz y transmitirla como datos, se puede utilizar la misma infraestructura de cableado estructurado para todos los servicios, logrando un sistema integrado.'
  },
  {
    id: 'u4q34',
    unit: 4,
    questionText: 'El Real Decreto 346/2011 es el reglamento de:',
    options: [
      'Baja Tensión (REBT)',
      'Contra Incendios (RIPCI)',
      'Térmicas (RITE)',
      'Telecomunicaciones (ICT2)'
    ],
    correctAnswerIndex: 3,
    explanation: 'El Real Decreto 346/2011 aprueba el Reglamento regulador de las infraestructuras comunes de telecomunicaciones (ICT2).'
  },
  {
    id: 'u4q35',
    unit: 4,
    questionText: '¿Qué es la "caída de tensión" en un circuito?',
    options: [
      'Aumento de voltaje',
      'Potencial de la fuente',
      'Disminución de tensión',
      'Interrupción circuito'
    ],
    correctAnswerIndex: 2,
    explanation: 'La caída de tensión es la disminución del voltaje eléctrico a lo largo de un conductor debido a su resistencia.'
  },
  {
    id: 'u4q36',
    unit: 4,
    questionText: 'El "poder de corte" de un magnetotérmico indica:',
    options: [
      'Potencia máx. circuito',
      'Intensidad máx. cortocircuito',
      'Sensibilidad a sobrecargas',
      'Tiempo de disparo'
    ],
    correctAnswerIndex: 1,
    explanation: 'El poder de corte es la intensidad máxima de cortocircuito (en kA) que el interruptor automático puede interrumpir de forma segura.'
  },
  {
    id: 'u4q37',
    unit: 4,
    questionText: 'Las lámparas halógenas contienen en su interior:',
    options: [
      'Vapor de mercurio',
      'Gas inerte y halógeno',
      'Polvos fluorescentes',
      'Un chip LED'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las lámparas halógenas contienen una atmósfera gaseosa formada por un gas inerte y una pequeña cantidad de un halógeno (como yodo o bromo).'
  },
  {
    id: 'u4q38',
    unit: 4,
    questionText: 'En ICT, ¿qué significa RTV?',
    options: [
      'Red Telefónica Vivienda',
      'Registro Técnico',
      'Radiodifusión y Televisión',
      'Regulador Tensión'
    ],
    correctAnswerIndex: 2,
    explanation: 'RTV en el ámbito de las ICT se refiere a los servicios de Radiodifusión y Televisión, tanto terrestre como por satélite.'
  },
  {
    id: 'u4q39',
    unit: 4,
    questionText: 'Precaución al instalar cableado de datos cerca de cables de energía:',
    options: [
      'Usar mismos tubos',
      'Cruzarlos siempre',
      'Separarlos o usar blindaje',
      'Conectar tierras juntas'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los conductores de señal (voz/datos) deben estar separados de los de energía eléctrica, o usar separadores/blindaje, para evitar interferencias electromagnéticas.'
  },
  {
    id: 'u4q40',
    unit: 4,
    questionText: 'El "borne principal de tierra" sirve para unir:',
    options: [
      'Interruptor general',
      'Conductores de tierra y protección',
      'Fase a circuitos',
      'Contador de energía'
    ],
    correctAnswerIndex: 1,
    explanation: 'El borne principal de tierra es el punto donde se unen los conductores de tierra (de los electrodos), los conductores de protección de la instalación y los de unión equipotencial.'
  }
];
