const tiramisu = {
  id: 1,
  imagen: ["postres/tiramisu/tiramisuFront.webp", "postres/tiramisu/tira1.webp", "postres/tiramisu/tira2.webp"],
  nombre: "Tiramisú",
  descripcionBreve: "Clásico postre italiano frío con capas de café y crema suave.",
  descripcionLarga: "El tiramisú es un elegante postre italiano en capas...",
  ingredientes: ["Queso mascarpone", "café", "bizcochos", "cacao", "huevo"],
  precio: 550,
  categorias: ["Café", "Chocolate", "Suave"],
  aptoCeliacos: false,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 250 },
    { size: 20, precio: 450 }
  ]
};

const cheesecakeFrutilla = {
  id: 2,
  imagen: ["postres/cheesecake/cheesecakeFront.webp", "postres/cheesecake/cheese1.webp", "postres/cheesecake/cheese2.webp"],
  nombre: "Cheesecake de Frutilla",
  descripcionBreve: "Tarta cremosa de queso con base de galletitas...",
  descripcionLarga: "Este cheesecake combina una base crocante...",
  ingredientes: ["Queso crema", "galletitas", "manteca", "frutillas", "azúcar"],
  precio: 700,
  categorias: ["Frutal", "Suave"],
  aptoCeliacos: false,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 350 },
    { size: 20, precio: 600 }
  ]
};

const brownieNuez = {
  id: 3,
  imagen: ["postres/brownie/brownieFront.webp", "postres/brownie/brownie1.webp", "postres/brownie/brownie2.webp"],
  nombre: "Brownie con nuez",
  descripcionBreve: "Bizcochuelo de chocolate intenso con trozos de nuez.",
  descripcionLarga: "Este brownie es denso, húmedo y con un sabor intenso a chocolate...",
  ingredientes: ["Chocolate", "manteca", "azúcar", "huevo", "nueces", "harina"],
  precio: 350,
  categorias: ["Chocolate", "Crocante"],
  aptoCeliacos: false,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 200 },
    { size: 20, precio: 300 }
  ]
};

const flanCasero = {
  id: 4,
  imagen: ["postres/flan/flanFront.webp", "postres/flan/flan1.webp", "postres/flan/flan2.webp"],
  nombre: "Flan casero",
  descripcionBreve: "Postre suave de huevo y leche con caramelo.",
  descripcionLarga: "El flan casero es un postre tradicional que se destaca...",
  ingredientes: ["Huevo", "leche", "azúcar", "esencia de vainilla"],
  precio: 250,
  categorias: ["Caramelo", "Suave"],
  aptoCeliacos: true,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 150 },
    { size: 20, precio: 220 }
  ]
};

const mousseChocolate = {
  id: 5,
  imagen: ["postres/mousseChocolate/moussechocolateFront.webp", "postres/mousseChocolate/mousse1.webp", "postres/mousseChocolate/mousse2.webp"],
  nombre: "Mousse de chocolate",
  descripcionBreve: "Espuma de chocolate aireada y cremosa.",
  descripcionLarga: "El mousse de chocolate es un postre elegante...",
  ingredientes: ["Chocolate", "crema", "azúcar", "huevo"],
  precio: 150,
  categorias: ["Chocolate", "Suave"],
  aptoCeliacos: true,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 100 },
    { size: 20, precio: 140 }
  ]
};

const tartaManzana = {
  id: 6,
  imagen: ["postres/tartaDeManzana/tartademanzanaFront.webp", "postres/tartaDeManzana/tarta1.webp", "postres/tartaDeManzana/tarta2.jpg"],
  nombre: "Tarta de manzana",
  descripcionBreve: "Tarta horneada con manzanas frescas y un toque de canela.",
  descripcionLarga: "Esta tarta combina una base crocante con un relleno de manzanas...",
  ingredientes: ["Manzana", "harina", "manteca", "azúcar", "canela"],
  precio: 300,
  categorias: ["Frutal", "Crocante"],
  aptoCeliacos: false,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 180 },
    { size: 20, precio: 270 }
  ]
};

const crumbleFrutosRojos = {
  id: 7,
  imagen: ["postres/crumbleFrutosRojos/crumbleFront.webp", "postres/crumbleFrutosRojos/crumbl1.webp", "postres/crumbleFrutosRojos/crumbl2.webp"],
  nombre: "Crumble de frutos rojos",
  descripcionBreve: "Frutas horneadas con una cobertura crocante de harina y manteca.",
  descripcionLarga: "Este crumble combina frutos rojos jugosos y ácidos...",
  ingredientes: ["Frutos rojos", "harina", "manteca", "azúcar"],
  precio: 450,
  categorias: ["Frutal", "Crocante"],
  aptoCeliacos: false,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 250 },
    { size: 20, precio: 400 }
  ]
};

