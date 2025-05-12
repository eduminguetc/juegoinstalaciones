// unit6_questions.js
// Preguntas basadas en el resumen de la Unidad 6: Configuración de instalaciones de climatización
export const unit6Questions = [
  {
    id: 'u6q1',
    unit: 6,
    questionText: '¿Qué se entiende por "climatización" según la definición del RITE?',
    options: [
      'Únicamente la instalación de calefacción en invierno.',
      'Dotar a un espacio cerrado de las condiciones de temperatura, humedad, calidad del aire y, a veces, presión, para el bienestar o conservación.',
      'El proceso de enfriar un edificio utilizando solo ventilación natural.',
      'La medición de la temperatura exterior para predecir el clima.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Climatización es dar a un espacio cerrado las condiciones de temperatura, humedad relativa, calidad del aire y, a veces, también de presión, necesarias para el bienestar de las personas y/o la conservación de las cosas.'
  },
  {
    id: 'u6q2',
    unit: 6,
    questionText: '¿Cuál de estos factores influye MENOS directamente en el confort térmico humano?',
    options: [
      'Temperatura del aire',
      'Humedad relativa',
      'Velocidad del aire',
      'El color de la pintura de las paredes'
    ],
    correctAnswerIndex: 3,
    explanation: 'El confort térmico depende directamente de factores como la temperatura, humedad, velocidad del aire, nivel de actividad, vestimenta y temperatura radiante. El color de las paredes influye indirectamente (absorción de luz/calor) pero no es un factor primario del confort humano.'
  },
  {
    id: 'u6q3',
    unit: 6,
    questionText: 'La transferencia de calor por "radiación" se caracteriza por:',
    options: [
      'Necesitar contacto directo entre los cuerpos.',
      'Ocurrir únicamente en líquidos.',
      'Transmitirse mediante ondas electromagnéticas, sin necesidad de medio material.',
      'Requerir el movimiento de un fluido (aire o agua).'
    ],
    correctAnswerIndex: 2,
    explanation: 'La radiación es la transferencia de calor mediante ondas electromagnéticas (infrarrojas, por ejemplo) y no necesita un medio material para propagarse (ej. el calor del Sol llega por radiación a través del vacío).'
  },
  {
    id: 'u6q4',
    unit: 6,
    questionText: 'La "psicrometría" es el estudio de:',
    options: [
      'Las propiedades hidráulicas del agua.',
      'La resistencia de los materiales al calor.',
      'Las propiedades del aire húmedo (mezcla de aire seco y vapor de agua).',
      'La velocidad del sonido en diferentes medios.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La psicrometría es el estudio de las propiedades físicas y térmicas del aire atmosférico, considerado como una mezcla de aire seco y vapor de agua.'
  },
  {
    id: 'u6q5',
    unit: 6,
    questionText: 'El "calor latente" está asociado a:',
    options: [
      'El cambio de temperatura del aire sin cambio de humedad.',
      'La energía almacenada en los materiales de construcción.',
      'La radiación solar directa.',
      'El cambio de estado del agua (evaporación/condensación) en el aire, sin cambio de temperatura.'
    ],
    correctAnswerIndex: 3,
    explanation: 'El calor latente es el calor asociado a un cambio de estado (en este caso, del vapor de agua en el aire) a temperatura constante.'
  },
  {
    id: 'u6q6',
    unit: 6,
    questionText: '¿Qué son las "cargas térmicas exteriores" en climatización?',
    options: [
      'El calor generado por las personas y equipos dentro del edificio.',
      'Las ganancias o pérdidas de calor debidas a la diferencia de temperatura con el exterior, la radiación solar y las infiltraciones.',
      'El peso de los equipos de climatización instalados en el exterior.',
      'La potencia eléctrica consumida por la unidad exterior.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las cargas térmicas exteriores se deben a las condiciones climáticas externas, como la transmisión de calor por cerramientos, la radiación solar a través de ventanas y las infiltraciones de aire exterior.'
  },
  {
    id: 'u6q7',
    unit: 6,
    questionText: 'En un sistema de climatización de "Expansión Directa" (DX), ¿qué fluido circula entre la unidad interior y exterior?',
    options: [
      'Agua fría o caliente.',
      'Aire tratado.',
      'Refrigerante.',
      'Aceite térmico.'
    ],
    correctAnswerIndex: 2,
    explanation: 'En los sistemas de Expansión Directa (DX), el fluido refrigerante circula por las tuberías que conectan la unidad interior (evaporador/condensador) y la unidad exterior (condensador/evaporador + compresor).'
  },
  {
    id: 'u6q8',
    unit: 6,
    questionText: 'Un sistema "Multi-Split" se caracteriza por:',
    options: [
      'Utilizar una única unidad interior muy potente.',
      'Tener una unidad exterior que alimenta a varias unidades interiores.',
      'Funcionar exclusivamente con energía solar.',
      'Ser un sistema hidrónico (de agua).'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los sistemas Multi-Split (o multisistema) constan de una única unidad exterior conectada a varias (hasta 5 u 8) unidades interiores, permitiendo climatizar diferentes estancias con un solo equipo exterior.'
  },
  {
    id: 'u6q9',
    unit: 6,
    questionText: '¿Qué es un sistema VRF/VRV?',
    options: [
      'Un tipo de aire acondicionado portátil.',
      'Un sistema de calefacción por radiadores eléctricos.',
      'Un sistema de Expansión Directa de gran capacidad con Volumen de Refrigerante Variable, para climatizar múltiples zonas de forma eficiente.',
      'Un sistema de ventilación con recuperación de calor de alta eficiencia.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los sistemas VRF/VRV (Volumen de Refrigerante Variable) son sistemas de expansión directa centralizados, que permiten conectar un gran número de unidades interiores a una sola unidad exterior, modulando el flujo de refrigerante a cada una para alta eficiencia y control zonal.'
  },
  {
    id: 'u6q10',
    unit: 6,
    questionText: 'En los sistemas de "Expansión Indirecta" o hidrónicos, ¿qué fluido se distribuye a las unidades terminales?',
    options: [
      'Refrigerante a alta presión.',
      'Aire exterior sin tratar.',
      'Agua (fría o caliente) enfriada/calentada por un equipo central.',
      'Vapor de agua.'
    ],
    correctAnswerIndex: 2,
    explanation: 'En los sistemas de Expansión Indirecta (hidrónicos), un equipo central (enfriadora o bomba de calor) enfría o calienta agua, y este agua actúa como fluido caloportador que se distribuye por tuberías a las unidades terminales (fancoils, climatizadores, suelo radiante).'
  },
  {
    id: 'u6q11',
    unit: 6,
    questionText: 'Un "Fancoil" o ventiloconvector es:',
    options: [
      'Un tipo de caldera de gas.',
      'Un conducto de distribución de aire.',
      'Una unidad terminal para sistemas de agua, que consta de batería (intercambiador) y ventilador.',
      'Un filtro de aire de alta eficiencia.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Un Fancoil (ventiloconvector) es una unidad terminal utilizada en sistemas de climatización por agua. Contiene una batería donde el agua intercambia calor con el aire, y un ventilador que impulsa el aire tratado al local.'
  },
  {
    id: 'u6q12',
    unit: 6,
    questionText: 'El RITE (Reglamento de Instalaciones Térmicas en los Edificios) tiene como uno de sus objetivos principales:',
    options: [
      'Establecer los colores de las tuberías.',
      'Regular únicamente el aislamiento térmico de los edificios.',
      'Establecer exigencias de eficiencia energética y seguridad para las instalaciones de climatización, calefacción y ACS.',
      'Fijar los precios de la energía.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El RITE establece las exigencias de eficiencia energética, seguridad, bienestar térmico e higiene que deben cumplir las instalaciones térmicas (climatización, calefacción, ACS) en los edificios.'
  },
  {
    id: 'u6q13',
    unit: 6,
    questionText: '¿Qué función cumplen los "difusores" en un sistema de climatización por aire?',
    options: [
      'Filtrar el aire de retorno.',
      'Generar frío o calor.',
      'Introducir el aire tratado (impulsión) en el local de forma controlada y distribuida.',
      'Regular la humedad del aire.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los difusores son elementos terminales de impulsión (generalmente de techo) que distribuyen el aire tratado en el local, buscando una buena difusión sin generar corrientes molestas.'
  },
  {
    id: 'u6q14',
    unit: 6,
    questionText: 'En el ciclo de refrigeración por compresión, el "compresor" tiene la función de:',
    options: [
      'Enfriar el refrigerante líquido.',
      'Aumentar la presión y temperatura del refrigerante en estado gaseoso.',
      'Expandir el refrigerante para bajar su temperatura.',
      'Absorber calor del exterior.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El compresor succiona el refrigerante gaseoso a baja presión del evaporador y lo comprime, elevando significativamente su presión y temperatura antes de enviarlo al condensador.'
  },
  {
    id: 'u6q15',
    unit: 6,
    questionText: '¿Dónde cede calor el refrigerante al medio exterior en un ciclo de refrigeración?',
    options: [
      'En el evaporador.',
      'En la válvula de expansión.',
      'En el compresor.',
      'En el condensador.'
    ],
    correctAnswerIndex: 3,
    explanation: 'El condensador es el intercambiador de calor donde el refrigerante (a alta presión y temperatura) cede calor al medio exterior (aire o agua) y pasa de estado gaseoso a líquido.'
  },
  {
    id: 'u6q16',
    unit: 6,
    questionText: 'Una "bomba de calor" es un equipo que puede:',
    options: [
      'Solo generar frío.',
      'Solo generar calor.',
      'Proporcionar tanto frío como calor invirtiendo el ciclo de refrigeración.',
      'Bombear agua caliente únicamente.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una bomba de calor es una máquina térmica que puede invertir su ciclo de funcionamiento para proporcionar tanto refrigeración (extrayendo calor del interior) como calefacción (extrayendo calor del exterior y cediéndolo al interior).'
  },
  {
    id: 'u6q17',
    unit: 6,
    questionText: '¿Qué es el "punto de rocío"?',
    options: [
      'La temperatura a la que hierve el agua a presión atmosférica.',
      'La temperatura más baja que puede alcanzar el aire exterior.',
      'La temperatura a la cual el aire se satura de vapor de agua (100% humedad relativa) y comienza a condensar.',
      'El punto donde se mide la velocidad del aire en un conducto.'
    ],
    correctAnswerIndex: 2,
    explanation: 'El punto de rocío es la temperatura a la que debe enfriarse una masa de aire, a presión constante, para que el vapor de agua que contiene comience a condensarse.'
  },
  {
    id: 'u6q18',
    unit: 6,
    questionText: 'El Documento Básico HE 1 del CTE se enfoca en:',
    options: [
      'El rendimiento de las calderas.',
      'La limitación de la demanda energética del edificio a través de su envolvente térmica.',
      'El uso de energías renovables.',
      'La protección contra el ruido.'
    ],
    correctAnswerIndex: 1,
    explanation: 'El DB HE 1 "Limitación de demanda energética" establece las exigencias sobre las características térmicas de la envolvente del edificio (aislamiento, puentes térmicos, control solar) para reducir sus necesidades de calefacción y refrigeración.'
  },
  {
    id: 'u6q19',
    unit: 6,
    questionText: '¿Cuál de estos NO es un tipo común de unidad interior en sistemas Split o Multi-Split?',
    options: [
      'Split de pared',
      'Cassette de techo',
      'Conductos (oculto en falso techo)',
      'Enfriadora de agua'
    ],
    correctAnswerIndex: 3,
    explanation: 'Las unidades interiores comunes en sistemas de expansión directa (Split, Multi-Split, VRF) son las de pared, cassette, conductos, suelo/techo. Una enfriadora de agua es un equipo central de producción para sistemas hidrónicos (expansión indirecta).'
  },
  {
    id: 'u6q20',
    unit: 6,
    questionText: '¿Qué es una UTA (Unidad de Tratamiento de Aire)?',
    options: [
      'Un termostato ambiente avanzado.',
      'Un equipo compacto tipo Rooftop.',
      'Un equipo modular que trata grandes volúmenes de aire (filtra, enfría/calienta, humecta/deshumecta, ventila).',
      'Una válvula de control para sistemas VRF.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Una UTA o Climatizador es un equipo, generalmente modular, diseñado para tratar grandes caudales de aire, realizando funciones como filtrado, calentamiento, enfriamiento, humidificación, deshumidificación y mezcla con aire exterior.'
  },
  {
    id: 'u6q21',
    unit: 6,
    questionText: 'La velocidad del aire interior debe controlarse en climatización para:',
    options: [
      'Maximizar el ruido del sistema.',
      'Asegurar que el aire llegue lo más rápido posible.',
      'Evitar corrientes de aire molestas para los ocupantes.',
      'Facilitar la condensación en las rejillas.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La velocidad del aire en la zona ocupada debe mantenerse baja (típicamente < 0.2 m/s) para evitar la sensación de corriente de aire, que puede causar disconfort térmico.'
  },
  {
    id: 'u6q22',
    unit: 6,
    questionText: '¿Cuál de estos es un ejemplo de "carga térmica interior" en verano?',
    options: [
      'El calor que entra por una ventana cerrada debido a la diferencia de temperatura.',
      'El calor generado por los ordenadores encendidos en una oficina.',
      'El frío que entra por infiltraciones de aire.',
      'La radiación solar que incide sobre la fachada opaca.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Las cargas térmicas interiores son las ganancias de calor generadas dentro del propio espacio, como el calor desprendido por las personas, la iluminación y los equipos (ej. ordenadores).'
  },
  {
    id: 'u6q23',
    unit: 6,
    questionText: 'Un sistema Rooftop es un equipo de climatización que se caracteriza por:',
    options: [
      'Instalarse exclusivamente en el sótano.',
      'Ser una unidad compacta "todo en uno" que se instala típicamente en la cubierta.',
      'Utilizar agua como refrigerante.',
      'Ser muy pequeño y portátil.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Un sistema Rooftop es un equipo compacto autónomo aire-aire que incluye todos los componentes (compresor, evaporador, condensador, ventiladores, filtros, a veces quemador de gas) en una sola carcasa, diseñado para instalarse en el exterior, comúnmente en cubiertas.'
  },
  {
    id: 'u6q24',
    unit: 6,
    questionText: 'Los conductos de distribución de aire en climatización pueden ser fabricados de:',
    options: [
      'Únicamente tubería de cobre.',
      'Solo manguera flexible de plástico.',
      'Chapa metálica, fibra de vidrio o materiales flexibles específicos.',
      'Ladrillo refractario.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los conductos de aire se fabrican comúnmente de chapa de acero galvanizado, paneles rígidos de fibra de vidrio o materiales plásticos flexibles (para conexiones finales).'
  },
  {
    id: 'u6q25',
    unit: 6,
    questionText: '¿Qué función tienen los filtros en una Unidad de Tratamiento de Aire (UTA)?',
    options: [
      'Aumentar la humedad del aire.',
      'Enfriar el aire por evaporación.',
      'Retener partículas (polvo, polen, etc.) del aire para mejorar la calidad y proteger los equipos.',
      'Regular el caudal de aire.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los filtros son esenciales para retener partículas sólidas presentes en el aire, mejorando la calidad del aire interior y protegiendo los componentes del sistema (baterías, ventiladores) de la suciedad.'
  },
  {
    id: 'u6q26',
    unit: 6,
    questionText: 'Un sistema de climatización hidrónico utiliza ______ como fluido caloportador.',
    options: [
      'Aire',
      'Refrigerante R-410A',
      'Agua',
      'Nitrógeno'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los sistemas hidrónicos o de expansión indirecta utilizan agua (enfriada o calentada por un equipo central) como fluido caloportador para transportar la energía térmica a las unidades terminales.'
  },
  {
    id: 'u6q27',
    unit: 6,
    questionText: 'El "efecto Joule" en una instalación eléctrica (pérdida de energía en forma de calor en los cables) es una fuente de carga térmica:',
    options: [
      'Exterior y latente.',
      'Interior y latente.',
      'Exterior y sensible.',
      'Interior y sensible.'
    ],
    correctAnswerIndex: 3,
    explanation: 'El calor disipado por los cables eléctricos y equipos (motores, iluminación) debido a su funcionamiento es una ganancia de calor interna y sensible (aumenta la temperatura del aire).'
  },
  {
    id: 'u6q28',
    unit: 6,
    questionText: '¿Qué indica una alta "inercia térmica" en los cerramientos de un edificio?',
    options: [
      'Que el calor atraviesa los muros muy rápidamente.',
      'Que los muros son muy ligeros y delgados.',
      'Que los materiales tienen gran capacidad para almacenar calor y amortiguar las variaciones de temperatura.',
      'Que el edificio está mal aislado.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La inercia térmica es la capacidad de los materiales para almacenar energía térmica. Una alta inercia ayuda a estabilizar la temperatura interior, retardando y amortiguando los efectos de las variaciones exteriores.'
  },
  {
    id: 'u6q29',
    unit: 6,
    questionText: '¿Cuál es la función de la "válvula de expansión" en un ciclo de refrigeración?',
    options: [
      'Comprimir el refrigerante gaseoso.',
      'Condensar el refrigerante cediendo calor.',
      'Reducir bruscamente la presión y temperatura del refrigerante líquido antes del evaporador.',
      'Permitir el paso del refrigerante solo en una dirección.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La válvula de expansión produce una caída brusca de presión en el refrigerante líquido que viene del condensador, lo que provoca una bajada de su temperatura y lo prepara para evaporarse absorbiendo calor en el evaporador.'
  },
  {
    id: 'u6q30',
    unit: 6,
    questionText: 'Los refrigerantes HFC (Hidrofluorocarbonos), aunque no dañan la capa de ozono, presentan el inconveniente de:',
    options: [
      'Ser altamente tóxicos.',
      'Ser muy inflamables.',
      'Tener un alto Potencial de Calentamiento Atmosférico (PCA/GWP).',
      'Ser extremadamente caros e ineficientes.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los refrigerantes HFC sustituyeron a los CFC/HCFC porque no dañan la capa de ozono, pero contribuyen significativamente al efecto invernadero debido a su alto Potencial de Calentamiento Atmosférico (PCA o GWP).'
  },
  {
    id: 'u6q31',
    unit: 6,
    questionText: 'En la fórmula simplificada de transmisión de calor Q = U · A · ΔT, ¿qué representa "U"?',
    options: [
      'La diferencia de temperatura.',
      'El área de transferencia.',
      'El coeficiente global de transferencia de calor del elemento.',
      'El flujo de calor total.'
    ],
    correctAnswerIndex: 2,
    explanation: 'U representa el coeficiente global de transferencia de calor (o transmitancia térmica), que mide la facilidad con la que el calor atraviesa un elemento constructivo por unidad de área y diferencia de temperatura (W/m²K).'
  },
  {
    id: 'u6q32',
    unit: 6,
    questionText: '¿Qué tipo de sistema de climatización sería más adecuado para un gran edificio de oficinas con necesidad de control individual por despacho?',
    options: [
      'Un split 1x1 de pared.',
      'Varios equipos portátiles.',
      'Un sistema VRF/VRV o un sistema hidrónico con fancoils.',
      'Un sistema de calefacción por radiadores eléctricos únicamente.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Para grandes edificios con múltiples zonas y necesidad de control individual y eficiencia, los sistemas VRF/VRV (expansión directa) o los sistemas hidrónicos con fancoils (expansión indirecta) son las soluciones más adecuadas.'
  },
  {
    id: 'u6q33',
    unit: 6,
    questionText: 'Los "Dampers" o compuertas de regulación en conductos de aire sirven para:',
    options: [
      'Filtrar el aire.',
      'Reducir el ruido del ventilador.',
      'Ajustar o cerrar el paso del caudal de aire.',
      'Medir la temperatura del aire.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Los dampers son compuertas móviles instaladas en los conductos o rejillas que permiten regular el volumen de aire que pasa por ellos, equilibrando la instalación o cerrando el flujo.'
  },
  {
    id: 'u6q34',
    unit: 6,
    questionText: '¿Cuál es el rango de humedad relativa generalmente aceptado para el confort térmico según el RITE?',
    options: [
      '0% - 20%',
      '20% - 40%',
      '40% - 60% (o 45-60% en verano / 40-50% en invierno)',
      '80% - 100%'
    ],
    correctAnswerIndex: 2,
    explanation: 'El RITE establece rangos de humedad relativa operativa para confort, que suelen estar entre el 40% y el 60% (más específicamente, 45-60% en verano y 40-50% en invierno según método simplificado).'
  },
  {
    id: 'u6q35',
    unit: 6,
    questionText: 'La "cámara de mezcla" en una UTA permite:',
    options: [
      'Mezclar diferentes tipos de refrigerantes.',
      'Mezclar el aire de retorno del local con aire exterior antes de tratarlo.',
      'Aumentar la presión del aire de impulsión.',
      'Enfriar el aire mediante la mezcla con agua pulverizada.'
    ],
    correctAnswerIndex: 1,
    explanation: 'La cámara de mezcla es una sección de la Unidad de Tratamiento de Aire (UTA) donde se controla la proporción de aire de retorno del local y aire fresco exterior que se mezclan antes de pasar por las etapas de tratamiento (filtros, baterías).'
  },
  {
    id: 'u6q36',
    unit: 6,
    questionText: '¿Qué ventaja presenta un sistema "Aire-Agua" frente a un "Agua-Agua" en enfriadoras o bombas de calor?',
    options: [
      'Es siempre más eficiente energéticamente.',
      'No necesita una torre de refrigeración o circuito de agua externo para disipar/captar calor.',
      'Puede funcionar a temperaturas más extremas.',
      'Es mucho más silencioso.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Los sistemas Aire-Agua intercambian calor directamente con el aire ambiente exterior a través de baterías aleteadas y ventiladores, eliminando la necesidad de un circuito secundario de agua con torres de refrigeración, sondeos geotérmicos, etc., que sí requieren los sistemas Agua-Agua.'
  },
  {
    id: 'u6q37',
    unit: 6,
    questionText: '¿Cuál de estos elementos es fundamental para el funcionamiento de una bomba de calor en modo calefacción cuando la temperatura exterior es baja?',
    options: [
      'El evaporador (unidad exterior), que absorbe calor del aire frío exterior.',
      'El condensador (unidad interior), que absorbe calor del interior.',
      'Un quemador de gas auxiliar.',
      'Un depósito de agua caliente adicional.'
    ],
    correctAnswerIndex: 0,
    explanation: 'En modo calefacción, la bomba de calor invierte el ciclo: el evaporador (unidad exterior) extrae calor del aire exterior (incluso si está frío, ya que contiene energía térmica por encima del cero absoluto) y el condensador (unidad interior) cede ese calor al interior.'
  },
  {
    id: 'u6q38',
    unit: 6,
    questionText: 'La UNE-EN ISO 7730 es una norma relevante para:',
    options: [
      'El cálculo de cargas térmicas.',
      'La clasificación de filtros de aire.',
      'La ergonomía del ambiente térmico y la determinación del confort (índices PMV y PPD).',
      'El diseño de conductos de aire.'
    ],
    correctAnswerIndex: 2,
    explanation: 'La norma UNE-EN ISO 7730 trata sobre la ergonomía del ambiente térmico y proporciona métodos para predecir la sensación térmica general y el grado de insatisfacción (índices PMV y PPD) de las personas expuestas a ambientes térmicos moderados.'
  },
  {
    id: 'u6q39',
    unit: 6,
    questionText: '¿Qué se busca minimizar al seleccionar un fluido refrigerante en la actualidad, además de la eficiencia?',
    options: [
      'Su capacidad para absorber calor.',
      'Su temperatura de ebullición.',
      'Su impacto ambiental (Potencial de Agotamiento de Ozono - PAO y Potencial de Calentamiento Atmosférico - PCA).',
      'Su densidad en estado líquido.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Debido a la normativa ambiental, la selección de refrigerantes busca minimizar su impacto, prefiriendo aquellos con bajo o nulo PAO (ODP) y bajo PCA (GWP).'
  },
  {
    id: 'u6q40',
    unit: 6,
    questionText: '¿Qué tipo de calor generan principalmente las personas en un ambiente?',
    options: [
      'Solo calor sensible (aumento de temperatura del aire).',
      'Solo calor latente (vapor de agua por respiración/sudoración).',
      'Tanto calor sensible como calor latente.',
      'Ningún tipo de calor relevante para la climatización.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Las personas generan tanto calor sensible (por su metabolismo y convección/radiación) como calor latente (por la evaporación del sudor y la humedad de la respiración), ambos deben ser considerados en el cálculo de cargas térmicas.'
  }
];
