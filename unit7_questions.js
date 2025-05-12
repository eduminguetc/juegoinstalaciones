// unit7_questions.js
// Preguntas basadas en el resumen de la Unidad 7: Configuración de instalaciones de ventilación
export const unit7Questions = [
  {
    id: 'u7q1',
    unit: 7,
    questionText: '¿Cuál es el objetivo principal de la ventilación en un edificio?',
    options: [
      'Aumentar la temperatura interior en invierno.',
      'Sustituir el aire interior, considerado indeseable, por otro que aporte una mejora en pureza, temperatura y humedad.',
      'Reducir la presión atmosférica dentro de los locales.',
      'Distribuir el sonido de manera uniforme.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La ventilación tiene como objetivo la sustitución de una porción de aire que se considera indeseable, por otra que aporta una mejora en pureza, temperatura y humedad.'
  },
  {
    id: 'u7q2',
    unit: 7,
    questionText: 'Según el CTE DB HS 3, ¿dónde deben estar ubicadas las zonas de extracción de aire en las viviendas?',
    options: [
      'En los dormitorios y salones (locales secos).',
      'En los pasillos y vestíbulos.',
      'En las cocinas, cuartos de baño y zonas de limpieza (locales húmedos).',
      'Únicamente en la cubierta del edificio.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Según el DB HS 3, las zonas de extracción de aire han de estar, en las zonas residenciales, en las cocinas, los cuartos de baño y las zonas de limpieza (locales húmedos).'
  },
  {
    id: 'u7q3',
    unit: 7,
    questionText: '¿Qué es el "número de renovaciones por hora" en ventilación?',
    options: [
      'La velocidad del aire en los conductos.',
      'La cantidad de veces que el volumen total de aire de un local es sustituido por aire nuevo en una hora.',
      'El caudal de aire que pasa por un filtro.',
      'La pérdida de carga del sistema de ventilación.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La renovación de aire de un local es la cantidad de aire necesaria para sustituir por completo el aire que ocupa el volumen de dicho local, y se mide en número de renovaciones por hora (ren/h).'
  },
  {
    id: 'u7q4',
    unit: 7,
    questionText: 'La ventilación "híbrida" en viviendas se caracteriza por:',
    options: [
      'Utilizar exclusivamente ventiladores de alta potencia.',
      'Funcionar de forma natural cuando las condiciones son favorables y con ayuda mecánica cuando son desfavorables.',
      'Renovar el aire solo mediante la apertura manual de ventanas.',
      'No utilizar conductos de extracción.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La ventilación híbrida es aquella en la que, cuando las condiciones de presión y temperatura ambiental son favorables, la renovación del aire se produce de forma natural, y cuando son desfavorables, con extracción mecánica.'
  },
  {
    id: 'u7q5',
    unit: 7,
    questionText: 'En la ventilación mecánica de viviendas, ¿dónde se suelen colocar las aberturas de admisión de aire exterior?',
    options: [
      'En los techos de los baños.',
      'En las paredes de las cocinas.',
      'En las fachadas de los recintos secos (comedores, dormitorios, sala de estar) o en las carpinterías.',
      'Directamente en los conductos de extracción.'
    ],
    correctAnswerIndex: 2,
    explanation: 'En la ventilación mecánica (y también híbrida), las aberturas de admisión se sitúan en los locales secos, como las fachadas de comedores, dormitorios y salas de estar, o incorporadas en las carpinterías (aireadores).'
  },
  {
    id: 'u7q6',
    unit: 7,
    questionText: '¿Cuál es la principal razón para ventilar un garaje o aparcamiento cerrado?',
    options: [
      'Eliminar el exceso de humedad.',
      'Controlar los niveles de monóxido de carbono (CO) y otros contaminantes de los vehículos.',
      'Aumentar la temperatura en invierno.',
      'Reducir el ruido ambiental.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Una de las principales funciones de la ventilación en garajes es el manejo y la reducción de sustancias contaminantes, especialmente el monóxido de carbono (CO) emitido por los vehículos.'
  },
  {
    id: 'u7q7',
    unit: 7,
    questionText: '¿Qué tipo de ventilación es suficiente para aparcamientos cerrados con una superficie construida menor de 40 m² (o <5 plazas residenciales)?',
    options: [
      'Ventilación mecánica por impulsión exclusivamente.',
      'Ventilación mecánica equilibrada con recuperación de calor.',
      'Ventilación natural, si cumple ciertos requisitos de aberturas.',
      'No se requiere ventilación.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Para aparcamientos cerrados cuya construcción sea menor de 40 m² (o menos de 5 plazas si es uso vivienda, según CTE DB HS3), la ventilación de tipo natural puede ser suficiente si se cumplen las condiciones de aberturas.'
  },
  {
    id: 'u7q8',
    unit: 7,
    questionText: 'Los "conductos" en un sistema de ventilación mecánica sirven para:',
    options: [
      'Filtrar el aire de entrada.',
      'Generar el movimiento del aire.',
      'Transportar el aire desde o hacia una estancia determinada.',
      'Regular la temperatura del aire.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los conductos son esenciales en la ventilación mecánica, ya que permiten transportar el aire (de admisión o extracción) desde o hacia una estancia determinada hasta el exterior o la unidad de tratamiento.'
  },
  {
    id: 'u7q9',
    unit: 7,
    questionText: 'Al representar gráficamente una instalación de ventilación, es importante:',
    options: [
      'Indicar solo la ubicación de los ventiladores.',
      'No diferenciar los tipos de conductos.',
      'Diferenciar gráficamente los sistemas elegidos y el trazado de conductos, indicando características.',
      'Omitir las aberturas de admisión y extracción.'
    ],
    correctAnswerIndex: 2,
    explanation: 'En la representación gráfica se debe diferenciar los sistemas de ventilación, indicar trazados de conductos, sus características, ubicación de aberturas y características de equipos como extractores.'
  },
  {
    id: 'u7q10',
    unit: 7,
    questionText: 'El "efecto chimenea" en la ventilación natural se produce debido a:',
    options: [
      'La acción del viento sobre la cubierta.',
      'La diferencia de densidad entre el aire interior (más caliente y ligero) y el exterior (más frío y denso).',
      'El uso de ventiladores axiales.',
      'La presión generada por los ocupantes.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El efecto chimenea o tiro térmico se produce por la diferencia de temperaturas (y por tanto de densidades) entre el aire interior y el exterior, lo que causa un movimiento ascendente del aire más caliente.'
  },
  {
    id: 'u7q11',
    unit: 7,
    questionText: '¿Qué son las "aberturas de paso" en el esquema de ventilación de viviendas del CTE?',
    options: [
      'Las rejillas de entrada de aire en fachada.',
      'Los conductos de extracción que van a cubierta.',
      'Los huecos (ej. bajo las puertas) que permiten la circulación de aire entre locales secos y húmedos.',
      'Las ventanas abiertas para ventilación cruzada.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las aberturas de paso son aquellas que permiten la circulación del aire entre los locales secos (donde entra el aire) y los locales húmedos (de donde se extrae), como el espacio libre inferior de las puertas.'
  },
  {
    id: 'u7q12',
    unit: 7,
    questionText: 'Un sistema de ventilación mecánica "equilibrada" implica que:',
    options: [
      'Solo se extrae aire mecánicamente.',
      'Solo se introduce aire mecánicamente.',
      'Tanto la admisión como la extracción de aire se realizan mediante ventiladores.',
      'El sistema se equilibra automáticamente con la ventilación natural.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ventilación equilibrada es aquella en la que tanto la entrada de aire exterior como la salida del aire viciado se realizan mediante sistemas mecánicos (ventiladores), permitiendo un control preciso de los caudales.'
  },
  {
    id: 'u7q13',
    unit: 7,
    questionText: '¿Cuál es una ventaja de la ventilación mecánica equilibrada con recuperación de calor?',
    options: [
      'Es el sistema más barato de instalar.',
      'No requiere ningún tipo de filtro.',
      'Permite ahorrar energía al transferir calor del aire extraído al aire admitido.',
      'Funciona sin necesidad de electricidad.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La principal ventaja de los recuperadores de calor en sistemas de ventilación equilibrada es el ahorro energético, ya que precalientan (en invierno) o preenfrían (en verano) el aire de admisión utilizando la energía del aire de extracción.'
  },
  {
    id: 'u7q14',
    unit: 7,
    questionText: 'Los ventiladores "centrífugos" o "radiales" son adecuados para:',
    options: [
      'Mover grandes caudales de aire con baja presión (ej. en pared).',
      'Vencer mayores pérdidas de carga en sistemas con conductos largos.',
      'Funcionar sin electricidad.',
      'Ser completamente silenciosos en cualquier aplicación.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los ventiladores centrífugos (radiales) son capaces de generar mayor presión que los axiales, por lo que son más adecuados para sistemas donde el aire debe recorrer conductos largos o vencer la resistencia de filtros y otros componentes.'
  },
  {
    id: 'u7q15',
    unit: 7,
    questionText: '¿Dónde se deben instalar las aberturas de extracción en una vivienda según el CTE DB HS 3?',
    options: [
      'En los dormitorios.',
      'En los salones.',
      'En las cocinas y cuartos de baño/aseos.',
      'En los pasillos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las aberturas de extracción deben estar situadas en los locales húmedos: cocinas, baños, aseos y cuartos de limpieza.'
  },
  {
    id: 'u7q16',
    unit: 7,
    questionText: 'La "pérdida de carga" en un sistema de ventilación es un fenómeno que:',
    options: [
      'Aumenta la eficiencia del ventilador.',
      'Reduce la resistencia al flujo de aire.',
      'Procede de la resistencia que el aire encuentra al pasar por conductos, filtros y accesorios.',
      'Mejora la calidad del aire interior.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La pérdida de carga es la resistencia que el sistema de ventilación (conductos, codos, rejillas, filtros) opone al flujo de aire, lo que se traduce en una caída de presión que el ventilador debe vencer.'
  },
  {
    id: 'u7q17',
    unit: 7,
    questionText: '¿Qué tipo de aberturas de admisión pueden ajustar el caudal de aire en función de la humedad del local?',
    options: [
      'Aberturas fijas sin regulación.',
      'Aberturas autorregulables (caudal constante).',
      'Aberturas higrorregulables.',
      'Aberturas operadas manualmente.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las aberturas higrorregulables varían su sección de paso (y por tanto el caudal de aire) en función del nivel de humedad relativa del ambiente interior.'
  },
  {
    id: 'u7q18',
    unit: 7,
    questionText: 'En la ventilación de garajes, los sistemas de extracción suelen tomar el aire contaminado preferentemente de:',
    options: [
      'Puntos altos, cerca del techo.',
      'Puntos bajos, ya que algunos contaminantes como el CO son más densos que el aire frío.',
      'El centro exacto del garaje.',
      'Las rampas de acceso y salida.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Dado que el monóxido de carbono (CO) es ligeramente más denso que el aire frío, y otros contaminantes pueden acumularse a nivel bajo, se recomienda que las tomas de extracción en garajes estén situadas cerca del suelo (y también en puntos altos para gases más ligeros o humo caliente).'
  },
  {
    id: 'u7q19',
    unit: 7,
    questionText: 'La ventilación "natural" en un edificio se produce por la acción de:',
    options: [
      'Ventiladores eléctricos y extractores.',
      'Filtros de carbón activado.',
      'El viento y/o las diferencias de temperatura (tiro térmico).',
      'Sistemas de aire acondicionado.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ventilación natural se produce por la acción del viento sobre las aberturas del edificio o por las diferencias de temperatura entre el aire interior y exterior, que generan un tiro térmico (efecto chimenea).'
  },
  {
    id: 'u7q20',
    unit: 7,
    questionText: '¿Qué es un conducto "shunt" en ventilación de viviendas?',
    options: [
      'Un conducto individual para cada vivienda.',
      'Un tipo de filtro especial para cocinas.',
      'Un conducto colectivo vertical al que acometen las extracciones de varias viviendas en diferentes plantas.',
      'Un silenciador para reducir el ruido del extractor.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Un conducto shunt es un tipo de conducto colectivo vertical que permite la extracción de aire de locales húmedos (baños, aseos) de varias viviendas superpuestas, diseñado para evitar la revuelta de olores entre ellas.'
  },
  {
    id: 'u7q21',
    unit: 7,
    questionText: 'La "ventilación complementaria" en viviendas se refiere a:',
    options: [
      'La ventilación mínima obligatoria según CTE.',
      'La que se realiza abriendo ventanas y puertas exteriores.',
      'El uso de purificadores de aire portátiles.',
      'La ventilación de los trasteros y garajes.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La ventilación general de las viviendas puede ser complementada con la ventilación adicional que se realiza mediante la apertura de ventanas o puertas exteriores, especialmente en dormitorios, cocinas y salas de estar.'
  },
  {
    id: 'u7q22',
    unit: 7,
    questionText: '¿Cuál de estos NO es un objetivo principal de la ventilación en edificación?',
    options: [
      'Mantener un control de la temperatura de los espacios interiores.',
      'Mantener control de la humedad.',
      'Aumentar la concentración de CO2 en el interior.',
      'Limitar la contaminación ambiental interna.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ventilación busca reducir la concentración de CO2 y otros contaminantes, no aumentarla. Sí contribuye al control de temperatura y humedad.'
  },
  {
    id: 'u7q23',
    unit: 7,
    questionText: 'Un extractor "híbrido" se caracteriza por:',
    options: [
      'Funcionar siempre a máxima potencia.',
      'Ser de muy bajo consumo y activarse solo cuando la ventilación natural es insuficiente.',
      'Utilizar energía solar exclusivamente.',
      'No necesitar conductos de extracción.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los aspiradores híbridos son de bajo consumo y están diseñados para activarse únicamente cuando las condiciones naturales de presión y temperatura no son suficientes para lograr el caudal de ventilación requerido.'
  },
  {
    id: 'u7q24',
    unit: 7,
    questionText: 'El caudal de aire en ventilación se suele medir en:',
    options: [
      'Pascales (Pa)',
      'Metros por segundo (m/s)',
      'Litros por segundo (l/s) o metros cúbicos por hora (m³/h).',
      'Decibelios (dB)'
    ],
    correctAnswerIndex: 2,
    explanation: 'El caudal de aire, que es el volumen de aire movido por unidad de tiempo, se mide comúnmente en litros por segundo (l/s) o en metros cúbicos por hora (m³/h).'
  },
  {
    id: 'u7q25',
    unit: 7,
    questionText: 'En un sistema de ventilación mecánica por extracción para viviendas, el aire exterior entra por:',
    options: [
      'Las mismas rejillas de extracción de los baños.',
      'Un ventilador de impulsión centralizado.',
      'Aberturas de admisión situadas en locales secos (salón, dormitorios).',
      'Fugas incontroladas en la carpintería exclusivamente.'
    ],
    correctAnswerIndex: 2,
    explanation: 'En la ventilación mecánica por extracción, el extractor crea una depresión en los locales húmedos, lo que fuerza la entrada de aire exterior a través de las aberturas de admisión dispuestas en los locales secos.'
  },
  {
    id: 'u7q26',
    unit: 7,
    questionText: 'La "ventilación espontánea" o incontrolada es aquella que se produce a través de:',
    options: [
      'Rejillas de admisión diseñadas específicamente.',
      'Ventiladores programados.',
      'Rendijas, juntas de ventanas/puertas y otros huecos no intencionados.',
      'Conductos de extracción con recuperador de calor.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ventilación espontánea es la que ocurre a través de rendijas, huecos en la carpintería y otros puntos no diseñados para la ventilación controlada, causada por diferencias de presión o temperatura.'
  },
  {
    id: 'u7q27',
    unit: 7,
    questionText: '¿Qué documento del CTE establece las exigencias básicas de calidad del aire interior y ventilación en viviendas?',
    options: [
      'DB SI (Seguridad en caso de Incendio)',
      'DB HE (Ahorro de Energía)',
      'DB HS 3 (Calidad del aire interior)',
      'DB SU (Seguridad de Utilización y Accesibilidad)'
    ],
    correctAnswerIndex: 2,
    explanation: 'El Documento Básico HS 3 "Calidad del aire interior" del Código Técnico de la Edificación es el que establece los requisitos para la ventilación de las viviendas.'
  },
  {
    id: 'u7q28',
    unit: 7,
    questionText: 'Si un garaje cerrado tiene detectores de CO, ¿cuándo se activarán normalmente los ventiladores mecánicos?',
    options: [
      'De forma continua, las 24 horas del día.',
      'Solo cuando se encienden las luces del garaje.',
      'Cuando la concentración de CO supera un umbral preestablecido.',
      'Únicamente en caso de incendio.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los sistemas de ventilación mecánica en garajes suelen estar controlados por detectores de CO, que activan los ventiladores cuando la concentración de este gas alcanza un nivel determinado (ej. 50 ppm) para asegurar la calidad del aire y ahorrar energía.'
  },
  {
    id: 'u7q29',
    unit: 7,
    questionText: 'Al representar la ventilación en planos, ¿es necesario indicar las alturas de los elementos verticales en la planta de cubierta?',
    options: [
      'No, solo se representan en alzado.',
      'Sí, para asegurar su correcta ejecución y funcionamiento (ej. sombreretes, extractores).',
      'Solo si superan los 2 metros de altura.',
      'No es necesario si se usa ventilación natural.'
    ],
    correctAnswerIndex: 1,
    explanation: 'En la planta de cubierta se deben indicar las alturas de los elementos verticales de ventilación (como remates de conductos o extractores) para su correcta especificación y para evitar interferencias o mal funcionamiento.'
  },
  {
    id: 'u7q30',
    unit: 7,
    questionText: 'Un caudal de admisión de 8 l/s por ocupante en el dormitorio principal es un requisito de:',
    options: [
      'El RITE para locales comerciales.',
      'La norma UNE de ventilación de garajes.',
      'El CTE DB HS 3 para ventilación de viviendas.',
      'Una recomendación para ahorro energético.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El CTE DB HS 3 establece caudales mínimos de admisión, como 8 l/s por ocupante en el dormitorio principal de una vivienda con varios dormitorios, para garantizar una calidad de aire adecuada.'
  },
  {
    id: 'u7q31',
    unit: 7,
    questionText: 'La "pérdida de carga primaria" en un conducto de ventilación se debe a:',
    options: [
      'Los accesorios como codos y bifurcaciones.',
      'El rozamiento del aire con las paredes del conducto en tramos rectos.',
      'La eficiencia del ventilador.',
      'La temperatura del aire exterior.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La pérdida de carga total se compone de pérdidas primarias (debidas al rozamiento en tramos rectos, dependientes de la longitud y sección) y pérdidas secundarias (en accesorios o puntos singulares).'
  },
  {
    id: 'u7q32',
    unit: 7,
    questionText: '¿Qué tipo de ventilador es más común para la extracción general en cubierta de un edificio de viviendas con sistema de conductos?',
    options: [
      'Ventilador de sobremesa.',
      'Ventilador axial de pared.',
      'Ventilador centrífugo o radial.',
      'Extractor híbrido de muy baja potencia.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los ventiladores centrífugos son capaces de generar la presión necesaria para vencer las pérdidas de carga de un sistema de conductos ramificado, siendo comunes en extracciones centralizadas en cubierta.'
  },
  {
    id: 'u7q33',
    unit: 7,
    questionText: 'La ventilación en edificios NO es necesaria para:',
    options: [
      'Mantener un control de la temperatura.',
      'Mantener control de la humedad.',
      'Aumentar la estanqueidad al aire del edificio.',
      'Limitar la contaminación ambiental interna.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ventilación implica un intercambio de aire con el exterior, lo que es contrario a aumentar la estanqueidad. Sus objetivos son controlar temperatura, humedad y contaminantes.'
  },
  {
    id: 'u7q34',
    unit: 7,
    questionText: 'Una "abertura de admisión autorregulable" tiene la característica de:',
    options: [
      'Cerrarse completamente cuando no hay nadie en la estancia.',
      'Variar su apertura según la humedad del local.',
      'Mantener un caudal de aire aproximadamente constante independientemente de las variaciones de presión.',
      'Necesitar un motor eléctrico para funcionar.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las aberturas autorregulables están diseñadas para mantener un caudal de aire de admisión relativamente constante, compensando las variaciones de presión debidas al viento o al tiro térmico.'
  },
  {
    id: 'u7q35',
    unit: 7,
    questionText: '¿Cuál de estos elementos NO forma parte de un sistema de ventilación general de una vivienda?',
    options: [
      'Aberturas de admisión en dormitorios.',
      'Aberturas de paso bajo las puertas.',
      'Conductos de extracción desde la cocina.',
      'Unidad de aire acondicionado tipo split.'
    ],
    correctAnswerIndex: 3,
    explanation: 'Un split de aire acondicionado es para climatizar, no forma parte del sistema de ventilación general exigido por el CTE HS3, aunque algunos equipos pueden tener una pequeña aportación de aire exterior.'
  },
  {
    id: 'u7q36',
    unit: 7,
    questionText: 'La "edad del aire" es una variable que caracteriza la ventilación y se refiere a:',
    options: [
      'El tiempo que el aire ha estado dentro del conducto.',
      'El tiempo medio que tarda el aire exterior en llegar a un punto determinado del local.',
      'La antigüedad del sistema de ventilación.',
      'La temperatura del aire en relación con su punto de rocío.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La edad del aire en un punto de un local es el tiempo medio que ha transcurrido desde que las moléculas de aire en ese punto entraron al local desde el exterior. Es un indicador de la eficacia de la renovación.'
  },
  {
    id: 'u7q37',
    unit: 7,
    questionText: 'En la representación gráfica de la ventilación, ¿qué se debe indicar en los conductos además de su trazado?',
    options: [
      'El color del conducto.',
      'La marca del fabricante.',
      'Sus dimensiones (sección) y, a menudo, el material.',
      'El peso por metro lineal.'
    ],
    correctAnswerIndex: 2,
    explanation: 'En los planos de ventilación es fundamental indicar el trazado de los conductos, sus dimensiones (sección) para asegurar el caudal, y a menudo el material del que están hechos.'
  },
  {
    id: 'u7q38',
    unit: 7,
    questionText: '¿Por qué es importante la ventilación en locales donde hay aparatos de combustión de gas no estancos?',
    options: [
      'Para evitar que se enfríen demasiado rápido.',
      'Para asegurar el aporte de oxígeno necesario para la combustión y diluir los productos de una combustión incompleta o fugas.',
      'Para aumentar la eficiencia de la combustión.',
      'Para reducir el ruido que generan.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los aparatos de combustión no estancos toman el aire para la combustión del propio local y, si la combustión no es perfecta o hay fugas, pueden liberar gases peligrosos. La ventilación es crucial para aportar oxígeno y diluir/evacuar estos gases.'
  },
  {
    id: 'u7q39',
    unit: 7,
    questionText: 'Un sistema de ventilación mecánica por "impulsión" en un aparcamiento consiste en:',
    options: [
      'Extraer el aire contaminado mediante potentes extractores.',
      'Introducir aire exterior limpio mediante ventiladores, generando sobrepresión.',
      'Utilizar el movimiento natural del aire para renovarlo.',
      'Filtrar y recircular el aire del interior del aparcamiento.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La ventilación por impulsión o inyección consiste en introducir mecánicamente aire exterior limpio, lo que genera una ligera sobrepresión en el local que ayuda a expulsar el aire viciado por las aberturas de salida.'
  },
  {
    id: 'u7q40',
    unit: 7,
    questionText: '¿Qué se debe considerar al ubicar las tomas de aire exterior para ventilación?',
    options: [
      'Deben estar lo más cerca posible del suelo.',
      'Deben orientarse siempre hacia el norte.',
      'Deben situarse lejos de fuentes de contaminación exterior (humos de chimeneas, salidas de garajes, etc.).',
      'Deben ser lo más pequeñas posible para evitar pérdidas de calor.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las tomas de aire exterior deben ubicarse de manera que capten aire lo más limpio posible, alejadas de posibles fuentes de contaminación como salidas de humos, extracciones de cocinas o garajes, calles con mucho tráfico, etc.'
  }
];