const tartaFrutasVegana = {
  id: 8,
  imagen: ["postres/tartaVegana/tartaveganaFront.webp", "postres/tartaVegana/tarta1.webp", "postres/tartaVegana/tarta2.webp"],
  nombre: "Tarta vegana de frutas frescas",
  descripcionBreve: "Base crujiente de frutos secos con crema vegetal y frutas de estación.",
  descripcionLarga: "Esta tarta vegana destaca por su base sin harina...",
  ingredientes: ["Avena", "nueces", "leche vegetal", "almidón de maíz", "vainilla", "frutas frescas"],
  precio: 500,
  categorias: ["Frutal", "Crocante"],
  aptoCeliacos: true,
  aptoVeganos: true,
  opciones: [
    { size: 10, precio: 300 },
    { size: 20, precio: 450 }
  ]
};

const lemonPie = {
  id: 9,
  imagen: ["postres/lemonPie/lemonpieFront.webp", "postres/lemonPie/lemon1.webp", "postres/lemonPie/lemon2.webp"],
  nombre: "Lemon Pie",
  descripcionBreve: "Tarta con base de masa, relleno de crema de limón y cobertura de merengue.",
  descripcionLarga: "Este lemon pie ofrece un equilibrio perfecto entre la acidez del limón...",
  ingredientes: ["Harina", "manteca", "huevo", "limón", "azúcar", "fécula de maíz"],
  precio: 450,
  categorias: ["Frutal", "Crocante"],
  aptoCeliacos: false,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 250 },
    { size: 20, precio: 400 }
  ]
};

const chaja = {
  id: 10,
  imagen: ["postres/chaja/chajaFront.webp", "postres/chaja/chaja1.webp", "postres/chaja/chaja2.webp"],
  nombre: "Chajá",
  descripcionBreve: "Postre uruguayo con capas de merengue, crema, bizcochuelo y duraznos.",
  descripcionLarga: "El chajá es un postre típico del Uruguay...",
  ingredientes: ["Merengue", "bizcochuelo", "crema", "duraznos", "dulce de leche"],
  precio: 350,
  categorias: ["Frutal", "Suave"],
  aptoCeliacos: false,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 200 },
    { size: 20, precio: 300 }
  ]
};

const mousseVainilla = {
  id: 11,
  imagen: ["postres/mouseVainilla/mousevainillaFront.webp", "postres/mouseVainilla/mousse1.webp", "postres/mouseVainilla/mousse2.webp"],
  nombre: "Mousse de Vainilla",
  descripcionBreve: "Espuma de Vainilla aireada y cremosa.",
  descripcionLarga: "El mousse de Vainilla es un postre elegante, liviano y cremoso...",
  ingredientes: ["Vainilla", "crema", "azúcar", "huevo"],
  precio: 150,
  categorias: ["Suave", "Caramelo"],
  aptoCeliacos: true,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 100 },
    { size: 20, precio: 140 }
  ]
};
const pannaCottaVegana = {
  id: 12,
  imagen: ["postres/pannacotta/pannacottaveganaFront.webp", "postres/pannacotta/panacotta1.webp", "postres/pannacotta/panacotta2.webp"],
  nombre: "Panna cotta de coco y caramelo (vegana)",
  descripcionBreve: "Postre suave y cremoso con caramelo vegano.",
  descripcionLarga: "Panna cotta vegetal hecha con leche de coco, agar agar y caramelo natural.",
  ingredientes: ["Leche de coco", "agar agar", "caramelo de dátiles", "vainilla"],
  precio: 480,
  categorias: ["Caramelo", "Suave"],
  aptoCeliacos: true,
  aptoVeganos: true,
  opciones: [
    { size: 10, precio: 280 },
    { size: 20, precio: 430 }
  ]
};

const rocksChocolateSinGluten = {
  id: 13,
  imagen: ["postres/rocksChocolate/rockschocolateFront.webp", "postres/rocksChocolate/trufa1.webp", "postres/rocksChocolate/trufa2.webp"],
  nombre: "Trufas de chocolate sin gluten",
  descripcionBreve: "Bombones crocantes de chocolate con cereales sin gluten.",
  descripcionLarga: "Deliciosos bocados crocantes hechos con cereales sin gluten y chocolate amargo.",
  ingredientes: ["Chocolate amargo", "cereales sin gluten", "manteca de cacao"],
  precio: 360,
  categorias: ["Chocolate", "Crocante"],
  aptoCeliacos: true,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 200 },
    { size: 20, precio: 320 }
  ]
};

