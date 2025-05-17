// unit2_questions.js
// Preguntas basadas en el resumen de la Unidad 2: Configuración de instalaciones de fontanería y saneamiento (Opciones Revisadas)
export const unit2Questions = [
  {
    id: 'u2q1',
    unit: 2,
    questionText: '¿Primera fase del ciclo urbano del agua?',
    options: [
      'Potabilización',
      'Aducción',
      'Distribución',
      'Depuración'
    ],
    correctAnswerIndex: 1,
    explanation: 'La aducción es la primera fase, conduciendo agua de fuentes (ríos, embalses) al circuito urbano.'
  },
  {
    id: 'u2q2',
    unit: 2,
    questionText: 'En fontanería, ¿qué son las "pérdidas de carga"?',
    options: [
      'Fugas de agua',
      'Disminución de presión',
      'Coste de reparaciones',
      'Simultaneidad de uso'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las pérdidas de carga son la disminución de la presión del agua al circular por las tuberías debido al rozamiento y accesorios.'
  },
  {
    id: 'u2q3',
    unit: 2,
    questionText: 'La "acometida" en fontanería enlaza la red exterior con:',
    options: [
      'Contador y derivaciones',
      'Instalación general',
      'Aparatos y bajante',
      'Caldera y radiadores'
    ],
    correctAnswerIndex: 1,
    explanation: 'La acometida es la tubería que enlaza la red exterior de suministro con la instalación general de la vivienda.'
  },
  {
    id: 'u2q4',
    unit: 2,
    questionText: 'Elemento que mide el consumo total de agua del edificio:',
    options: [
      'Llave de paso general',
      'Válvula de retención',
      'Contador general',
      'Grupo de presión'
    ],
    correctAnswerIndex: 2,
    explanation: 'El contador general es aquel que mide la totalidad de consumo de agua en todo el edificio.'
  },
  {
    id: 'u2q5',
    unit: 2,
    questionText: 'Tuberías verticales que conectan distribuidor y derivaciones de planta:',
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
    questionText: 'Según CTE DB HS4, ¿posición del grifo de agua caliente?',
    options: [
      'Derecha',
      'Encima',
      'Debajo',
      'Izquierda'
    ],
    correctAnswerIndex: 3,
    explanation: 'En los aparatos alimentados por agua fría y caliente, el grifo de agua caliente se coloca a la izquierda.'
  },
  {
    id: 'u2q7',
    unit: 2,
    questionText: 'Función principal de un sistema de saneamiento separativo:',
    options: [
      'Reducir coste',
      'Usar una sola tubería',
      'Facilitar depuración',
      'Aumentar presión'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una ventaja del sistema separativo es una mejor adecuación para un posterior proceso de depuración, al mantener separadas aguas pluviales y residuales.'
  },
  {
    id: 'u2q8',
    unit: 2,
    questionText: 'Sistema de saneamiento con una única canalización para todas las aguas:',
    options: [
      'Separativo',
      'Semiseparativo',
      'Unitario',
      'Elevación forzada'
    ],
    correctAnswerIndex: 2,
    explanation: 'En el sistema unitario, en una misma canalización, se recogen todas las aguas producidas, tanto residuales como pluviales.'
  },
  {
    id: 'u2q9',
    unit: 2,
    questionText: '¿Qué es la ventilación primaria en saneamiento?',
    options: [
      'Ventiladores en colectores',
      'Prolongación de bajante',
      'Conexión de sifones',
      'Válvulas de aireación'
    ],
    correctAnswerIndex: 1,
    explanation: 'La ventilación primaria consiste en la prolongación de la bajante de aguas residuales por encima de la cubierta del edificio, abierta al exterior.'
  },
  {
    id: 'u2q10',
    unit: 2,
    questionText: 'Pendiente mínima de colectores enterrados en saneamiento:',
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
    questionText: 'Uso de un sistema de elevación forzada en saneamiento:',
    options: [
      'Aumentar velocidad agua',
      'Red interior bajo alcantarillado',
      'Triturar residuos sólidos',
      'Ventilar colectores'
    ],
    correctAnswerIndex: 1,
    explanation: 'El sistema de elevación forzada se utiliza para evacuar aguas cuando su cota final de reunión es inferior a la del alcantarillado público.'
  },
  {
    id: 'u2q12',
    unit: 2,
    questionText: 'Un bote sifónico en un baño sirve para:',
    options: [
      'Recoger agua lavadora',
      'Conectar inodoro',
      'Cierre hidráulico común',
      'Regular temperatura'
    ],
    correctAnswerIndex: 2,
    explanation: 'El bote sifónico recoge las aguas de varios aparatos (excepto inodoro) y crea un cierre hidráulico común para evitar malos olores.'
  },
  {
    id: 'u2q13',
    unit: 2,
    questionText: 'Factor "F" en dimensionamiento pluvial corrige por:',
    options: [
      'Número de sumideros',
      'Material de bajantes',
      'Intensidad pluviométrica',
      'Pendiente de canalones'
    ],
    correctAnswerIndex: 2,
    explanation: 'El factor de corrección F (F=i/100) se aplica sobre la superficie de cubierta cuando la intensidad pluviométrica (i) es diferente de 100 mm/h.'
  },
  {
    id: 'u2q14',
    unit: 2,
    questionText: 'Mínimo de sumideros para cubierta de 150 m²:',
    options: [
      '1 sumidero',
      '2 sumideros',
      '3 sumideros',
      '4 sumideros'
    ],
    correctAnswerIndex: 2,
    explanation: 'Según la tabla 2 del DB-HS5 (similar a la del PDF), para una cubierta entre 100 m² y 200 m², se necesitan 3 sumideros.'
  },
  {
    id: 'u2q15',
    unit: 2,
    questionText: 'Las "Unidades de Desagüe" (UD) se usan para dimensionar:',
    options: [
      'Tuberías de agua fría',
      'Depósitos de ACS',
      'Bajantes/colectores residuales',
      'Canalones pluviales'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las Unidades de Desagüe (UD) son valores asignados a cada aparato sanitario y se utilizan para dimensionar las tuberías de evacuación de aguas residuales.'
  },
  {
    id: 'u2q16',
    unit: 2,
    questionText: 'Recomendación para trazado de tuberías de fontanería:',
    options: [
      'Trazado más largo',
      'Evitar locales húmedos',
      'Trazado más corto',
      'Siempre tuberías vistas'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una recomendación es que el trazado de las tuberías de fontanería sea lo más corto posible, desde la entrada de la vivienda hasta el equipo de producción de ACS.'
  },
  {
    id: 'u2q17',
    unit: 2,
    questionText: 'Función de una arqueta sifónica en saneamiento:',
    options: [
      'Recoger solo pluviales',
      'Impedir registro',
      'Cierre hidráulico general',
      'Solo a pie de bajante'
    ],
    correctAnswerIndex: 2,
    explanation: 'La arqueta sifónica tiene la función de cierre hidráulico general y evita la penetración de los malos olores procedentes de la red de saneamiento exterior.'
  },
  {
    id: 'u2q18',
    unit: 2,
    questionText: 'Unidad de presión "m.c.a." significa:',
    options: [
      'Módulos Cobre Anodizado',
      'Metros Cúbicos Agua',
      'Máxima Carga Admisible',
      'Metros Columna Agua'
    ],
    correctAnswerIndex: 3,
    explanation: 'm.c.a. significa Metros de Columna de Agua, una unidad de medida de presión (10 m.c.a. ≈ 1 bar).'
  },
  {
    id: 'u2q19',
    unit: 2,
    questionText: 'Función de válvula de retención en instalación general de agua:',
    options: [
      'Medir consumo',
      'Permitir vaciado',
      'Impedir retorno a red',
      'Regular presión'
    ],
    correctAnswerIndex: 2,
    explanation: 'La válvula de retención es un dispositivo que solo permite que el caudal del agua circule hacia la instalación, impidiendo su retorno a la red exterior.'
  },
  {
    id: 'u2q20',
    unit: 2,
    questionText: 'Sistema saneamiento semiseparativo: bajantes y colectores son:',
    options: [
      'Ambos unitarios',
      'Ambos separativos',
      'Bajantes separativas, colectores unitarios',
      'Bajantes unitarias, colectores separativos'
    ],
    correctAnswerIndex: 2,
    explanation: 'El sistema semiseparativo consiste en bajantes separativas (pluviales y residuales) y colectores horizontales unitarios.'
  },
  {
    id: 'u2q21',
    unit: 2,
    questionText: 'Elemento que controla el agua a una vivienda particular:',
    options: [
      'Contador general',
      'Llave paso particular',
      'Grupo de presión',
      'Válvula acometida'
    ],
    correctAnswerIndex: 1,
    explanation: 'La llave de paso particular controla el paso de agua al suministro de una vivienda o local individual.'
  },
  {
    id: 'u2q22',
    unit: 2,
    questionText: 'CTE DB-HS5 establece criterios para evacuación de:',
    options: [
      'Aguas industriales',
      'Aguas de riego',
      'Residuales y pluviales',
      'Solo agua consumo'
    ],
    correctAnswerIndex: 2,
    explanation: 'El CTE DB-HS5 "Evacuación de aguas" establece las exigencias para las redes de evacuación de aguas residuales y pluviales en los edificios.'
  },
  {
    id: 'u2q23',
    unit: 2,
    questionText: 'Mínimo de sumideros para cubierta de 600 m² (1/150m² si S>500):',
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
    questionText: 'Objetivo de un "grupo de presión" en edificio alto:',
    options: [
      'Filtrar agua',
      'Calentar agua ACS',
      'Asegurar presión en altura',
      'Medir caudal entrada'
    ],
    correctAnswerIndex: 2,
    explanation: 'El grupo de presión da fuerza al agua para que pueda subir hasta los pisos más altos con la presión adecuada.'
  },
  {
    id: 'u2q25',
    unit: 2,
    questionText: 'Tuberías de saneamiento (PVC) deben instalarse con:',
    options: [
      'Pendiente hacia arriba',
      'Totalmente horizontales',
      'Ligera pendiente hacia bajantes',
      'Solo conexiones roscadas'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las tuberías de PVC de saneamiento van empotradas con una ligera pendiente hacia los bajantes para que el agua circule rápidamente por gravedad.'
  },
  {
    id: 'u2q26',
    unit: 2,
    questionText: '"Ramal de enlace" en fontanería particular es tubería:',
    options: [
      'Red exterior a contador',
      'Vertical principal',
      'Derivación a aparatos',
      'Unión de materiales'
    ],
    correctAnswerIndex: 2,
    explanation: 'El ramal de enlace es la tubería que conduce el agua desde la derivación particular hasta los puntos de consumo o aparatos sanitarios.'
  },
  {
    id: 'u2q27',
    unit: 2,
    questionText: '¿Qué es el "coeficiente de simultaneidad" en fontanería?',
    options: [
      'Velocidad máx. agua',
      'Factor de uso simultáneo',
      'Pérdida presión/metro',
      'Tiempo llenado depósito'
    ],
    correctAnswerIndex: 1,
    explanation: 'El coeficiente de simultaneidad es un factor que se aplica para estimar la demanda máxima probable de agua (K=1/(√(n-1))).'
  },
  {
    id: 'u2q28',
    unit: 2,
    questionText: 'Conductos de evacuación en sistema con trituradores:',
    options: [
      'Gran diámetro',
      'Diámetros mínimos (20-40mm)',
      'Siempre metálicos',
      'Sin pendiente'
    ],
    correctAnswerIndex: 1,
    explanation: 'Debido a la trituración previa, los sistemas con trituradores permiten diámetros en los conductos de evacuación mínimos (de 20 a 40 mm).'
  },
  {
    id: 'u2q29',
    unit: 2,
    questionText: 'Función de una "arqueta a pie de bajante":',
    options: [
      'Recoger pluviales cubierta',
      'Conectar bajante a colector',
      'Evitar olores bajante',
      'Almacenar agua limpieza'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las arquetas a pie de bajante se utilizan para conectar una bajante a un colector enterrado, sirviendo también de registro.'
  },
  {
    id: 'u2q30',
    unit: 2,
    questionText: 'Los montantes de agua deben discurrir por:',
    options: [
      'Interior viviendas',
      'Patios sin protección',
      'Zonas comunes registrables',
      'Fachada exterior'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las ascendentes o montantes deben discurrir por zonas de uso común del edificio y alojarse en recintos o huecos construidos a tal fin, registrables.'
  },
  {
    id: 'u2q31',
    unit: 2,
    questionText: 'El "punto de toma" en la acometida de agua es:',
    options: [
      'Grifo final consumo',
      'Lugar del contador',
      'Derivación de red pública',
      'Válvula de vaciado'
    ],
    correctAnswerIndex: 2,
    explanation: 'El punto de toma es el lugar en el que el ramal de acometida se deriva del ramal de la red de distribución pública.'
  },
  {
    id: 'u2q32',
    unit: 2,
    questionText: 'Sistema de saneamiento más costoso pero aconsejable en edificios altos:',
    options: [
      'Unitario',
      'Semiseparativo',
      'Separativo',
      'De trituradores'
    ],
    correctAnswerIndex: 2,
    explanation: 'Aunque es un sistema costoso, el sistema separativo es el más aconsejable e incluso obligatorio en edificios a partir de cierta altura.'
  },
  {
    id: 'u2q33',
    unit: 2,
    questionText: 'La ventilación terciaria en saneamiento conecta:',
    options: [
      'Bajantes a cubierta',
      'Colectores a alcantarilla',
      'Sifones a ventilación secundaria',
      'Arquetas al ambiente'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ventilación terciaria es un ramal que conecta los cierres hidráulicos (sifones) de los aparatos con la columna de ventilación secundaria o al exterior.'
  },
  {
    id: 'u2q34',
    unit: 2,
    questionText: 'Distancia máxima entre arquetas en tramos rectos de colectores enterrados:',
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
    questionText: 'Si la intensidad pluviométrica es 150 mm/h, el factor "F" es:',
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
    questionText: 'Precaución con colectores enterrados y red de agua potable:',
    options: [
      'Instalarlos siempre encima',
      'Compartir misma zanja',
      'Instalarlos por debajo',
      'Ninguna precaución'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los colectores enterrados deben ser instalados en zanjas situadas por debajo de la red de distribución de agua potable para evitar contaminación.'
  },
  {
    id: 'u2q37',
    unit: 2,
    questionText: 'El manguetón es un tubo que conecta típicamente:',
    options: [
      'Lavabo a bote sifónico',
      'Ducha a bajante',
      'Inodoro a bajante',
      'Fregadero a colector'
    ],
    correctAnswerIndex: 2,
    explanation: 'El manguetón es el tubo de mayor diámetro que conecta la salida del inodoro directamente con la bajante de aguas fecales.'
  },
  {
    id: 'u2q38',
    unit: 2,
    questionText: '¿Cuál NO es una fase del ciclo urbano del agua?',
    options: [
      'Aducción',
      'Potabilización',
      'Evaporación de red',
      'Depuración'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las fases del ciclo urbano incluyen captación, aducción, potabilización, distribución, depuración, etc. La evaporación directa desde la red no es una fase gestionada.'
  },
  {
    id: 'u2q39',
    unit: 2,
    questionText: 'Distancia máxima entre abrazaderas de bajantes (sin contar la de soporte):',
    options: [
      '0.5 m',
      '1.0 m',
      '1.5 m',
      '3.0 m'
    ],
    correctAnswerIndex: 2,
    explanation: 'El resto de las abrazaderas (además de la de soporte) debe colocarse de forma que la distancia entre ellas no supere los 1,5 metros.'
  },
  {
    id: 'u2q40',
    unit: 2,
    questionText: 'Al representar saneamiento en planos, diferenciar claramente:',
    options: [
      'Color aparatos',
      'Marca tuberías',
      'Ángulos de entronque',
      'Temperatura agua'
    ],
    correctAnswerIndex: 2,
    explanation: 'Se deben respetar y diferenciar los ángulos de entronque de las canalizaciones en piezas de conexión y con el bote sifónico, además de otros elementos.'
  }
];
