// unit2_questions.js
// Preguntas basadas en el resumen de la Unidad 2: Configuración de instalaciones de fontanería y saneamiento
export const unit2Questions = [
  {
    id: 'u2q1',
    unit: 2,
    questionText: '¿Cuál es la primera fase del ciclo urbano del agua que consiste en conducir el agua de ríos o embalses al circuito urbano?',
    options: [
      'Potabilización',
      'Aducción',
      'Distribución',
      'Depuración'
    ],
    correctAnswerIndex: 1,
    explanation: 'A la primera fase del ciclo urbano del agua se le denomina aducción, y consiste en conducir el agua de ríos, pozos, embalses, etc., al circuito urbano.'
  },
  {
    id: 'u2q2',
    unit: 2,
    questionText: 'En fontanería, ¿qué significa "pérdidas de carga"?',
    options: [
      'La cantidad de agua que se pierde por fugas.',
      'La disminución de la presión del agua al circular por las tuberías.',
      'El coste adicional por reparaciones en la red.',
      'El coeficiente de simultaneidad de los aparatos.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las pérdidas de carga son la disminución de la carga total (presión) del agua, expresada en unidades de altura, debido al rozamiento en las tuberías y accesorios.'
  },
  {
    id: 'u2q3',
    unit: 2,
    questionText: 'La "acometida" en una instalación de fontanería es la tubería que enlaza:',
    options: [
      'El contador con las derivaciones individuales.',
      'La red exterior de suministro con la instalación general de la vivienda.',
      'Los aparatos sanitarios con la bajante.',
      'La caldera con los radiadores.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La acometida es la tubería que enlaza la instalación general de la vivienda con la red exterior de suministro (punto de toma de la red de distribución).'
  },
  {
    id: 'u2q4',
    unit: 2,
    questionText: '¿Qué elemento de la instalación general de fontanería mide el consumo total de agua del edificio?',
    options: [
      'La llave de paso general.',
      'La válvula de retención.',
      'El contador general.',
      'El grupo de presión.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El contador general es aquel que mide la totalidad de consumo de agua en todo el edificio.'
  },
  {
    id: 'u2q5',
    unit: 2,
    questionText: 'Las tuberías verticales que conectan el distribuidor principal con las derivaciones de las plantas se denominan:',
    options: [
      'Ramales de enlace',
      'Colectores',
      'Montantes o Columnas',
      'Sifones'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los montantes o columnas son las tuberías verticales que conectan el distribuidor con las derivaciones de las plantas.'
  },
  {
    id: 'u2q6',
    unit: 2,
    questionText: 'Según el CTE DB-HS4, ¿en qué lado de los aparatos sanitarios se debe colocar la toma de agua caliente?',
    options: [
      'En el lado derecho.',
      'En el centro.',
      'Indistintamente en cualquier lado.',
      'En el lado izquierdo.'
    ],
    correctAnswerIndex: 3,
    explanation: 'En los aparatos alimentados por agua fría y caliente, el grifo de agua caliente se coloca a la izquierda, por lo que la toma de agua caliente debe estar en ese lado.'
  },
  {
    id: 'u2q7',
    unit: 2,
    questionText: '¿Cuál es una de las principales funciones de un sistema de saneamiento separativo?',
    options: [
      'Reducir el coste de instalación al mínimo.',
      'Utilizar una única tubería para todas las aguas.',
      'Facilitar un posterior proceso de depuración al mantener separadas las aguas pluviales de las residuales.',
      'Aumentar la presión en las bajantes.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una ventaja del sistema separativo es una mejor adecuación para un posterior proceso de depuración, ya que las aguas pluviales (más limpias) no se mezclan con las residuales.'
  },
  {
    id: 'u2q8',
    unit: 2,
    questionText: 'El sistema de saneamiento que recoge aguas residuales y pluviales en una misma canalización se denomina:',
    options: [
      'Sistema separativo',
      'Sistema semiseparativo',
      'Sistema unitario',
      'Sistema de elevación forzada'
    ],
    correctAnswerIndex: 2,
    explanation: 'En el sistema unitario, en una misma canalización, se recogen todas las aguas producidas, tanto residuales como pluviales.'
  },
  {
    id: 'u2q9',
    unit: 2,
    questionText: '¿Qué es la ventilación primaria en una red de saneamiento?',
    options: [
      'Un sistema de ventiladores en los colectores.',
      'La prolongación de la bajante por encima de la cubierta, abierta al exterior.',
      'La conexión de los sifones a un conducto de ventilación secundario.',
      'El uso de válvulas de aireación en cada aparato sanitario.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La ventilación primaria consiste en la prolongación de la bajante de aguas residuales por encima del techo del último piso para permitir su ventilación directa a la atmósfera.'
  },
  {
    id: 'u2q10',
    unit: 2,
    questionText: 'Los colectores enterrados en una red de saneamiento horizontal deben tener una pendiente mínima del:',
    options: [
      '0.5%',
      '1%',
      '2%',
      '5%'
    ],
    correctAnswerIndex: 2,
    explanation: 'Según el CTE, los colectores enterrados deben tener una pendiente mínima del 2% para asegurar la correcta evacuación.'
  },
  {
    id: 'u2q11',
    unit: 2,
    questionText: '¿Para qué se utiliza un sistema de elevación forzada en saneamiento?',
    options: [
      'Para aumentar la velocidad del agua en bajantes.',
      'Cuando la red interior o parte de ella está por debajo de la cota del alcantarillado público.',
      'Para triturar los residuos sólidos antes de la evacuación.',
      'Para ventilar la red de colectores.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El sistema de elevación forzada se utiliza para evacuar aguas residuales o pluviales mediante bombas cuando su cota final de reunión es inferior a la del ramal del alcantarillado público.'
  },
  {
    id: 'u2q12',
    unit: 2,
    questionText: 'Un bote sifónico en un cuarto de baño sirve para:',
    options: [
      'Recoger el agua de la lavadora exclusivamente.',
      'Conectar el inodoro directamente a la bajante.',
      'Crear un cierre hidráulico común para varios aparatos (lavabo, bidé, ducha) y evitar malos olores.',
      'Regular la temperatura del agua de la ducha.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El bote sifónico recoge las aguas de varios aparatos sanitarios (excepto el inodoro) y, mediante su cierre hidráulico, impide el paso de olores de la red de saneamiento.'
  },
  {
    id: 'u2q13',
    unit: 2,
    questionText: 'El factor "F" en el dimensionamiento de saneamiento pluvial se utiliza para:',
    options: [
      'Calcular el número de sumideros.',
      'Determinar el material de las bajantes.',
      'Corregir la superficie de cubierta según la intensidad pluviométrica de la zona si es diferente de 100 mm/h.',
      'Establecer la pendiente mínima de los canalones.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El factor de corrección F (F=i/100) se aplica sobre la superficie de cubierta cuando la intensidad pluviométrica (i) de la zona es diferente de 100 mm/h, para ajustar el cálculo de los elementos de evacuación pluvial.'
  },
  {
    id: 'u2q14',
    unit: 2,
    questionText: '¿Cuál es el número mínimo de sumideros para una cubierta con una superficie en proyección horizontal de 150 m²?',
    options: [
      '1 sumidero',
      '2 sumideros',
      '3 sumideros',
      '4 sumideros'
    ],
    correctAnswerIndex: 2,
    explanation: 'Según la tabla 2 del DB-HS5 (similar a la del PDF), para una cubierta entre 100 m² y 200 m² (100 ≤ S < 200), se necesitan 3 sumideros.'
  },
  {
    id: 'u2q15',
    unit: 2,
    questionText: 'Las "Unidades de Desagüe" (UD) se utilizan para dimensionar:',
    options: [
      'Las tuberías de suministro de agua fría.',
      'Los depósitos de agua caliente sanitaria.',
      'Las bajantes y colectores de aguas residuales.',
      'Los canalones de recogida de aguas pluviales.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las Unidades de Desagüe (UD) son valores asignados a cada aparato sanitario según su caudal de descarga y se utilizan para dimensionar las tuberías de la red de evacuación de aguas residuales.'
  },
  {
    id: 'u2q16',
    unit: 2,
    questionText: 'Al representar gráficamente una instalación de fontanería, ¿qué recomendación se da sobre el trazado de las tuberías?',
    options: [
      'Realizar siempre el trazado más largo para asegurar presión.',
      'Evitar pasar por locales húmedos.',
      'El trazado debe ser lo más corto posible desde la entrada hasta el equipo de ACS.',
      'Utilizar siempre tuberías vistas para facilitar el registro.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una recomendación es que el trazado debe ser el más corto posible, medido desde la entrada de la vivienda hasta el equipo de producción de ACS.'
  },
  {
    id: 'u2q17',
    unit: 2,
    questionText: '¿Qué es una arqueta sifónica en una red de saneamiento?',
    options: [
      'Una arqueta que recoge exclusivamente aguas pluviales.',
      'Una arqueta que no permite el registro.',
      'Una arqueta con cierre hidráulico para evitar la penetración de malos olores de la red general.',
      'Una arqueta utilizada únicamente a pie de bajante.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La arqueta sifónica tiene la función de cierre hidráulico general y evita la penetración de los malos olores procedentes de la red de saneamiento exterior.'
  },
  {
    id: 'u2q18',
    unit: 2,
    questionText: 'La presión en fontanería se mide comúnmente en "m.c.a.", que significa:',
    options: [
      'Módulos de Cobre Anodizado.',
      'Metros Cúbicos de Agua.',
      'Máxima Carga Admisible.',
      'Metros de Columna de Agua.'
    ],
    correctAnswerIndex: 3,
    explanation: 'm.c.a. significa Metros de Columna de Agua, una unidad de medida de presión (10 m.c.a. ≈ 1 bar).'
  },
  {
    id: 'u2q19',
    unit: 2,
    questionText: '¿Cuál es la función de una válvula de retención en la instalación general de agua?',
    options: [
      'Medir el consumo de agua.',
      'Permitir el vaciado de la instalación.',
      'Impedir que el agua de la instalación del edificio retorne a la red exterior.',
      'Regular la presión del agua de entrada.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La válvula de retención es un dispositivo que solo permite que el caudal del agua circule en el sentido de la entrada a la instalación, impidiendo su retorno.'
  },
  {
    id: 'u2q20',
    unit: 2,
    questionText: 'En un sistema de saneamiento semiseparativo, ¿cómo se gestionan las bajantes y los colectores?',
    options: [
      'Bajantes y colectores son unitarios.',
      'Bajantes y colectores son separativos.',
      'Bajantes separativas (pluviales y residuales) y colectores horizontales unitarios.',
      'Bajantes unitarias y colectores horizontales separativos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El sistema semiseparativo consiste en la realización de los bajantes según dos redes (pluviales y residuales), mientras que los colectores horizontales se realizan según el sistema unitario.'
  },
  {
    id: 'u2q21',
    unit: 2,
    questionText: '¿Qué elemento de la instalación particular de fontanería controla el paso de agua al suministro personal de una vivienda?',
    options: [
      'El contador general.',
      'La llave de paso particular.',
      'El grupo de presión.',
      'La válvula de retención de la acometida.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La llave de paso particular controla el paso de agua al suministro de una vivienda o local individual.'
  },
  {
    id: 'u2q22',
    unit: 2,
    questionText: 'El CTE DB-HS5 establece criterios para el dimensionamiento de la evacuación de aguas. ¿A qué tipo de aguas se refiere principalmente este documento?',
    options: [
      'Aguas de proceso industrial.',
      'Aguas de riego para jardines.',
      'Aguas residuales y aguas pluviales en edificios.',
      'Aguas para consumo humano exclusivamente.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El CTE DB-HS5 "Evacuación de aguas" establece las exigencias básicas para las redes de evacuación de aguas residuales (fecales y grises) y aguas pluviales en los edificios.'
  },
  {
    id: 'u2q23',
    unit: 2,
    questionText: 'Si un edificio tiene 600 m² de cubierta, ¿cuántos sumideros se necesitarían como mínimo según la tabla proporcionada (1 cada 150 m² para S>500 m²)?',
    options: [
      '2 sumideros',
      '3 sumideros',
      '4 sumideros',
      '5 sumideros'
    ],
    correctAnswerIndex: 2,
    explanation: 'Para una cubierta de 600 m², se necesita 1 sumidero cada 150 m². Entonces, 600 m² / 150 m²/sumidero = 4 sumideros.'
  },
  {
    id: 'u2q24',
    unit: 2,
    questionText: '¿Cuál es el objetivo principal de un "grupo de presión" en una instalación de agua de un edificio de varias plantas?',
    options: [
      'Filtrar el agua antes de su consumo.',
      'Calentar el agua para ACS.',
      'Dar fuerza al agua para que pueda subir hasta los pisos más altos con la presión adecuada.',
      'Medir el caudal de agua que entra al edificio.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La bomba o grupo de presión da fuerza al agua para que pueda subir hasta los pisos superiores, especialmente en edificios de varias plantas donde la presión de la red no es suficiente.'
  },
  {
    id: 'u2q25',
    unit: 2,
    questionText: 'Las tuberías de la red interior de evacuación de saneamiento suelen ser de PVC y deben instalarse con:',
    options: [
      'Una fuerte pendiente hacia arriba para evitar atascos.',
      'Sin pendiente, totalmente horizontales.',
      'Una ligera pendiente hacia los bajantes para que el agua circule rápidamente.',
      'Conexiones roscadas exclusivamente.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las tuberías de PVC de saneamiento van empotradas con una ligera pendiente hacia los bajantes para que el agua circule rápidamente por gravedad.'
  },
  {
    id: 'u2q26',
    unit: 2,
    questionText: '¿Qué es un "ramal de enlace" en la instalación particular de fontanería?',
    options: [
      'La tubería que conecta la red exterior con el contador general.',
      'La tubería vertical principal que sube a las plantas.',
      'La tubería que conduce el agua desde la derivación particular hasta los puntos de consumo (aparatos).',
      'Un accesorio para unir dos tuberías de diferente material.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El ramal de enlace es la tubería que conduce el agua desde la derivación particular (tubería horizontal de la vivienda) hasta los puntos de consumo o aparatos sanitarios.'
  },
  {
    id: 'u2q27',
    unit: 2,
    questionText: '¿Qué es el "coeficiente de simultaneidad" en fontanería?',
    options: [
      'La velocidad máxima permitida del agua en las tuberías.',
      'Un factor que estima cuántos aparatos funcionarán a la vez para dimensionar la instalación.',
      'La pérdida de presión por cada metro de tubería.',
      'El tiempo que tarda en llenarse un depósito.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El coeficiente de simultaneidad es un factor que se aplica para estimar la demanda máxima probable de agua, considerando que no todos los aparatos se usarán al mismo tiempo. Fórmula: K=1/(√(n-1)).'
  },
  {
    id: 'u2q28',
    unit: 2,
    questionText: 'En un sistema de saneamiento con trituradores, ¿qué característica tienen los conductos de evacuación?',
    options: [
      'Deben ser de gran diámetro para evitar atascos.',
      'Se permiten diámetros mínimos (20 a 40 mm) debido a la trituración previa.',
      'Deben ser siempre metálicos.',
      'No necesitan pendiente.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Debido a la labor de trituración de los productos previa al vertido, los sistemas con trituradores permiten diámetros en los conductos de evacuación mínimos (de 20 a 40 mm).'
  },
  {
    id: 'u2q29',
    unit: 2,
    questionText: '¿Cuál es la función de una "arqueta a pie de bajante"?',
    options: [
      'Recoger aguas pluviales de la cubierta.',
      'Conectar una bajante a un colector enterrado, sirviendo de registro.',
      'Impedir el paso de malos olores de la bajante.',
      'Almacenar agua para limpieza de la red.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las arquetas a pie de bajante se utilizan si la conducción (colector) va a quedar enterrada, conectando la bajante con dicho colector y permitiendo el registro.'
  },
  {
    id: 'u2q30',
    unit: 2,
    questionText: 'Según el CTE, las ascendentes o montantes de agua deben discurrir preferentemente por:',
    options: [
      'El interior de las viviendas para facilitar el acceso individual.',
      'Patios de luces sin protección.',
      'Zonas de uso común del edificio, alojadas en recintos o huecos registrables.',
      'La fachada exterior del edificio sin ningún tipo de protección.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las ascendentes o montantes deben discurrir por zonas de uso común del edificio y alojarse en recintos o huecos construidos a tal fin, registrables y de dimensiones adecuadas para mantenimiento.'
  },
  {
    id: 'u2q31',
    unit: 2,
    questionText: 'El "punto de toma" en la acometida de agua es:',
    options: [
      'El grifo final de consumo.',
      'El lugar donde se instala el contador.',
      'El lugar en el que el ramal de acometida se deriva del ramal de la red de distribución pública.',
      'La válvula de vaciado de la instalación.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El punto de toma es el lugar en el que el ramal de acometida se deriva del ramal de la red de distribución.'
  },
  {
    id: 'u2q32',
    unit: 2,
    questionText: '¿Qué tipo de sistema de saneamiento es más costoso pero también el más aconsejable e incluso obligatorio en edificios altos?',
    options: [
      'Sistema unitario',
      'Sistema semiseparativo',
      'Sistema separativo',
      'Sistema de trituradores'
    ],
    correctAnswerIndex: 2,
    explanation: 'Aunque es un sistema costoso (el más alto de los tres), el sistema separativo es el más aconsejable e incluso obligatorio en edificios a partir de cierta altura.'
  },
  {
    id: 'u2q33',
    unit: 2,
    questionText: 'La ventilación terciaria en una red de saneamiento conecta:',
    options: [
      'Las bajantes directamente con el exterior por la cubierta.',
      'Los colectores horizontales con la red de alcantarillado.',
      'Los sifones individuales o botes sifónicos a una columna de ventilación secundaria o al exterior.',
      'Las arquetas de registro con el ambiente.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ventilación terciaria es un ramal que conecta los cierres hidráulicos (sifones) de los aparatos, o los botes sifónicos, con la columna de ventilación secundaria o directamente al exterior para protegerlos del desifonamiento.'
  },
  {
    id: 'u2q34',
    unit: 2,
    questionText: '¿Cuál es la distancia máxima recomendada entre registros (arquetas) en tramos rectos de colectores enterrados?',
    options: [
      '5 metros',
      '15 metros',
      '30 metros',
      '50 metros'
    ],
    correctAnswerIndex: 1,
    explanation: 'Para colectores enterrados, se deben disponer registros (arquetas) de manera que los tramos entre los contiguos no superen los 15 metros.'
  },
  {
    id: 'u2q35',
    unit: 2,
    questionText: 'Si la intensidad pluviométrica de una zona es de 150 mm/h, ¿cuál sería el factor de corrección "F" a aplicar sobre la superficie de cubierta?',
    options: [
      '0.5',
      '1.0',
      '1.5',
      '2.0'
    ],
    correctAnswerIndex: 2,
    explanation: 'El factor de corrección F se calcula como i/100. Si i = 150 mm/h, entonces F = 150/100 = 1.5.'
  },
  {
    id: 'u2q36',
    unit: 2,
    questionText: '¿Qué precaución se debe tomar con los colectores enterrados respecto a la red de agua potable?',
    options: [
      'Deben instalarse siempre por encima de la red de agua potable.',
      'Deben compartir la misma zanja para ahorrar espacio.',
      'Deben ser instalados en zanjas situadas por debajo de la red de distribución de agua potable.',
      'No hay ninguna precaución especial al respecto.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los colectores enterrados deben ser instalados en zanjas situadas por debajo de la red de distribución de agua potable para evitar contaminación en caso de fugas.'
  },
  {
    id: 'u2q37',
    unit: 2,
    questionText: 'El manguetón es un tubo que conecta típicamente:',
    options: [
      'El lavabo con el bote sifónico.',
      'La ducha con la bajante.',
      'El inodoro con la bajante.',
      'El fregadero con el colector.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El manguetón es el tubo de mayor diámetro que conecta la salida del inodoro directamente con la bajante de aguas fecales.'
  },
  {
    id: 'u2q38',
    unit: 2,
    questionText: '¿Cuál de estas NO es una fase del ciclo urbano del agua?',
    options: [
      'Aducción',
      'Potabilización',
      'Evaporación directa desde la red de distribución',
      'Depuración'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las fases del ciclo urbano del agua incluyen captación, aducción, potabilización, almacenamiento, distribución, consumo, recogida de residuales, depuración y retorno. La evaporación directa desde la red no es una fase gestionada del ciclo.'
  },
  {
    id: 'u2q39',
    unit: 2,
    questionText: 'Las bajantes de saneamiento deben sujetarse al muro mediante abrazaderas. ¿Cuál es la distancia máxima recomendada entre ellas (sin contar la de soporte)?',
    options: [
      '0.5 metros',
      '1.0 metros',
      '1.5 metros',
      '3.0 metros'
    ],
    correctAnswerIndex: 2,
    explanation: 'El resto de las abrazaderas (además de la de soporte bajo el acople) debe colocarse de forma que la distancia entre ellas no supere los 1,5 metros.'
  },
  {
    id: 'u2q40',
    unit: 2,
    questionText: 'Al representar el saneamiento en planos, ¿qué se debe diferenciar claramente además de los tipos de bajantes?',
    options: [
      'El color de los aparatos sanitarios.',
      'La marca de las tuberías.',
      'Los ángulos de entronque de las canalizaciones en piezas de conexión y con el bote sifónico.',
      'La temperatura del agua evacuada.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Al representar las instalaciones de saneamiento, se deben respetar los ángulos de entronque de las canalizaciones en piezas de conexión y con el bote sifónico, además de diferenciar tipos de bajantes y otros elementos.'
  }
];