const barritasCafeCeliaco = {
  id: 14,
  imagen: ["postres/barritasCafe/barritascafeFront.webp", "postres/barritasCafe/barritascafe1.webp", "postres/barritasCafe/barritascafe2.webp"],
  nombre: "Barritas crocantes de café sin gluten",
  descripcionBreve: "Barritas energéticas con sabor a café, crocantes y sin gluten.",
  descripcionLarga: "Base de avena sin gluten, crema de café suave y cobertura de chocolate.",
  ingredientes: ["Avena sin gluten", "café", "chocolate", "manteca"],
  precio: 390,
  categorias: ["Café", "Chocolate", "Crocante"],
  aptoCeliacos: true,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 210 },
    { size: 20, precio: 340 }
  ]
};

const copaFrutasVegana = {
  id: 15,
  imagen: ["postres/copaFrutas/copaFrutasFront.webp", "postres/copaFrutas/copa1.webp", "postres/copaFrutas/copa2.webp"],
  nombre: "Copa de frutas con crema de anacardos",
  descripcionBreve: "Frutas frescas con una suave crema vegetal.",
  descripcionLarga: "Frutas de estación servidas sobre una crema vegetal hecha con anacardos.",
  ingredientes: ["Frutas frescas", "anacardos", "leche vegetal", "vainilla"],
  precio: 420,
  categorias: ["Frutal", "Suave"],
  aptoCeliacos: true,
  aptoVeganos: true,
  opciones: [
    { size: 10, precio: 250 },
    { size: 20, precio: 400 }
  ]
};

const tartaLimonVegana = {
  id: 16,
  imagen: ["postres/tartaLimonVegana/tartalimonveganaFront.webp", "postres/tartaLimonVegana/tarta1.webp", "postres/tartaLimonVegana/tarta2.webp"],
  nombre: "Tarta crujiente de limón (vegana)",
  descripcionBreve: "Tarta cítrica con base crocante sin productos animales.",
  descripcionLarga: "Tarta vegana con base de frutos secos, crema vegetal cítrica y ralladura de limón.",
  ingredientes: ["Avena", "nueces", "limón", "leche vegetal", "almidón de maíz"],
  precio: 460,
  categorias: ["Frutal", "Crocante"],
  aptoCeliacos: true,
  aptoVeganos: true,
  opciones: [
    { size: 10, precio: 280 },
    { size: 20, precio: 420 }
  ]
};

const crocanteCarameloVegano = {
  id: 17,
  imagen: ["postres/crocanteCaramelo/crocantecarameloFront.webp", "postres/crocanteCaramelo/croc1.webp", "postres/crocanteCaramelo/croc2.webp"],
  nombre: "Crocante de caramelo (vegano)",
  descripcionBreve: "Trozos crocantes de caramelo vegano con nueces.",
  descripcionLarga: "Caramelo sólido a base de azúcar de coco, manteca vegetal y nueces troceadas.",
  ingredientes: ["Azúcar de coco", "nueces", "manteca vegetal"],
  precio: 390,
  categorias: ["Caramelo", "Crocante"],
  aptoCeliacos: true,
  aptoVeganos: true,
  opciones: [
    { size: 10, precio: 220 },
    { size: 20, precio: 360 }
  ]
};

const mousseCafeVegano = {
  id: 18,
  imagen: ["postres/mousseCafeVegano/moussecafeveganoFront.webp", "postres/mousseCafeVegano/mouse1.webp", "postres/mousseCafeVegano/mouse2.webp"],
  nombre: "Mousse de café (vegano)",
  descripcionBreve: "Espuma ligera con sabor a café, 100% vegetal.",
  descripcionLarga: "Mousse aireado preparado con leche vegetal, café y aquafaba.",
  ingredientes: ["Leche vegetal", "café", "azúcar", "aquafaba"],
  precio: 440,
  categorias: ["Café", "Suave"],
  aptoCeliacos: true,
  aptoVeganos: true,
  opciones: [
    { size: 10, precio: 260 },
    { size: 20, precio: 390 }
  ]
};

const mousseFrutasTropicales = {
  id: 19,
  imagen: ["postres/mousseFrutasTropicales/mousseFrutasTropicalesFront.webp", "postres/mousseFrutasTropicales/mousse1.webp", "postres/mousseFrutasTropicales/mousse2.webp"],
  nombre: "Mousse de frutas tropicales",
  descripcionBreve: "Espuma ligera y afrutada de mango y maracuyá.",
  descripcionLarga: "Una mousse exótica elaborada con puré natural de frutas tropicales y crema aireada.",
  ingredientes: ["Mango", "maracuyá", "crema vegetal", "azúcar"],
  precio: 460,
  categorias: ["Frutal", "Suave"],
  aptoCeliacos: true,
  aptoVeganos: true,
  opciones: [
    { size: 10, precio: 260 },
    { size: 20, precio: 400 }
  ]
};

