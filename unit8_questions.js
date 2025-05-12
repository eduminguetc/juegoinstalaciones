// unit8_questions.js
// Preguntas basadas en el resumen de la Unidad 8: Representación de instalaciones especiales
export const unit8Questions = [
  {
    id: 'u8q1',
    unit: 8,
    questionText: '¿Cuál es la principal diferencia entre un ascensor eléctrico y uno hidráulico en cuanto a su sistema de tracción?',
    options: [
      'El eléctrico usa aceite a presión y el hidráulico un motor eléctrico con polea.',
      'El eléctrico usa un motor eléctrico, polea y cables (con contrapeso), y el hidráulico un pistón impulsado por aceite.',
      'Ambos usan el mismo sistema, pero el hidráulico es más rápido.',
      'El eléctrico no necesita cuarto de máquinas y el hidráulico sí.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los ascensores eléctricos utilizan un motor eléctrico, una polea y cables (generalmente con un contrapeso), mientras que los hidráulicos mueven la cabina mediante un pistón impulsado por aceite a presión.'
  },
  {
    id: 'u8q2',
    unit: 8,
    questionText: 'Un ascensor con "Variación de Frecuencia (VVVF)" se caracteriza por:',
    options: [
      'Tener solo una velocidad de funcionamiento.',
      'Arrancar y parar de forma muy brusca.',
      'Permitir un arranque y parada más suave y confortable mediante control electrónico de la velocidad.',
      'Ser exclusivo para montacargas.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los ascensores con variación de frecuencia (VVVF) tienen una trayectoria de su velocidad curva, permitiendo una arrancada y parada más suave y confortable, además de una nivelación precisa.'
  },
  {
    id: 'u8q3',
    unit: 8,
    questionText: '¿Qué es un "montacargas" según la definición de la Unidad 8?',
    options: [
      'Un tipo de ascensor de alta velocidad para personas.',
      'Un aparato elevador que se desplaza entre guías verticales, dotado de un camarín cuyas dimensiones y constitución impiden el acceso a las personas.',
      'Una escalera mecánica para cargas pesadas.',
      'Un sistema de transporte horizontal de materiales.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Un montacargas es un aparato elevador que se desplaza entre guías verticales, que sirve niveles definidos y que está dotado de un camarín cuyas dimensiones y constitución impiden el acceso a las personas (diseñado para cargas).'
  },
  {
    id: 'u8q4',
    unit: 8,
    questionText: 'El "limitador de velocidad" en un ascensor tiene como función principal:',
    options: [
      'Aumentar la velocidad de la cabina en horas pico.',
      'Detectar los excesos de velocidad de la cabina y accionar el paracaídas.',
      'Regular la suavidad de la parada en cada planta.',
      'Ahorrar energía eléctrica durante el funcionamiento.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El limitador de velocidad es un elemento de seguridad que detecta los excesos de velocidad de la cabina y, en caso necesario, acciona el mecanismo del paracaídas para detenerla.'
  },
  {
    id: 'u8q5',
    unit: 8,
    questionText: '¿Qué es un SPDA en el contexto de la protección contra rayos?',
    options: [
      'Un tipo de cable especial resistente a descargas.',
      'Un Sistema de Protección contra Descargas Atmosféricas.',
      'Un sensor de proximidad de tormentas.',
      'Un pararrayos de uso exclusivamente industrial.'
    ],
    correctAnswerIndex: 1,
    explanation: 'SPDA son las siglas de Sistema de Protección contra Descargas Atmosféricas, cuya función es minimizar los daños que ocurren en las edificaciones cuando los rayos impactan directamente.'
  },
  {
    id: 'u8q6',
    unit: 8,
    questionText: 'El pararrayos tipo "Jaula de Faraday" consiste en:',
    options: [
      'Una única punta metálica muy alta.',
      'Un dispositivo electrónico que ioniza el aire.',
      'Una red de cables conductores colocados sobre el edificio, conectados a tierra.',
      'Un sistema que repele los rayos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La Jaula de Faraday es un pararrayos reticular de red que consta de una red de cables colocados en cumbreras y limatesas alrededor de todo el edificio, con pequeñas puntas y conexiones a tierra.'
  },
  {
    id: 'u8q7',
    unit: 8,
    questionText: '¿Qué tipo de pararrayos está prohibido en España debido a su riesgo radiológico?',
    options: [
      'Punta Franklin',
      'Jaula de Faraday',
      'Pararrayos Radiactivo',
      'Pararrayos con Dispositivo de Cebado (PDC)'
    ],
    correctAnswerIndex: 2,
    explanation: 'El Real Decreto 14428/89 prohíbe la instalación de pararrayos radiactivos en España debido al riesgo que representan sus componentes.'
  },
  {
    id: 'u8q8',
    unit: 8,
    questionText: 'La energía solar fotovoltaica convierte la luz solar en:',
    options: [
      'Calor para agua sanitaria.',
      'Energía mecánica directamente.',
      'Electricidad en forma de corriente continua.',
      'Energía eólica.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una instalación solar fotovoltaica origina energía eléctrica (en forma de corriente continua) a partir de la luz solar, mediante el efecto fotovoltaico en los paneles.'
  },
  {
    id: 'u8q9',
    unit: 8,
    questionText: '¿Cuál es la función principal de un "inversor" en una instalación fotovoltaica?',
    options: [
      'Almacenar la energía generada.',
      'Regular la carga de las baterías.',
      'Convertir la corriente continua (CC) de los paneles o baterías en corriente alterna (CA) utilizable.',
      'Orientar los paneles hacia el sol.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El inversor transforma la corriente continua (CC) almacenada en la batería o generada por los paneles en corriente alterna (CA) de 230V, apta para los electrodomésticos o la red.'
  },
  {
    id: 'u8q10',
    unit: 8,
    questionText: 'La "domótica" en una vivienda tiene como objetivo principal:',
    options: [
      'Aumentar el valor de reventa de la propiedad exclusivamente.',
      'Integrar y automatizar diversas tareas y sistemas (iluminación, climatización, seguridad) para mejorar el confort, la eficiencia y la seguridad.',
      'Reemplazar todas las instalaciones tradicionales por sistemas inalámbricos.',
      'Reducir la necesidad de mantenimiento de las instalaciones.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La domótica es una técnica que permite integrar diversas tareas y el control de instalaciones en una red de control domótica, con el objetivo de mejorar el confort, la seguridad y la gestión energética.'
  },
  {
    id: 'u8q11',
    unit: 8,
    questionText: 'En un sistema domótico "centralizado", ¿qué ocurre si falla el controlador principal?',
    options: [
      'Solo algunas funciones dejan de operar.',
      'El sistema sigue funcionando con capacidades reducidas.',
      'Todos los sensores y actuadores conectados a él dejan de funcionar.',
      'El sistema pasa automáticamente a control manual.'
    ],
    correctAnswerIndex: 2,
    explanation: 'En un sistema centralizado, se dispone de un solo nodo (controlador) y todos los sensores y actuadores están conectados a él. Si este nodo falla, todo el sistema puede dejar de funcionar.'
  },
  {
    id: 'u8q12',
    unit: 8,
    questionText: '¿Qué es un "sensor" en un sistema domótico?',
    options: [
      'Un dispositivo que ejecuta una acción física (ej. encender una luz).',
      'Un dispositivo que capta información del entorno (temperatura, movimiento, luz) y la envía al sistema.',
      'La interfaz de usuario para controlar el sistema.',
      'El cableado que conecta los diferentes elementos.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los sensores son los dispositivos que perciben señales del exterior o interior (temperatura, presencia, luz, etc.) y las transmiten al sistema domótico para que actúe en consecuencia.'
  },
  {
    id: 'u8q13',
    unit: 8,
    questionText: 'Los paneles solares fotovoltaicos "monocristalinos" se caracterizan por:',
    options: [
      'Ser los más baratos y menos eficientes.',
      'Tener un aspecto azul con un patrón de mosaico.',
      'Ser más costosos de fabricar pero conseguir mayores eficiencias (hasta 22%).',
      'Ser flexibles y de color marrón homogéneo.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los paneles monocristalinos son más costosos y difíciles de fabricar, pero consiguen eficiencias de hasta el 22% y suelen tener un aspecto negro uniforme.'
  },
  {
    id: 'u8q14',
    unit: 8,
    questionText: '¿Cuál es la función de un "regulador de carga" en una instalación fotovoltaica aislada?',
    options: [
      'Convertir la corriente continua en alterna.',
      'Aumentar la tensión de los paneles.',
      'Controlar el proceso de carga de las baterías para protegerlas y optimizar su vida útil.',
      'Medir la cantidad de energía solar recibida.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El regulador de carga controla la carga de las baterías, evitando sobrecargas o descargas excesivas, lo que es crucial para la vida útil de las baterías en sistemas aislados.'
  },
  {
    id: 'u8q15',
    unit: 8,
    questionText: 'La tecnología de comunicación domótica "KNX" es un ejemplo de:',
    options: [
      'Sistema por corrientes portadoras (PLC).',
      'Sistema inalámbrico basado en WiFi.',
      'Sistema con bus de campo dedicado (estándar europeo abierto).',
      'Sistema centralizado con relés programables.'
    ],
    correctAnswerIndex: 2,
    explanation: 'KNX es un estándar abierto muy extendido para sistemas domóticos y de control de edificios que utiliza un bus de campo dedicado para la comunicación entre dispositivos.'
  },
  {
    id: 'u8q16',
    unit: 8,
    questionText: '¿Cuál de estas NO es una ventaja principal de la domótica mencionada en la Unidad 8?',
    options: [
      'Ahorro energético gracias a la gestión eficiente.',
      'Aumento significativo del valor de la propiedad garantizado.',
      'Mejora de la comodidad y el confort.',
      'Incremento de la seguridad personal y patrimonial.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Si bien la domótica puede añadir valor, las ventajas principales destacadas son el ahorro energético, el confort, la seguridad y el acceso a servicios. Un aumento significativo del valor no está garantizado y depende de muchos factores.'
  },
  {
    id: 'u8q17',
    unit: 8,
    questionText: 'El "foso" de un ascensor es:',
    options: [
      'El espacio donde se aloja el motor en ascensores sin cuarto de máquinas.',
      'La parte superior del hueco, por encima de la última parada.',
      'La parte inferior del recinto del ascensor, debajo del último nivel servido.',
      'La cabina del ascensor.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El foso es la parte inferior del recinto del ascensor, situada por debajo del nivel de la última parada, y aloja elementos como los amortiguadores.'
  },
  {
    id: 'u8q18',
    unit: 8,
    questionText: 'Los "amortiguadores" en un ascensor sirven para:',
    options: [
      'Reducir el ruido del motor.',
      'Mejorar la suavidad del arranque y parada normales.',
      'Detener la cabina o el contrapeso en caso de que sobrepasen el extremo del recorrido.',
      'Pesar la carga de la cabina.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los amortiguadores están ubicados en el extremo inferior del recorrido y sirven para detener la cabina o el contrapeso en caso necesario, si sobrepasan sus límites de recorrido.'
  },
  {
    id: 'u8q19',
    unit: 8,
    questionText: 'El sistema de captación de un pararrayos tipo "Punta Franklin" se basa en:',
    options: [
      'La creación de un campo magnético.',
      'El "efecto punta" para atraer la descarga.',
      'La ionización del aire mediante un dispositivo electrónico.',
      'Una red de cables sobre la cubierta.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El pararrayos Franklin funciona basado en la teoría de la punta, donde la acumulación de carga en la punta metálica crea un intenso campo que ioniza el aire, facilitando un camino para la descarga.'
  },
  {
    id: 'u8q20',
    unit: 8,
    questionText: '¿Qué es el "efecto fotovoltaico"?',
    options: [
      'La conversión de calor en electricidad.',
      'La transformación de luz solar en electricidad a través de un material semiconductor.',
      'La capacidad de un material para reflejar la luz solar.',
      'El calentamiento de un fluido por la acción del sol.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El efecto fotovoltaico es la transformación directa de la luz solar en electricidad que se produce en ciertos materiales semiconductores.'
  },
  {
    id: 'u8q21',
    unit: 8,
    questionText: 'Un "inversor de conexión a red" en una instalación FV permite:',
    options: [
      'Cargar baterías exclusivamente.',
      'Alimentar solo aparatos de corriente continua.',
      'Sincronizar la energía generada por los paneles con la red eléctrica para autoconsumo y/o vertido.',
      'Funcionar de forma aislada sin conexión a la red.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Un inversor de conexión a red convierte la CC de los paneles en CA sincronizada con la red, permitiendo que la energía solar se use para autoconsumo y que los excedentes puedan ser vertidos a la red eléctrica.'
  },
  {
    id: 'u8q22',
    unit: 8,
    questionText: 'La topología de red domótica "en estrella" se caracteriza por:',
    options: [
      'Conectar todos los nodos en una línea troncal.',
      'Conectar cada nodo a todos los demás.',
      'Organizar los nodos jerárquicamente.',
      'Conectar todos los dispositivos a un punto o nodo central.'
    ],
    correctAnswerIndex: 3,
    explanation: 'En la topología en estrella, los canales de transmisión de todos los dispositivos están conectados entre sí en un punto o nodo central (concentrador o hub).'
  },
  {
    id: 'u8q23',
    unit: 8,
    questionText: '¿Cuál es una medida de mantenimiento preventivo importante para los paneles fotovoltaicos?',
    options: [
      'Pintarlos cada año para protegerlos del sol.',
      'Limpiar la suciedad acumulada en su superficie.',
      'Reemplazar las células fotovoltaicas anualmente.',
      'Añadirles agua destilada.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La limpieza de la superficie de los paneles es importante, ya que la suciedad (polvo, hojas, etc.) puede reducir la cantidad de luz que llega a las células y, por tanto, la producción de energía.'
  },
  {
    id: 'u8q24',
    unit: 8,
    questionText: '¿Qué tipo de ascensor NO necesita generalmente un cuarto de máquinas en la parte superior del edificio?',
    options: [
      'Ascensor eléctrico de 1 velocidad.',
      'Ascensor eléctrico de 2 velocidades.',
      'Ascensor hidráulico.',
      'Todos los ascensores requieren cuarto de máquinas superior.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una ventaja de los ascensores hidráulicos es que su central hidráulica (equivalente al cuarto de máquinas) se puede colocar en cualquier parte del edificio, no necesariamente en la parte superior.'
  },
  {
    id: 'u8q25',
    unit: 8,
    questionText: 'La fórmula Ne = Ng x Ae x C1 x 10-6 se utiliza en el CTE para:',
    options: [
      'Calcular la potencia de un ascensor.',
      'Dimensionar una instalación fotovoltaica.',
      'Evaluar el riesgo de impacto de rayo sobre una estructura.',
      'Determinar el número de nodos en una red domótica.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Esta fórmula se utiliza para calcular la frecuencia esperada de impactos de rayo (Ne) sobre una estructura, como parte de la evaluación del riesgo y la necesidad de un sistema de protección contra el rayo.'
  },
  {
    id: 'u8q26',
    unit: 8,
    questionText: '¿Qué son los "actuadores" en un sistema domótico?',
    options: [
      'Los cables de comunicación.',
      'Los dispositivos que detectan cambios en el ambiente.',
      'Los dispositivos que ejecutan las órdenes del sistema (ej. encender luces, mover motores).',
      'Las pantallas de control.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los actuadores son los componentes de un sistema domótico que realizan una acción física sobre las instalaciones en respuesta a una señal del controlador (ej. relés, motores, válvulas).'
  },
  {
    id: 'u8q27',
    unit: 8,
    questionText: 'Los paneles fotovoltaicos de "silicio amorfo" (capa fina) se caracterizan por:',
    options: [
      'Tener la mayor eficiencia del mercado.',
      'Ser los más caros de producir.',
      'Ser más económicos y flexibles, pero con menor eficiencia que los cristalinos.',
      'No necesitar luz solar directa para funcionar.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los paneles de silicio amorfo o de capa fina son los más económicos y pueden ser flexibles, pero su eficiencia es generalmente inferior (alrededor del 10%) comparada con los monocristalinos o policristalinos.'
  },
  {
    id: 'u8q28',
    unit: 8,
    questionText: 'Un "inversor cargador" en una instalación FV combina las funciones de:',
    options: [
      'Inversor y panel solar.',
      'Regulador de carga e inversor (y a veces cargador de baterías desde red/generador).',
      'Batería y regulador de carga.',
      'Panel solar y batería.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Un inversor cargador es un equipo multifunción que típicamente integra las funciones de un inversor (convertir CC a CA), un regulador de carga solar (gestionar la carga de baterías desde paneles) y, a menudo, un cargador de baterías desde una fuente de CA externa (red o generador).'
  },
  {
    id: 'u8q29',
    unit: 8,
    questionText: 'La tecnología domótica que utiliza el cableado eléctrico existente de 230V para transmitir señales se conoce como:',
    options: [
      'Bus de campo KNX.',
      'Sistemas inalámbricos Zigbee.',
      'Corrientes portadoras (Power Line Carrier - PLC).',
      'Relés programables (PLC industriales).'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los sistemas por corrientes portadoras (PLC, también conocidos como X10 en algunos contextos) utilizan la propia red eléctrica de la vivienda para transmitir las señales de control domótico.'
  },
  {
    id: 'u8q30',
    unit: 8,
    questionText: '¿Cuál de estos NO es un componente principal del "hueco del ascensor"?',
    options: [
      'Guías metálicas de cabina y contrapeso.',
      'Cuadro de control del ascensor.',
      'Puertas de acceso en los pisos.',
      'Foso con amortiguadores.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El cuadro de control del ascensor se ubica generalmente en el cuarto de máquinas o, en ascensores MRL, en un armario junto al hueco o integrado en el marco de una puerta, pero no dentro del espacio de recorrido de la cabina (hueco).'
  },
  {
    id: 'u8q31',
    unit: 8,
    questionText: 'El "paracaídas" de un ascensor es un dispositivo de seguridad que actúa cuando:',
    options: [
      'Falla la iluminación de la cabina.',
      'La cabina adquiere una velocidad superior a la normal, activado por el limitador.',
      'Se produce un corte de energía eléctrica.',
      'Las puertas de piso no cierran correctamente.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El paracaídas actúa cuando la cabina adquiere una velocidad excesiva (detectada por el limitador de velocidad), frenándola mecánicamente sobre las guías.'
  },
  {
    id: 'u8q32',
    unit: 8,
    questionText: 'El sistema externo de un SPDA (Sistema de Protección contra Descargas Atmosféricas) incluye:',
    options: [
      'Dispositivos de protección contra sobretensiones internas.',
      'Sensores de campo eléctrico.',
      'Captadores, conductores de bajada y toma de tierra.',
      'Alarmas de tormenta.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El sistema externo de un SPDA está compuesto por los elementos que interceptan el rayo (captadores), lo conducen de forma segura (conductores de bajada) y lo disipan en el suelo (sistema de puesta a tierra).'
  },
  {
    id: 'u8q33',
    unit: 8,
    questionText: 'Una instalación fotovoltaica "aislada" (off-grid) es aquella que:',
    options: [
      'Solo funciona durante el día.',
      'Está conectada a la red eléctrica para vender toda la energía producida.',
      'Es autónoma y no está conectada a la red eléctrica pública, requiriendo baterías.',
      'Utiliza paneles de un tipo de aislante especial.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una instalación FV aislada es un sistema autoabastecedor que no tiene conexión con la red eléctrica general, por lo que necesita un sistema de almacenamiento (baterías) para suministrar energía cuando no hay sol.'
  },
  {
    id: 'u8q34',
    unit: 8,
    questionText: 'La "ecualización" de las baterías en una instalación FV aislada tiene como objetivo:',
    options: [
      'Descargarlas completamente para su reinicio.',
      'Aumentar su voltaje nominal.',
      'Devolverles su capacidad de almacenamiento, igualar la carga de las celdas y extender su vida útil.',
      'Protegerlas contra cortocircuitos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ecualización es un proceso de sobrecarga controlada que se realiza periódicamente en algunas baterías de plomo-ácido para igualar el estado de carga de sus celdas, disolver sulfatación y recuperar capacidad, extendiendo su vida útil.'
  },
  {
    id: 'u8q35',
    unit: 8,
    questionText: '¿Qué es un "nodo" en el contexto de una red domótica?',
    options: [
      'El cable principal de la red.',
      'Cualquier dispositivo conectado a la red con capacidad de enviar, recibir o procesar información (sensor, actuador, controlador).',
      'El software de configuración del sistema.',
      'La fuente de alimentación de la red.'
    ],
    correctAnswerIndex: 1,
    explanation: 'En una red domótica, un nodo es cualquier dispositivo individual (como un sensor, un actuador o un controlador) que está conectado a la red y participa en la comunicación y/o control del sistema.'
  },
  {
    id: 'u8q36',
    unit: 8,
    questionText: '¿Cuál es la principal ventaja de un ascensor eléctrico con contrapeso frente a uno hidráulico sin contrapeso en términos de consumo energético?',
    options: [
      'El hidráulico consume menos en subida.',
      'El eléctrico con contrapeso generalmente consume menos energía total porque el motor solo tiene que vencer la diferencia de peso y la fricción.',
      'Ambos consumen la misma cantidad de energía.',
      'El eléctrico consume más porque el motor es más grande.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El contrapeso en un ascensor eléctrico equilibra el peso de la cabina y aproximadamente la mitad de la carga nominal, por lo que el motor necesita realizar menos esfuerzo y consume menos energía, especialmente en comparación con un hidráulico que debe levantar todo el peso en subida.'
  },
  {
    id: 'u8q37',
    unit: 8,
    questionText: 'La "densidad anual medida de impactos de rayo en la zona (Ng)" es un dato necesario para:',
    options: [
      'Dimensionar los cables de un ascensor.',
      'Calcular la producción esperada de una instalación fotovoltaica.',
      'Evaluar el riesgo de impacto de rayo y la necesidad de un pararrayos.',
      'Determinar el tipo de bus en una red domótica.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Ng es un parámetro clave en la fórmula del CTE para calcular la frecuencia esperada de impactos de rayo, y se obtiene de mapas isoceráunicos o de densidad de descargas.'
  },
  {
    id: 'u8q38',
    unit: 8,
    questionText: '¿Qué tipo de paneles fotovoltaicos suelen ofrecer un mejor rendimiento a altas temperaturas comparado con otros tipos de silicio cristalino?',
    options: [
      'Monocristalinos',
      'Policristalinos (aunque la diferencia es pequeña, a veces se menciona una ligera ventaja)',
      'Amorfos',
      'Todos pierden eficiencia por igual.'
    ],
    correctAnswerIndex: 1, // El texto original del PDF dice: "Con temperaturas elevadas, la perdida de eficiencia en módulos es policristalinos." lo cual es confuso y probablemente erróneo. Generalmente los amorfos o capa fina tienen mejor coeficiente de temperatura, pero entre los cristalinos, a veces se atribuye una ligera ventaja a los policristalinos o se considera similar. Dada la fuente, se elige esta.
    explanation: 'El texto de la unidad menciona que con temperaturas elevadas, la pérdida de eficiencia en módulos policristalinos es un factor, aunque generalmente se considera que los paneles de capa fina (amorfos) tienen un mejor comportamiento térmico. Entre los cristalinos, las diferencias suelen ser menores.'
  },
  {
    id: 'u8q39',
    unit: 8,
    questionText: 'Una aplicación común de la domótica en el área de "seguridad" es:',
    options: [
      'El control automático de la temperatura ambiente.',
      'La creación de escenas de iluminación personalizadas.',
      'La detección de intrusión mediante sensores de movimiento y la activación de alarmas.',
      'El riego automático del jardín.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La detección de intrusión, con sensores de movimiento o apertura de puertas/ventanas, y la activación de alarmas o avisos es una aplicación fundamental de la domótica para la seguridad patrimonial.'
  },
  {
    id: 'u8q40',
    unit: 8,
    questionText: '¿Cuál es el propósito principal de los "contactos de seguridad" en un ascensor?',
    options: [
      'Permitir la comunicación con el exterior en caso de atrapamiento.',
      'Encender la luz de la cabina automáticamente.',
      'Asegurar que el ascensor solo funcione si todas las condiciones de seguridad se cumplen (ej. puertas cerradas).',
      'Registrar el número de viajes realizados.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los contactos de seguridad (en puertas, paracaídas, limitador, etc.) están conectados en serie en el circuito de maniobra. Si alguno de ellos se abre debido a una condición insegura, el circuito se interrumpe e impide el movimiento del ascensor.'
  }
];
