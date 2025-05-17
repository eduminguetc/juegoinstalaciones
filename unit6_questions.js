// unit6_questions.js
// Preguntas basadas en el resumen de la Unidad 6: Configuración de instalaciones de climatización (Opciones Revisadas)
export const unit6Questions = [
  {
    id: 'u6q1',
    unit: 6,
    questionText: 'Definición de "climatización" según el RITE:',
    options: [
      'Solo calefacción',
      'Control ambiental completo',
      'Solo ventilación natural',
      'Medición temperatura ext.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Climatización es dotar a un espacio cerrado de las condiciones de temperatura, humedad, calidad del aire y, a veces, presión, para el bienestar o conservación.'
  },
  {
    id: 'u6q2',
    unit: 6,
    questionText: '¿Cuál NO influye directamente en el confort térmico humano?',
    options: [
      'Temperatura aire',
      'Humedad relativa',
      'Velocidad aire',
      'Color pintura paredes'
    ],
    correctAnswerIndex: 3,
    explanation: 'El confort térmico depende de temperatura, humedad, velocidad del aire, actividad, vestimenta y temperatura radiante. El color de paredes tiene un efecto indirecto.'
  },
  {
    id: 'u6q3',
    unit: 6,
    questionText: 'Característica de la transferencia de calor por "radiación":',
    options: [
      'Necesita contacto',
      'Solo en líquidos',
      'Por ondas electromagnéticas',
      'Requiere movimiento fluido'
    ],
    correctAnswerIndex: 2,
    explanation: 'La radiación se transmite mediante ondas electromagnéticas y no necesita un medio material para propagarse (ej. calor del Sol).'
  },
  {
    id: 'u6q4',
    unit: 6,
    questionText: 'La "psicrometría" es el estudio de las propiedades del:',
    options: [
      'Agua en tuberías',
      'Resistencia materiales',
      'Aire húmedo',
      'Velocidad del sonido'
    ],
    correctAnswerIndex: 2,
    explanation: 'La psicrometría es la ciencia que estudia las propiedades físicas y térmicas del aire atmosférico (aire húmedo).'
  },
  {
    id: 'u6q5',
    unit: 6,
    questionText: 'El "calor latente" está asociado al cambio de:',
    options: [
      'Temperatura sin humedad',
      'Energía almacenada',
      'Radiación solar',
      'Estado del agua en aire'
    ],
    correctAnswerIndex: 3,
    explanation: 'El calor latente es el calor asociado a un cambio de estado del agua (evaporación/condensación) en el aire, a temperatura constante.'
  },
  {
    id: 'u6q6',
    unit: 6,
    questionText: '¿Qué son las "cargas térmicas exteriores" en climatización?',
    options: [
      'Calor de personas/equipos',
      'Ganancias/pérdidas por exterior',
      'Peso equipos exteriores',
      'Potencia eléctrica exterior'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las cargas térmicas exteriores se deben a las condiciones climáticas externas: transmisión por cerramientos, radiación solar e infiltraciones.'
  },
  {
    id: 'u6q7',
    unit: 6,
    questionText: 'Fluido que circula entre unidad interior y exterior en sistema DX:',
    options: [
      'Agua fría/caliente',
      'Aire tratado',
      'Refrigerante',
      'Aceite térmico'
    ],
    correctAnswerIndex: 2,
    explanation: 'En los sistemas de Expansión Directa (DX), el fluido refrigerante circula por las tuberías que conectan la unidad interior y la exterior.'
  },
  {
    id: 'u6q8',
    unit: 6,
    questionText: 'Un sistema "Multi-Split" se caracteriza por tener:',
    options: [
      'Una interior potente',
      'Una exterior, varias interiores',
      'Funcionar solo con sol',
      'Ser sistema hidrónico'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los sistemas Multi-Split constan de una única unidad exterior conectada a varias unidades interiores.'
  },
  {
    id: 'u6q9',
    unit: 6,
    questionText: '¿Qué es un sistema VRF/VRV?',
    options: [
      'Aire acondicionado portátil',
      'Calefacción eléctrica',
      'Sistema DX gran capacidad',
      'Ventilación alta eficiencia'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los sistemas VRF/VRV (Volumen de Refrigerante Variable) son sistemas de expansión directa centralizados de gran capacidad, para climatizar múltiples zonas.'
  },
  {
    id: 'u6q10',
    unit: 6,
    questionText: 'Fluido distribuido a unidades terminales en sistemas hidrónicos:',
    options: [
      'Refrigerante alta presión',
      'Aire exterior sin tratar',
      'Agua (fría o caliente)',
      'Vapor de agua'
    ],
    correctAnswerIndex: 2,
    explanation: 'En los sistemas hidrónicos (expansión indirecta), el agua (enfriada o calentada) actúa como fluido caloportador que se distribuye a las unidades terminales.'
  },
  {
    id: 'u6q11',
    unit: 6,
    questionText: 'Un "Fancoil" o ventiloconvector es una unidad terminal con:',
    options: [
      'Caldera de gas',
      'Conducto de aire',
      'Batería y ventilador',
      'Filtro alta eficiencia'
    ],
    correctAnswerIndex: 2,
    explanation: 'Un Fancoil contiene una batería (intercambiador agua-aire) y un ventilador que impulsa el aire tratado al local.'
  },
  {
    id: 'u6q12',
    unit: 6,
    questionText: 'Uno de los objetivos principales del RITE es establecer exigencias de:',
    options: [
      'Color de tuberías',
      'Solo aislamiento térmico',
      'Eficiencia y seguridad',
      'Precios de energía'
    ],
    correctAnswerIndex: 2,
    explanation: 'El RITE (Reglamento de Instalaciones Térmicas en los Edificios) establece exigencias de eficiencia energética, seguridad, bienestar térmico e higiene.'
  },
  {
    id: 'u6q13',
    unit: 6,
    questionText: 'Función de los "difusores" en climatización por aire:',
    options: [
      'Filtrar aire retorno',
      'Generar frío/calor',
      'Distribuir aire impulsión',
      'Regular humedad'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los difusores son elementos terminales de impulsión que distribuyen el aire tratado en el local de forma controlada.'
  },
  {
    id: 'u6q14',
    unit: 6,
    questionText: 'Función del "compresor" en ciclo de refrigeración:',
    options: [
      'Enfriar refrigerante',
      'Aumentar P y T del gas',
      'Expandir refrigerante',
      'Absorber calor exterior'
    ],
    correctAnswerIndex: 1,
    explanation: 'El compresor succiona el refrigerante gaseoso a baja presión y lo comprime, elevando su presión y temperatura.'
  },
  {
    id: 'u6q15',
    unit: 6,
    questionText: '¿Dónde cede calor el refrigerante al exterior en ciclo de refrigeración?',
    options: [
      'Evaporador',
      'Válvula expansión',
      'Compresor',
      'Condensador'
    ],
    correctAnswerIndex: 3,
    explanation: 'El condensador es donde el refrigerante (a alta presión y temperatura) cede calor al medio exterior y pasa de gas a líquido.'
  },
  {
    id: 'u6q16',
    unit: 6,
    questionText: 'Una "bomba de calor" es un equipo que puede:',
    options: [
      'Solo generar frío',
      'Solo generar calor',
      'Dar frío y calor',
      'Bombear solo agua'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una bomba de calor puede invertir su ciclo de funcionamiento para proporcionar tanto refrigeración como calefacción.'
  },
  {
    id: 'u6q17',
    unit: 6,
    questionText: '¿Qué es el "punto de rocío"?',
    options: [
      'Temp. ebullición agua',
      'Temp. mín. aire ext.',
      'Temp. saturación aire',
      'Punto medida velocidad'
    ],
    correctAnswerIndex: 2,
    explanation: 'El punto de rocío es la temperatura a la cual el aire se satura de vapor de agua (100% HR) y comienza a condensar.'
  },
  {
    id: 'u6q18',
    unit: 6,
    questionText: 'El Documento Básico HE 1 del CTE se enfoca en:',
    options: [
      'Rendimiento calderas',
      'Limitar demanda energética',
      'Uso energías renovables',
      'Protección contra ruido'
    ],
    correctAnswerIndex: 1,
    explanation: 'El DB HE 1 "Limitación de demanda energética" establece exigencias sobre la envolvente térmica del edificio para reducir sus necesidades de climatización.'
  },
  {
    id: 'u6q19',
    unit: 6,
    questionText: '¿Cuál NO es un tipo común de unidad interior en sistemas Split?',
    options: [
      'Split de pared',
      'Cassette de techo',
      'Conductos',
      'Enfriadora de agua'
    ],
    correctAnswerIndex: 3,
    explanation: 'Una enfriadora de agua es un equipo central de producción para sistemas hidrónicos, no una unidad interior de un sistema Split de expansión directa.'
  },
  {
    id: 'u6q20',
    unit: 6,
    questionText: '¿Qué es una UTA (Unidad de Tratamiento de Aire)?',
    options: [
      'Termostato avanzado',
      'Equipo Rooftop',
      'Equipo modular trata aire',
      'Válvula control VRF'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una UTA o Climatizador es un equipo modular diseñado para tratar grandes caudales de aire (filtrar, enfriar/calentar, humectar/deshumectar, ventilar).'
  },
  {
    id: 'u6q21',
    unit: 6,
    questionText: 'La velocidad del aire interior se controla para:',
    options: [
      'Maximizar ruido',
      'Asegurar rapidez aire',
      'Evitar corrientes molestas',
      'Facilitar condensación'
    ],
    correctAnswerIndex: 2,
    explanation: 'La velocidad del aire en la zona ocupada debe mantenerse baja (típicamente < 0.2 m/s) para evitar la sensación de corriente de aire molesta.'
  },
  {
    id: 'u6q22',
    unit: 6,
    questionText: 'Ejemplo de "carga térmica interior" en verano:',
    options: [
      'Calor por ventana cerrada',
      'Calor de ordenadores',
      'Frío por infiltraciones',
      'Radiación solar fachada'
    ],
    correctAnswerIndex: 1,
    explanation: 'El calor generado por equipos internos como ordenadores es una carga térmica interior sensible.'
  },
  {
    id: 'u6q23',
    unit: 6,
    questionText: 'Un sistema Rooftop se caracteriza por ser:',
    options: [
      'Instalado en sótano',
      'Unidad compacta de cubierta',
      'Usar agua refrigerante',
      'Pequeño y portátil'
    ],
    correctAnswerIndex: 1,
    explanation: 'Un sistema Rooftop es un equipo compacto autónomo "todo en uno" que se instala típicamente en la cubierta del edificio.'
  },
  {
    id: 'u6q24',
    unit: 6,
    questionText: 'Materiales comunes para conductos de aire en climatización:',
    options: [
      'Solo tubería cobre',
      'Solo manguera plástica',
      'Chapa, fibra, flexibles',
      'Ladrillo refractario'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los conductos de aire se fabrican comúnmente de chapa metálica, paneles de fibra de vidrio o materiales plásticos flexibles.'
  },
  {
    id: 'u6q25',
    unit: 6,
    questionText: 'Función de los filtros en una UTA:',
    options: [
      'Aumentar humedad',
      'Enfriar por evaporación',
      'Retener partículas del aire',
      'Regular caudal aire'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los filtros en una UTA son esenciales para retener partículas (polvo, polen) del aire, mejorando la calidad y protegiendo los equipos.'
  },
  {
    id: 'u6q26',
    unit: 6,
    questionText: 'Un sistema hidrónico usa ______ como fluido caloportador.',
    options: [
      'Aire',
      'Refrigerante R-410A',
      'Agua',
      'Nitrógeno'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los sistemas hidrónicos utilizan agua (enfriada o calentada) como fluido caloportador para transportar la energía térmica.'
  },
  {
    id: 'u6q27',
    unit: 6,
    questionText: 'El calor disipado por cables eléctricos es una carga térmica:',
    options: [
      'Exterior y latente',
      'Interior y latente',
      'Exterior y sensible',
      'Interior y sensible'
    ],
    correctAnswerIndex: 3,
    explanation: 'El calor disipado por el funcionamiento de equipos eléctricos (efecto Joule en cables, motores, iluminación) es una ganancia de calor interna y sensible.'
  },
  {
    id: 'u6q28',
    unit: 6,
    questionText: 'Alta "inercia térmica" en cerramientos significa que:',
    options: [
      'Calor pasa rápido',
      'Muros ligeros',
      'Almacenan calor y amortiguan',
      'Edificio mal aislado'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una alta inercia térmica indica que los materiales tienen gran capacidad para almacenar calor, lo que ayuda a amortiguar y retardar las variaciones de temperatura interior.'
  },
  {
    id: 'u6q29',
    unit: 6,
    questionText: 'Función de la "válvula de expansión" en ciclo de refrigeración:',
    options: [
      'Comprimir refrigerante',
      'Condensar refrigerante',
      'Reducir P y T del líquido',
      'Permitir flujo unidireccional'
    ],
    correctAnswerIndex: 2,
    explanation: 'La válvula de expansión reduce bruscamente la presión y temperatura del refrigerante líquido antes de que entre al evaporador.'
  },
  {
    id: 'u6q30',
    unit: 6,
    questionText: 'Inconveniente de los refrigerantes HFC (Hidrofluorocarbonos):',
    options: [
      'Muy tóxicos',
      'Muy inflamables',
      'Alto PCA/GWP',
      'Caros e ineficientes'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los refrigerantes HFC, aunque no dañan la capa de ozono, tienen un alto Potencial de Calentamiento Atmosférico (PCA o GWP), contribuyendo al efecto invernadero.'
  },
  {
    id: 'u6q31',
    unit: 6,
    questionText: 'En Q = U · A · ΔT, ¿qué representa "U"?',
    options: [
      'Diferencia temperatura',
      'Área de transferencia',
      'Coeficiente transferencia',
      'Flujo de calor total'
    ],
    correctAnswerIndex: 2,
    explanation: 'U representa el coeficiente global de transferencia de calor (o transmitancia térmica) del elemento (W/m²K).'
  },
  {
    id: 'u6q32',
    unit: 6,
    questionText: 'Sistema de climatización para gran edificio de oficinas con control individual:',
    options: [
      'Split 1x1 pared',
      'Varios portátiles',
      'VRF o hidrónico fancoils',
      'Solo radiadores eléctricos'
    ],
    correctAnswerIndex: 2,
    explanation: 'Para grandes edificios con múltiples zonas y necesidad de control individual, los sistemas VRF/VRV o los sistemas hidrónicos con fancoils son soluciones adecuadas.'
  },
  {
    id: 'u6q33',
    unit: 6,
    questionText: '"Dampers" o compuertas en conductos de aire sirven para:',
    options: [
      'Filtrar el aire',
      'Reducir ruido ventilador',
      'Ajustar o cerrar caudal',
      'Medir temperatura aire'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los dampers son compuertas móviles que permiten regular (ajustar o cerrar) el caudal de aire que pasa por un conducto o rejilla.'
  },
  {
    id: 'u6q34',
    unit: 6,
    questionText: 'Rango de humedad relativa para confort térmico según RITE:',
    options: [
      '0% - 20%',
      '20% - 40%',
      '40% - 60%',
      '80% - 100%'
    ],
    correctAnswerIndex: 2,
    explanation: 'El RITE establece rangos de humedad relativa para confort, que suelen estar entre el 40% y el 60% (ej. 45-60% verano / 40-50% invierno).'
  },
  {
    id: 'u6q35',
    unit: 6,
    questionText: 'La "cámara de mezcla" en una UTA permite mezclar:',
    options: [
      'Tipos de refrigerantes',
      'Aire de retorno y exterior',
      'Aumentar presión aire',
      'Enfriar con agua pulverizada'
    ],
    correctAnswerIndex: 1,
    explanation: 'La cámara de mezcla en una UTA es donde se mezcla el aire de retorno del local con aire fresco exterior antes de ser tratado.'
  },
  {
    id: 'u6q36',
    unit: 6,
    questionText: 'Ventaja de sistema "Aire-Agua" vs "Agua-Agua" en enfriadoras:',
    options: [
      'Siempre más eficiente',
      'No necesita torre externa',
      'Funciona a temp. extremas',
      'Mucho más silencioso'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los sistemas Aire-Agua intercambian calor con el aire ambiente exterior, eliminando la necesidad de un circuito secundario de agua con torres de refrigeración que sí requieren los sistemas Agua-Agua.'
  },
  {
    id: 'u6q37',
    unit: 6,
    questionText: 'Elemento clave en bomba de calor (modo calor) a baja temp. exterior:',
    options: [
      'Evaporador (unidad ext.)',
      'Condensador (unidad int.)',
      'Quemador gas auxiliar',
      'Depósito agua caliente'
    ],
    correctAnswerIndex: 0,
    explanation: 'En modo calefacción, el evaporador (unidad exterior) de una bomba de calor absorbe calor del aire exterior, incluso si está frío.'
  },
  {
    id: 'u6q38',
    unit: 6,
    questionText: 'La norma UNE-EN ISO 7730 es relevante para:',
    options: [
      'Cálculo cargas térmicas',
      'Clasificación filtros',
      'Ergonomía ambiente térmico',
      'Diseño conductos aire'
    ],
    correctAnswerIndex: 2,
    explanation: 'La UNE-EN ISO 7730 trata sobre la ergonomía del ambiente térmico y métodos para predecir la sensación térmica general (confort).'
  },
  {
    id: 'u6q39',
    unit: 6,
    questionText: 'Al seleccionar refrigerantes, se busca minimizar, además de eficiencia:',
    options: [
      'Capacidad absorber calor',
      'Temperatura ebullición',
      'Impacto ambiental (PAO/PCA)',
      'Densidad en estado líquido'
    ],
    correctAnswerIndex: 2,
    explanation: 'Actualmente se busca minimizar el impacto ambiental de los refrigerantes, prefiriendo aquellos con bajo Potencial de Agotamiento de Ozono (PAO) y bajo Potencial de Calentamiento Atmosférico (PCA).'
  },
  {
    id: 'u6q40',
    unit: 6,
    questionText: 'Tipo de calor que generan principalmente las personas:',
    options: [
      'Solo sensible',
      'Solo latente',
      'Sensible y latente',
      'Ninguno relevante'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las personas generan tanto calor sensible (aumento de temperatura del aire) como calor latente (vapor de agua por respiración y sudoración).'
  }
];