const crocanteDeCafe = {
  id: 20,
  imagen: ["postres/crocanteDeCafe/crocanteDeCafeFront.webp", "postres/crocanteDeCafe/croc1.webp", "postres/crocanteDeCafe/croc2.webp"],
  nombre: "Crocante de café",
  descripcionBreve: "Bocaditos crocantes con aroma intenso a café.",
  descripcionLarga: "Pequeños trozos caramelizados con café, perfectos para un final crujiente.",
  ingredientes: ["Café", "azúcar", "manteca", "nueces"],
  precio: 410,
  categorias: ["Café", "Crocante"],
  aptoCeliacos: false,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 240 },
    { size: 20, precio: 380 }
  ]
};

const gelatinaCafe = {
  id: 21,
  imagen: ["postres/gelatinaCafe/gelatinaCafeFront.webp", "postres/gelatinaCafe/cafe1.webp", "postres/gelatinaCafe/cafe2.webp"],
  nombre: "Gelatina suave de café",
  descripcionBreve: "Gelatina ligera y refrescante con intenso sabor a café.",
  descripcionLarga: "Gelatina hecha con agar agar infusionado en café natural, ligeramente dulce y perfecta para un postre fresco y diferente.",
  ingredientes: ["Café natural", "agar agar", "azúcar de coco"],
  precio: 340,
  categorias: ["Café", "Suave"],
  aptoCeliacos: true,
  aptoVeganos: true,
  opciones: [
    { size: 10, precio: 190 },
    { size: 20, precio: 320 }
  ]
};

const tartaClasicaDeManzanaVegana = {
  id: 22,
  imagen: ["postres/tartaClasicaDeManzanaVegana/tartaClasicaDeManzanaVeganaFront.webp", "postres/tartaClasicaDeManzanaVegana/tarta1.webp", "postres/tartaClasicaDeManzanaVegana/tarta1.webp"],
  nombre: "Tarta clásica de manzana (vegana)",
  descripcionBreve: "Versión vegana de la tarta de manzana tradicional.",
  descripcionLarga: "Tarta horneada con compota de manzana y canela sobre base vegana.",
  ingredientes: ["Manzana", "canela", "harina de avena", "aceite de coco"],
  precio: 480,
  categorias: ["Frutal", "Crocante"],
  aptoCeliacos: false,
  aptoVeganos: true,
  opciones: [
    { size: 10, precio: 270 },
    { size: 20, precio: 420 }
  ]
};

const crostatinaClasica = {
  id: 23,
  imagen: ["postres/crostatinaClasica/crostatinaClasicaFront.webp", "postres/crostatinaClasica/crost1.jpg", "postres/crostatinaClasica/crost2.webp"],
  nombre: "Pasta Frola",
  descripcionBreve: "Mini pasta frola con base crocante y mermelada casera.",
  descripcionLarga: "Postre tradicional argentino con masa crocante y relleno de mermelada fruta.",
  ingredientes: ["Harina", "manteca", "azúcar", "mermelada de membrillo"],
  precio: 390,
  categorias: ["Frutal", "Crocante"],
  aptoCeliacos: false,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 220 },
    { size: 20, precio: 350 }
  ]
};

const fondueDeChocolateConFrutas = {
  id: 24,
  imagen: ["postres/fondueDeChocolateConFrutas/fondueDeChocolateConFrutasFront.webp", "postres/fondueDeChocolateConFrutas/fond1.webp", "postres/fondueDeChocolateConFrutas/fond2.webp"],
  nombre: "Fondue de chocolate con frutas",
  descripcionBreve: "Chocolate caliente acompañado de frutas frescas.",
  descripcionLarga: "Postre para compartir con variedad de frutas bañadas en chocolate amargo derretido.",
  ingredientes: ["Chocolate", "frutas frescas", "crema", "azúcar"],
  precio: 520,
  categorias: ["Frutal", "Chocolate", "Suave"],
  aptoCeliacos: true,
  aptoVeganos: false,
  opciones: [
    { size: 10, precio: 300 },
    { size: 20, precio: 450 }
  ]
};

const postres = [
  tiramisu,
  cheesecakeFrutilla,
  brownieNuez,
  flanCasero,
  mousseChocolate,
  tartaManzana,
  crumbleFrutosRojos,
  tartaFrutasVegana,
  lemonPie,
  chaja,
  mousseVainilla,
  pannaCottaVegana,
  rocksChocolateSinGluten,
  barritasCafeCeliaco,
  copaFrutasVegana,
  tartaLimonVegana,
  crocanteCarameloVegano,
  mousseCafeVegano,
  mousseFrutasTropicales,
  crocanteDeCafe,
  gelatinaCafe,
  tartaClasicaDeManzanaVegana,
  crostatinaClasica,
  fondueDeChocolateConFrutas
];



