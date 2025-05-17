// unit8_questions.js
// Preguntas basadas en el resumen de la Unidad 8: Representación de instalaciones especiales (Opciones Revisadas)
export const unit8Questions = [
  {
    id: 'u8q1',
    unit: 8,
    questionText: 'Diferencia principal ascensor eléctrico vs. hidráulico (tracción):',
    options: [
      'Eléctrico usa aceite',
      'Eléctrico: motor/cables; Hidráulico: pistón/aceite',
      'Ambos usan mismo sistema',
      'Eléctrico sin cuarto máq.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los ascensores eléctricos utilizan un motor eléctrico, polea y cables (con contrapeso), mientras que los hidráulicos mueven la cabina mediante un pistón impulsado por aceite a presión.'
  },
  {
    id: 'u8q2',
    unit: 8,
    questionText: 'Un ascensor con "Variación de Frecuencia (VVVF)" se caracteriza por:',
    options: [
      'Una sola velocidad',
      'Arranque/parada bruscos',
      'Arranque/parada suaves',
      'Exclusivo montacargas'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los ascensores con variación de frecuencia (VVVF) permiten un arranque y parada más suave y confortable mediante control electrónico de la velocidad.'
  },
  {
    id: 'u8q3',
    unit: 8,
    questionText: '¿Qué es un "montacargas" según la Unidad 8?',
    options: [
      'Ascensor alta velocidad',
      'Elevador para cargas (no personas)',
      'Escalera para cargas',
      'Transporte horizontal'
    ],
    correctAnswerIndex: 1,
    explanation: 'Un montacargas es un aparato elevador diseñado principalmente para cargas, con un camarín cuyas dimensiones o constitución impiden el acceso normal de personas.'
  },
  {
    id: 'u8q4',
    unit: 8,
    questionText: 'Función principal del "limitador de velocidad" en un ascensor:',
    options: [
      'Aumentar velocidad',
      'Detectar exceso y activar paracaídas',
      'Regular suavidad parada',
      'Ahorrar energía'
    ],
    correctAnswerIndex: 1,
    explanation: 'El limitador de velocidad es un elemento de seguridad que detecta los excesos de velocidad de la cabina y acciona el mecanismo del paracaídas.'
  },
  {
    id: 'u8q5',
    unit: 8,
    questionText: '¿Qué es un SPDA en protección contra rayos?',
    options: [
      'Cable especial',
      'Sistema Protección Descargas',
      'Sensor de tormentas',
      'Pararrayos industrial'
    ],
    correctAnswerIndex: 1,
    explanation: 'SPDA son las siglas de Sistema de Protección contra Descargas Atmosféricas, cuya función es minimizar los daños por impacto directo de rayos.'
  },
  {
    id: 'u8q6',
    unit: 8,
    questionText: 'El pararrayos tipo "Jaula de Faraday" consiste en:',
    options: [
      'Una punta metálica',
      'Dispositivo ionizador',
      'Red de cables en cubierta',
      'Sistema que repele rayos'
    ],
    correctAnswerIndex: 2,
    explanation: 'La Jaula de Faraday es un pararrayos reticular que consta de una red de cables conductores colocados sobre el edificio y conectados a tierra.'
  },
  {
    id: 'u8q7',
    unit: 8,
    questionText: '¿Qué tipo de pararrayos está prohibido en España por riesgo radiológico?',
    options: [
      'Punta Franklin',
      'Jaula de Faraday',
      'Pararrayos Radiactivo',
      'Pararrayos PDC'
    ],
    correctAnswerIndex: 2,
    explanation: 'El Real Decreto 14428/89 prohíbe la instalación de pararrayos radiactivos en España.'
  },
  {
    id: 'u8q8',
    unit: 8,
    questionText: 'La energía solar fotovoltaica convierte la luz solar en:',
    options: [
      'Calor para ACS',
      'Energía mecánica',
      'Electricidad (CC)',
      'Energía eólica'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una instalación solar fotovoltaica origina electricidad (en forma de corriente continua) a partir de la luz solar.'
  },
  {
    id: 'u8q9',
    unit: 8,
    questionText: 'Función principal de un "inversor" en instalación fotovoltaica:',
    options: [
      'Almacenar energía',
      'Regular carga baterías',
      'Convertir CC en CA',
      'Orientar paneles'
    ],
    correctAnswerIndex: 2,
    explanation: 'El inversor transforma la corriente continua (CC) de los paneles o baterías en corriente alterna (CA) utilizable.'
  },
  {
    id: 'u8q10',
    unit: 8,
    questionText: 'Objetivo principal de la "domótica" en una vivienda:',
    options: [
      'Aumentar valor reventa',
      'Integrar y automatizar',
      'Reemplazar instalaciones',
      'Reducir mantenimiento'
    ],
    correctAnswerIndex: 1,
    explanation: 'La domótica permite integrar y automatizar diversas tareas y sistemas para mejorar el confort, la eficiencia y la seguridad.'
  },
  {
    id: 'u8q11',
    unit: 8,
    questionText: 'En sistema domótico "centralizado", si falla el controlador principal:',
    options: [
      'Algunas funciones fallan',
      'Sigue con capacidad reducida',
      'Todo deja de funcionar',
      'Pasa a control manual'
    ],
    correctAnswerIndex: 2,
    explanation: 'En un sistema centralizado, si el único nodo controlador falla, todos los sensores y actuadores conectados a él pueden dejar de funcionar.'
  },
  {
    id: 'u8q12',
    unit: 8,
    questionText: '¿Qué es un "sensor" en un sistema domótico?',
    options: [
      'Ejecuta acción física',
      'Capta información entorno',
      'Interfaz de usuario',
      'Cableado de conexión'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los sensores son dispositivos que captan información del entorno (temperatura, movimiento, luz, etc.) y la envían al sistema domótico.'
  },
  {
    id: 'u8q13',
    unit: 8,
    questionText: 'Paneles solares FV "monocristalinos" se caracterizan por:',
    options: [
      'Más baratos, baja eficiencia',
      'Aspecto azul mosaico',
      'Mayor eficiencia, más caros',
      'Flexibles, color marrón'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los paneles monocristalinos son más costosos de fabricar pero consiguen mayores eficiencias (hasta 22%).'
  },
  {
    id: 'u8q14',
    unit: 8,
    questionText: 'Función de "regulador de carga" en FV aislada:',
    options: [
      'Convertir CC en CA',
      'Aumentar tensión paneles',
      'Controlar carga baterías',
      'Medir energía solar'
    ],
    correctAnswerIndex: 2,
    explanation: 'El regulador de carga controla el proceso de carga de las baterías, evitando sobrecargas o descargas excesivas, crucial para su vida útil.'
  },
  {
    id: 'u8q15',
    unit: 8,
    questionText: 'Tecnología domótica "KNX" es un ejemplo de sistema con:',
    options: [
      'Corrientes portadoras',
      'Inalámbrico WiFi',
      'Bus de campo dedicado',
      'Relés programables'
    ],
    correctAnswerIndex: 2,
    explanation: 'KNX es un estándar abierto para sistemas domóticos que utiliza un bus de campo dedicado para la comunicación entre dispositivos.'
  },
  {
    id: 'u8q16',
    unit: 8,
    questionText: '¿Cuál NO es una ventaja principal de la domótica?',
    options: [
      'Ahorro energético',
      'Aumento valor garantizado',
      'Mejora confort',
      'Incremento seguridad'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las ventajas principales de la domótica son el ahorro energético, el confort y la seguridad. Un aumento del valor de la propiedad no está garantizado.'
  },
  {
    id: 'u8q17',
    unit: 8,
    questionText: 'El "foso" de un ascensor es la parte:',
    options: [
      'Donde va el motor (MRL)',
      'Superior del hueco',
      'Inferior del hueco',
      'La propia cabina'
    ],
    correctAnswerIndex: 2,
    explanation: 'El foso es la parte inferior del recinto del ascensor, situada por debajo del nivel de la última parada.'
  },
  {
    id: 'u8q18',
    unit: 8,
    questionText: 'Los "amortiguadores" en un ascensor sirven para:',
    options: [
      'Reducir ruido motor',
      'Suavizar paradas',
      'Detener si sobrepasa recorrido',
      'Pesar la carga'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los amortiguadores están ubicados en el extremo inferior del recorrido y sirven para detener la cabina o el contrapeso si sobrepasan sus límites.'
  },
  {
    id: 'u8q19',
    unit: 8,
    questionText: 'Sistema de captación de pararrayos "Punta Franklin" se basa en:',
    options: [
      'Campo magnético',
      'Efecto punta',
      'Ionización electrónica',
      'Red de cables'
    ],
    correctAnswerIndex: 1,
    explanation: 'El pararrayos Franklin funciona basado en la teoría del "efecto punta", donde la acumulación de carga facilita un camino para la descarga.'
  },
  {
    id: 'u8q20',
    unit: 8,
    questionText: '¿Qué es el "efecto fotovoltaico"?',
    options: [
      'Conversión calor-luz',
      'Transformación luz-electricidad',
      'Reflexión luz solar',
      'Calentamiento por sol'
    ],
    correctAnswerIndex: 1,
    explanation: 'El efecto fotovoltaico es la transformación directa de la luz solar en electricidad que se produce en ciertos materiales semiconductores.'
  },
  {
    id: 'u8q21',
    unit: 8,
    questionText: 'Un "inversor de conexión a red" en FV permite:',
    options: [
      'Solo cargar baterías',
      'Alimentar solo CC',
      'Sincronizar con red',
      'Funcionar aislado'
    ],
    correctAnswerIndex: 2,
    explanation: 'Un inversor de conexión a red convierte la CC de los paneles en CA sincronizada con la red, permitiendo autoconsumo y/o vertido.'
  },
  {
    id: 'u8q22',
    unit: 8,
    questionText: 'Topología de red domótica "en estrella" conecta dispositivos a:',
    options: [
      'Línea troncal',
      'Todos entre sí',
      'Jerárquicamente',
      'Nodo central'
    ],
    correctAnswerIndex: 3,
    explanation: 'En la topología en estrella, todos los dispositivos están conectados a un punto o nodo central (concentrador o hub).'
  },
  {
    id: 'u8q23',
    unit: 8,
    questionText: 'Mantenimiento preventivo importante para paneles FV:',
    options: [
      'Pintarlos anualmente',
      'Limpiar suciedad superficie',
      'Reemplazar células',
      'Añadir agua destilada'
    ],
    correctAnswerIndex: 1,
    explanation: 'La limpieza de la suciedad acumulada en la superficie de los paneles es importante para mantener su rendimiento.'
  },
  {
    id: 'u8q24',
    unit: 8,
    questionText: '¿Qué tipo de ascensor NO necesita cuarto de máquinas superior?',
    options: [
      'Eléctrico 1 velocidad',
      'Eléctrico 2 velocidades',
      'Hidráulico',
      'Todos lo necesitan'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una ventaja de los ascensores hidráulicos es que su central hidráulica puede colocarse en cualquier parte del edificio, no necesariamente arriba.'
  },
  {
    id: 'u8q25',
    unit: 8,
    questionText: 'Fórmula Ne = Ng x Ae x C1 x 10-6 se usa en CTE para:',
    options: [
      'Potencia ascensor',
      'Dimensionar FV',
      'Evaluar riesgo de rayo',
      'Nº nodos domótica'
    ],
    correctAnswerIndex: 2,
    explanation: 'Esta fórmula se utiliza para calcular la frecuencia esperada de impactos de rayo (Ne) sobre una estructura, para evaluar la necesidad de pararrayos.'
  },
  {
    id: 'u8q26',
    unit: 8,
    questionText: '¿Qué son los "actuadores" en un sistema domótico?',
    options: [
      'Cables comunicación',
      'Detectores ambiente',
      'Ejecutores de órdenes',
      'Pantallas de control'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los actuadores son los componentes que realizan una acción física (encender luces, mover motores) en respuesta a una orden del sistema domótico.'
  },
  {
    id: 'u8q27',
    unit: 8,
    questionText: 'Paneles FV de "silicio amorfo" (capa fina) son:',
    options: [
      'Mayor eficiencia',
      'Más caros producir',
      'Económicos, flexibles, baja eficiencia',
      'No necesitan sol directo'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los paneles de silicio amorfo son más económicos y pueden ser flexibles, pero su eficiencia es generalmente inferior a los cristalinos.'
  },
  {
    id: 'u8q28',
    unit: 8,
    questionText: 'Un "inversor cargador" en FV combina funciones de:',
    options: [
      'Inversor y panel',
      'Regulador e inversor',
      'Batería y regulador',
      'Panel y batería'
    ],
    correctAnswerIndex: 1,
    explanation: 'Un inversor cargador integra las funciones de un inversor (CC a CA) y un regulador de carga solar, y a menudo un cargador de baterías desde red.'
  },
  {
    id: 'u8q29',
    unit: 8,
    questionText: 'Tecnología domótica por corrientes portadoras (PLC) usa:',
    options: [
      'Bus KNX',
      'Zigbee inalámbrico',
      'Cableado eléctrico 230V',
      'Relés industriales'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los sistemas por corrientes portadoras (Power Line Carrier - PLC) utilizan la propia red eléctrica de la vivienda para transmitir las señales de control.'
  },
  {
    id: 'u8q30',
    unit: 8,
    questionText: '¿Cuál NO es componente principal del "hueco del ascensor"?',
    options: [
      'Guías metálicas',
      'Cuadro de control',
      'Puertas de piso',
      'Foso y amortiguadores'
    ],
    correctAnswerIndex: 1,
    explanation: 'El cuadro de control del ascensor se ubica generalmente en el cuarto de máquinas o en un armario adyacente, no dentro del hueco de recorrido.'
  },
  {
    id: 'u8q31',
    unit: 8,
    questionText: 'El "paracaídas" de un ascensor actúa cuando:',
    options: [
      'Falla luz cabina',
      'Cabina va muy rápido',
      'Corte de energía',
      'Puertas no cierran'
    ],
    correctAnswerIndex: 1,
    explanation: 'El paracaídas actúa cuando la cabina adquiere una velocidad excesiva, siendo activado por el limitador de velocidad para frenarla.'
  },
  {
    id: 'u8q32',
    unit: 8,
    questionText: 'Sistema externo de un SPDA (pararrayos) incluye:',
    options: [
      'Protectores sobretensión',
      'Sensores campo eléctrico',
      'Captador, bajante, tierra',
      'Alarmas de tormenta'
    ],
    correctAnswerIndex: 2,
    explanation: 'El sistema externo de un SPDA está compuesto por el captador (que intercepta el rayo), los conductores de bajada y el sistema de puesta a tierra.'
  },
  {
    id: 'u8q33',
    unit: 8,
    questionText: 'Una instalación fotovoltaica "aislada" (off-grid):',
    options: [
      'Solo funciona de día',
      'Vende toda energía',
      'Es autónoma, sin red',
      'Usa aislante especial'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una instalación FV aislada es autónoma, no está conectada a la red eléctrica pública y requiere baterías para almacenar energía.'
  },
  {
    id: 'u8q34',
    unit: 8,
    questionText: 'La "ecualización" de baterías en FV aislada busca:',
    options: [
      'Descargarlas totalmente',
      'Aumentar su voltaje',
      'Recuperar capacidad',
      'Proteger de cortocircuitos'
    ],
    correctAnswerIndex: 2,
    explanation: 'La ecualización es una sobrecarga controlada para baterías de plomo-ácido que ayuda a igualar celdas, disolver sulfatación y recuperar capacidad.'
  },
  {
    id: 'u8q35',
    unit: 8,
    questionText: '¿Qué es un "nodo" en una red domótica?',
    options: [
      'Cable principal red',
      'Dispositivo conectado',
      'Software configuración',
      'Fuente alimentación'
    ],
    correctAnswerIndex: 1,
    explanation: 'En una red domótica, un nodo es cualquier dispositivo individual (sensor, actuador, controlador) conectado a la red.'
  },
  {
    id: 'u8q36',
    unit: 8,
    questionText: 'Ventaja de ascensor eléctrico con contrapeso vs. hidráulico sin él (consumo):',
    options: [
      'Hidráulico consume menos',
      'Eléctrico consume menos',
      'Consumen igual',
      'Eléctrico consume más'
    ],
    correctAnswerIndex: 1,
    explanation: 'El contrapeso en un ascensor eléctrico reduce el esfuerzo del motor, por lo que generalmente consume menos energía total que un hidráulico sin contrapeso.'
  },
  {
    id: 'u8q37',
    unit: 8,
    questionText: 'Dato "Ng" (densidad impactos rayo) es para:',
    options: [
      'Dimensionar cables ascensor',
      'Calcular producción FV',
      'Evaluar riesgo de rayo',
      'Determinar bus domótica'
    ],
    correctAnswerIndex: 2,
    explanation: 'Ng (densidad de descargas a tierra) es un parámetro clave para calcular la frecuencia esperada de impactos de rayo y evaluar la necesidad de pararrayos.'
  },
  {
    id: 'u8q38',
    unit: 8,
    questionText: 'Paneles FV con mejor comportamiento a altas temperaturas (entre cristalinos):',
    options: [
      'Monocristalinos',
      'Policristalinos (a veces)',
      'Amorfos (mejor general)',
      'Todos igual'
    ],
    correctAnswerIndex: 1,
    explanation: 'Aunque los amorfos suelen tener el mejor coeficiente de temperatura, entre los cristalinos, a veces se atribuye una ligera ventaja de comportamiento a altas temperaturas a los policristalinos, si bien las diferencias son pequeñas.'
  },
  {
    id: 'u8q39',
    unit: 8,
    questionText: 'Aplicación común de domótica en "seguridad":',
    options: [
      'Control temperatura',
      'Escenas iluminación',
      'Detección intrusión',
      'Riego automático'
    ],
    correctAnswerIndex: 2,
    explanation: 'La detección de intrusión mediante sensores de movimiento y la activación de alarmas es una aplicación fundamental de la domótica para la seguridad.'
  },
  {
    id: 'u8q40',
    unit: 8,
    questionText: 'Propósito principal de "contactos de seguridad" en ascensor:',
    options: [
      'Comunicación exterior',
      'Encender luz cabina',
      'Asegurar operación segura',
      'Registrar nº viajes'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los contactos de seguridad aseguran que el ascensor solo funcione si todas las condiciones de seguridad (ej. puertas cerradas) se cumplen.'
  }
];
