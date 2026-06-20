export const navigation = [
  { label: "Soluciones", id: "soluciones" },
  { label: "Repuestos", id: "repuestos" },
  { label: "Nosotros", id: "empresa" },
  { label: "Ubicación", id: "ubicacion" },
  { label: "Contacto", id: "contacto" },
];

export const tickerItems = [
  "ENTREGA EN EL DÍA",
  "CUENTA CORRIENTE",
  "ENVÍOS A TODO EL PAÍS",
  "GARANTÍA DE FÁBRICA",
];

export const benefits = [
  {
    icon: "⚡",
    title: "Entrega en el día",
    text: "Respuesta ágil en Zona Sur y una red de envíos para llegar a todo el país.",
  },
  {
    icon: "◎",
    title: "Cuenta corriente",
    text: "Condiciones comerciales pensadas para simplificar las compras de tu empresa.",
  },
  {
    icon: "✓",
    title: "Stock + garantía",
    text: "Amplia disponibilidad, más de 30 proveedores y garantía oficial de fábrica.",
  },
  {
    icon: "↗",
    title: "Asesoramiento real",
    text: "Te ayudamos a identificar la pieza exacta para comprar bien desde el primer contacto.",
  },
];

export const categories = [
  {
    title: "Service y mantenimiento",
    text: "Filtros, aceites, correas, tensores y consumibles.",
  },
  {
    title: "Refrigeración",
    text: "Radiadores, electroventiladores y componentes.",
  },
  {
    title: "Tren delantero",
    text: "Suspensión, dirección y piezas para un andar seguro.",
  },
  {
    title: "Ópticas y accesorios",
    text: "Iluminación, limpiaparabrisas y accesorios.",
  },
];

export const stats = [
  { value: 30, suffix: "+", label: "Años de experiencia" },
  { value: 150, suffix: "+", label: "Clientes que confían" },
  { value: 30, suffix: "+", label: "Proveedores" },
  { value: 24, suffix: "h", label: "Respuesta ágil", animated: false },
];

export const steps = [
  { title: "Nos contás qué necesitás", text: "Por WhatsApp, email o llamada." },
  { title: "Lo resolvemos", text: "Identificamos, cotizamos y preparamos." },
  { title: "Te lo enviamos", text: "A tu empresa, estés donde estés." },
];

export const contact = {
  phone: "5491162590906",
  phoneHref: "tel:+541162590906",
  phoneLabel: "11 6259 0906",
  email: "electrosur_2000@hotmail.com",
  instagram: "@electrosur.encendido",
  instagramUrl: "https://www.instagram.com/electrosur.encendido/",
  defaultMessage: "Hola ElectroSur, quiero hacer una consulta.",
};

export const location = {
  address: "Av. 7 N.º 1502",
  city: "Berazategui, Buenos Aires",
  country: "Argentina",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Av.%207%201502%2C%20Berazategui%2C%20Buenos%20Aires%2C%20Argentina&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.%207%201502%2C%20Berazategui%2C%20Buenos%20Aires%2C%20Argentina",
  hours: [
    { days: "Lunes a viernes", time: "08:00 — 18:00" },
    { days: "Sábados", time: "08:00 — 14:00" },
    { days: "Domingos", time: "Cerrado" },
  ],
};

export const ignitionProducts = [
  { number: "01", title: "Reguladores", text: "Control preciso de tensión para proteger cada sistema eléctrico.", detailsKey: "regulators" },
  { number: "02", title: "Plaquetas", text: "Módulos y plaquetas electrónicas para alternadores y encendido.", detailsKey: "plates" },
  { number: "04", title: "Bobinas", text: "Bobinas individuales, módulos y conjuntos para múltiples motorizaciones.", detailsKey: "coils" },
  { number: "05", title: "Inyectores", text: "Inyectores, o-rings, microfiltros y componentes de alimentación.", detailsKey: "injectors" },
  { number: "06", title: "Bujías y cables", text: "Encendido eficiente con opciones para flotas livianas y utilitarios.", detailsKey: "sparkPlugsWires" },
  { number: "07", title: "Sensores", text: "Cigüeñal, árbol de levas, temperatura, presión y más.", detailsKey: "sensors" },
  { number: "08", title: "Fichas y conectores", text: "Fichas nacionales e importadas para resolver conexiones específicas." },
  { number: "09", title: "Alternadores", text: "Alternadores y componentes eléctricos con respaldo de fábrica." },
  { number: "10", title: "Baterías", text: "Energía confiable y asesoramiento según el uso real de cada unidad." },
  { number: "11", title: "Encendido electrónico", text: "Módulos, distribuidores y componentes de gestión de encendido." },
  { number: "12", title: "Arranques", text: "Automáticos, carbones, bendix y componentes del sistema de arranque." },
  ]

export const ignitionBrands = [
  "BOSCH",
  "HELLUX",
  "FISPA",
  "PARTSON",
  "HITNA",
  "DZE",
  "NOSSO",
  "ESTRADA",
  "TAMATEL",
  "ORO",
  "NGK",
  "BELU",
  "GENOUD",
  "FERRAZI",
  "ALFECAR",
];

export const ignitionProductDetails = {
  regulators: {
    ariaLabel: "Información sobre reguladores",
    image: "/assets/regulators.png",
    imageAlt: "Diferentes modelos de reguladores de alternador",
    imageLabel: "Regulación precisa",
    eyebrow: "CONTROL DEL SISTEMA DE CARGA",
    title: "El equilibrio entre carga, batería y electrónica.",
    description:
      "El regulador administra la corriente de excitación del alternador para mantener una tensión estable mientras cambian las revoluciones y el consumo eléctrico. Una aplicación incorrecta puede afectar la batería, la iluminación y los módulos electrónicos de la unidad.",
    brands: ["Estrada", "Tamatel", "Nosso"],
    types: [
      "Reguladores incorporados al alternador",
      "Reguladores externos",
      "Con portaescobillas integrado",
      "Sistemas comandados por ECU",
    ],
    symptoms: [
      "Testigo de batería encendido o intermitente",
      "Luces que aumentan o disminuyen de intensidad",
      "Batería que se descarga con frecuencia",
      "Sobrecarga, olor a batería o fallas electrónicas",
      "Tensión inestable al variar las revoluciones",
    ],
    identification: [
      "Marca, modelo, año y motorización",
      "Marca y número del alternador",
      "Foto clara del regulador o del alternador",
      "Código o número grabado en la pieza",
    ],
    consultation: "Hola ElectroSur, quiero consultar por un regulador para una unidad de nuestra flota.",
    consultationLabel: "Consultar un regulador",
  },
  plates: {
    ariaLabel: "Información sobre plaquetas de alternador",
    image: "/assets/rectifier-plates.png",
    imageAlt: "Diferentes modelos de plaquetas rectificadoras para alternadores",
    imageLabel: "Rectificación confiable",
    eyebrow: "CONVERSIÓN Y DISTRIBUCIÓN DE CORRIENTE",
    title: "La pieza que convierte la energía del alternador.",
    description:
      "Las plaquetas rectificadoras transforman la corriente alterna generada por el alternador en corriente continua para alimentar el vehículo y cargar la batería. Su correcta aplicación es clave para evitar carga deficiente, fluctuaciones y daños en otros componentes eléctricos.",
    brands: ["Nosso", "Estrada","Genoud", "Tamatel"],
    types: [
      "Plaquetas rectificadoras positivas y negativas",
      "Con diodos de potencia integrados",
      "Con regulador o disipador incorporado",
      "Aplicaciones para alternadores compactos y convencionales",
    ],
    symptoms: [
      "Testigo de batería encendido",
      "Carga baja o intermitente",
      "Descarga de batería con el vehículo detenido",
      "Zumbidos o interferencias eléctricas",
      "Diodos recalentados o componentes quemados",
    ],
    identification: [
      "Marca, modelo, año y motorización",
      "Marca y número del alternador",
      "Cantidad y posición de terminales",
      "Foto frontal y código grabado en la plaqueta",
    ],
    consultation: "Hola ElectroSur, quiero consultar por una plaqueta para el alternador de una unidad de nuestra flota.",
    consultationLabel: "Consultar una plaqueta",
  },
  coils: {
    ariaLabel: "Información sobre bobinas de encendido",
    image: "/assets/ignition-coils.png",
    imageAlt: "Diferentes modelos de bobinas de encendido automotriz",
    imageLabel: "Chispa eficiente",
    eyebrow: "ALTA TENSIÓN PARA CADA CILINDRO",
    title: "La energía que inicia cada combustión.",
    description:
      "La bobina transforma la tensión de la batería en el alto voltaje necesario para producir la chispa en las bujías. Una bobina adecuada y en buen estado ayuda a mantener un encendido parejo, mejor respuesta del motor y un consumo controlado en cada unidad de la flota.",
    brands: ["Bosch", "Hellux", "Partson","Hitna","Fispa", "DZE"],
    types: [
      "Bobinas individuales tipo lápiz",
      "Módulos de bobinas múltiples",
      "Bobinas con cable de alta tensión",
      "Sistemas con módulo electrónico integrado",
    ],
    symptoms: [
      "Motor inestable o fallas de encendido",
      "Pérdida de potencia al acelerar",
      "Aumento del consumo de combustible",
      "Dificultad para arrancar",
      "Testigo de motor encendido",
    ],
    identification: [
      "Marca, modelo, año y motorización",
      "Cantidad de cilindros y tipo de bobina",
      "Foto del conector y puntos de fijación",
      "Código o número grabado en la pieza",
    ],
    consultation: "Hola ElectroSur, quiero consultar por una bobina de encendido para una unidad de nuestra flota.",
    consultationLabel: "Consultar una bobina",
  },
  injectors: {
    ariaLabel: "Información sobre inyectores de combustible",
    image: "/assets/fuel-injectors.png",
    imageAlt: "Diferentes modelos de inyectores de combustible automotriz",
    imageLabel: "Dosificación precisa",
    eyebrow: "COMBUSTIBLE EN EL MOMENTO EXACTO",
    title: "Precisión que se traduce en rendimiento.",
    description:
      "Los inyectores dosifican y pulverizan el combustible que necesita cada cilindro. Su caudal, patrón de pulverización y respuesta eléctrica deben mantenerse equilibrados para lograr una combustión eficiente, reducir el consumo y evitar fallas en las unidades de la flota.",
    brands: ["Bosch", "Hellux", "Partson","Hitna","Fispa", "DZE"],
    types: [
      "Inyectores de nafta multipunto",
      "Inyectores de inyección directa",
      "Inyectores para sistemas diésel",
      "Componentes, o-rings y microfiltros",
    ],
    symptoms: [
      "Motor inestable o tironeos",
      "Aumento del consumo de combustible",
      "Dificultad de arranque en frío o caliente",
      "Pérdida de potencia y mala aceleración",
      "Humo, olor a combustible o fallas registradas",
    ],
    identification: [
      "Marca, modelo, año y motorización",
      "Tipo de combustible y sistema de inyección",
      "Foto del inyector y su conector",
      "Código o número grabado en la pieza",
    ],
    consultation: "Hola ElectroSur, quiero consultar por inyectores para una unidad de nuestra flota. También quisiera saber si necesita limpieza o reemplazo.",
    consultationLabel: "Consultar inyectores",
  },
  sparkPlugsWires: {
    ariaLabel: "Información sobre bujías y cables de encendido",
    image: "/assets/spark-plugs-wires.png",
    imageAlt: "Diferentes modelos de bujías y cables de encendido automotriz",
    imageLabel: "Chispa bien conducida",
    eyebrow: "ENCENDIDO DESDE LA BOBINA HASTA LA CÁMARA",
    title: "Una chispa firme en cada ciclo.",
    description:
      "Las bujías producen la chispa que inicia la combustión y los cables transportan la alta tensión desde la bobina sin pérdidas. Elegir el grado térmico, la resistencia y las conexiones correctas ayuda a sostener un encendido parejo, proteger otros componentes y mantener el rendimiento de la unidad.",
    brands: ["NGK", "Belu", "Genoud", "Ferrazi", "Bosch"],
    types: [
      "Bujías convencionales, resistivas y especiales",
      "Opciones de platino e iridio",
      "Juegos de cables antiparasitarios",
      "Terminales rectos, angulares y aplicaciones específicas",
    ],
    symptoms: [
      "Fallas de encendido o tironeos",
      "Dificultad para arrancar",
      "Pérdida de potencia al acelerar",
      "Consumo elevado de combustible",
      "Aisladores dañados, cables cuarteados o fugas de tensión",
    ],
    identification: [
      "Marca, modelo, año y motorización",
      "Código actual de la bujía",
      "Cantidad de cilindros y largo de los cables",
      "Foto de terminales, conectores y pieza instalada",
    ],
    consultation: "Hola ElectroSur, quiero consultar por bujías y cables de encendido para una unidad de nuestra flota.",
    consultationLabel: "Consultar bujías y cables",
  },
  sensors: {
    ariaLabel: "Información sobre sensores automotrices",
    image: "/assets/automotive-sensors.png",
    imageAlt: "Diferentes modelos de sensores automotrices",
    imageLabel: "Lectura precisa",
    eyebrow: "INFORMACIÓN PARA CADA DECISIÓN DEL MOTOR",
    title: "Datos confiables para que todo funcione.",
    description:
      "Los sensores registran variables fundamentales como posición, temperatura, presión, velocidad y composición de gases. Esa información permite que la gestión electrónica ajuste encendido, inyección y otros sistemas; una lectura incorrecta puede afectar el rendimiento completo de la unidad.",
    brands: ["Partson", "Bosch", "Hellux", "Alfecar", "Nosso"],
    types: [
      "Sensores de cigüeñal y árbol de levas",
      "Sensores de presión, temperatura y posición",
      "Caudalímetros y sensores de oxígeno",
      "Sensores de velocidad, ABS y estacionamiento",
    ],
    symptoms: [
      "Testigo de motor o ABS encendido",
      "Arranque difícil o motor que se detiene",
      "Consumo elevado y respuesta irregular",
      "Lecturas erróneas de temperatura o velocidad",
      "Códigos de falla intermitentes",
    ],
    identification: [
      "Marca, modelo, año y motorización",
      "Función o ubicación del sensor",
      "Foto del conector y puntos de fijación",
      "Código o número grabado en la pieza",
    ],
    consultation: "Hola ElectroSur, quiero consultar por un sensor para una unidad de nuestra flota.",
    consultationLabel: "Consultar un sensor",
  },
};
