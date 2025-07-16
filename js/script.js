// Variables globales

let primerBoton = document.querySelector("#primerBotonModal");
let segundoBoton = document.querySelector("#segundoBotonModal");
let tercerBoton = document.querySelector("#tercerBotonModal");

let primerModal = document.querySelector("#primerModal");
let segundoModal = document.querySelector("#segundoModal");
let tercerModal = document.querySelector("#tercerModal");

let primerSelect = document.querySelector("#input1");
let segundoSelect = document.querySelector("#input2");
let tercerSelect = document.querySelector("#input3");

let carrusel = document.querySelector("#carruselDeImagenes");
let catalogo = document.querySelector("#catalogo");
let productosDisplay = document.querySelector("#productosDisplay");
let inputTexto = document.querySelector("#buscadorTexto");

let arrayDePostreSugerido = [];
let postreOferta = JSON.parse(localStorage.getItem("postreSeleccionado")); // Oferta guardada en localStorage

let indiceCarrusel = 0;  // Índice para el carrusel



// devuelve un índice random dentro de rango postres.length
function elegirRandom() {
    return Math.floor(Math.random() * postres.length);
}

// genera 4 índices distintos para mostrar productos diferentes
function generarCuatroIndices() {
    let num1 = elegirRandom();
    let num2 = elegirRandom();
    while (num1 === num2) {
        num2 = elegirRandom();
    }
    let num3 = elegirRandom();
    while (num3 === num1 || num3 === num2) {
        num3 = elegirRandom();
    }
    let num4 = elegirRandom();
    while (num4 === num1 || num4 === num2 || num4 === num3) {
        num4 = elegirRandom();
    }
    return [num1, num2, num3, num4];
}
// genero índices para productos destacados
const indicesAleatorios = generarCuatroIndices();


// muestra el popup si no hay oferta guardada
function popUp() {
    if (postreOferta) return; // si hay oferta, no muestro el popup

    setTimeout(() => {
        document.querySelector("#popUp").style.top = "0";
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.style.overflow = "hidden"; //scrolleo hacia el inicio y bloqueo el scroll para que el filtro de blur del background no se vea roto
    }, 2000);
}

// Paso del primer modal al segundo
function cargar2doModal() {
    primerModal.style.display = "none";

    setTimeout(() => {
        segundoModal.style.display = "flex";
        segundoModal.style.flexDirection = "column";
        segundoModal.style.gap = "1rem";
    }, 100);

    // Filtra postres según selección del primer modal
    arrayDePostreSugerido = postres.filter(postre =>
        postre.categorias.includes(primerSelect.value)
    );
}

// Paso del segundo modal al tercero
function cargar3erModal() {
    if (postreOferta) return;

    segundoModal.style.display = "none";

    setTimeout(() => {
        tercerModal.style.display = "flex";
        tercerModal.style.flexDirection = "column";
        tercerModal.style.gap = "1rem";
    }, 100);

    // Filtra aún más por selección del segundo modal
    arrayDePostreSugerido = arrayDePostreSugerido.filter(postre =>
        postre.categorias.includes(segundoSelect.value)
    );
}

// ciero el modal y selecciono uno de los productos guardados en el array de postres sugeridos como oferta
function quitarModal() {
    tercerModal.style.display = "none";

    setTimeout(() => {
        document.querySelector("#popUp").style.top = "-100%";
        document.body.style.overflow = "auto"; // permito volver a scrollear
        setTimeout(() => {
            document.querySelector(".oferta").scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }, 1000);

    // filtro según restricción alimenticia elegida en tercer select (si la respuesta es no lo dejo tal cual)
    if (tercerSelect.value !== "No apto") {
        if (tercerSelect.value === "Celíaco") {
            arrayDePostreSugerido = arrayDePostreSugerido.filter(postre => postre.aptoCeliacos);
        } else if (tercerSelect.value === "Vegano") {
            arrayDePostreSugerido = arrayDePostreSugerido.filter(postre => postre.aptoVeganos);
        }
    }

    // elego postre aleatorio del array final
    const postreAleatorio = arrayDePostreSugerido[Math.floor(Math.random() * arrayDePostreSugerido.length)];

    // almaceno la fecha actual, y la sobreescribo con el metodo sethours el cual me permite agregar al valor inicial
    const cuentaRegresiva = new Date();
    cuentaRegresiva.setHours(cuentaRegresiva.getHours() + 24);

    // guardo la oferta y la fecha para el contador en el localstorage
    localStorage.setItem("postreSeleccionado", JSON.stringify(postreAleatorio));
    localStorage.setItem("ofertaExpira", cuentaRegresiva.toISOString());

    postreOferta = postreAleatorio;
    cargarPostreOferta(postreAleatorio);
    iniciarContador();
}

// muestro el postre en oferta en la sección correspondiente
function cargarPostreOferta(postre) {
    document.querySelector(".oferta").style.display = "block";
    const ofertaDiv = document.querySelector("#oferta");
    ofertaDiv.innerHTML = `
        <article class="postre-sugerido">
            <h3>OFERTA POR TIEMPO LIMITADO</h3>
            <img src="img/${postre.imagen[0]}" alt="${postre.nombre}">
            <h3>${postre.nombre}</h3>
            <div id="contadorContenedor"></div>
            <p>${postre.descripcionBreve}</p>
            <p><strong>Precio:</strong> <span class="tachado">$${postre.precio}</span> $${postre.precio / 2}</p>
            <a class="botonLink">Ver más</a>
        </article>
    `;
    //para hacerlo mas realista, divido el precio a la mitad
    let botonLink = document.querySelector(".postre-sugerido .botonLink");
    botonLink.href = `detalle.html?id=${postre.id}`;
}

// inicio el contador
function iniciarContador() {
    let cuentaRegresiva = document.querySelector("#contadorOferta");

    // si no existe el elemento, lo creo y lo inserto
    if (!cuentaRegresiva) {
        cuentaRegresiva = document.createElement("p");
        cuentaRegresiva.id = "contadorOferta";
        document.querySelector("#contadorContenedor").appendChild(cuentaRegresiva);
    }

    // cada segundo (haciendo ilusion al set interval del final de la funcion) vuelvo a ejecutar la funcion que va calculando nuevamente la hora en la que estamos, se la restamos al valor almacenado, el cual obtenemos al principio de actualizar contador
    function actualizarContador() {
        const fin = new Date(localStorage.getItem("ofertaExpira"));
        const ahora = new Date();
        const diferencia = fin - ahora;
        //si el contador llega a cero, se borra la oferta, tanto el contador como el postre almacenado
        if (diferencia <= 0) {
            cuentaRegresiva.textContent = "La oferta ha expirado.";
            localStorage.removeItem("postreSeleccionado");
            localStorage.removeItem("ofertaExpira");
            document.querySelector(".oferta").style.display = "none";
            clearInterval(intervalo);
            return;
        }

        const horas = Math.floor(diferencia / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        cuentaRegresiva.textContent = `Tiempo restante: ${horas}h ${minutos}m ${segundos}s`;
    }

    actualizarContador();
    const intervalo = setInterval(actualizarContador, 1000);
}



//tomé 3 pares de imagenes, cada una ocupa 50vw
function mostrarSiguienteImagen() {
    indiceCarrusel++;
    if (indiceCarrusel > 2) {
        indiceCarrusel = 0;
    }
    // muevo el carrusel según índice (usa vw para ancho)
    carrusel.style.transform = `translateX(${-indiceCarrusel * 100}vw)`;
}


// creo la tarjeta HTML de un postre y la inserto en el contenedor
function crearTarjeta(contenedor, postre) {
    const tarjetaPostre = document.createElement("article");
    tarjetaPostre.classList.add("flex");
    tarjetaPostre.innerHTML = `
        <img src="img/${postre.imagen[0]}" alt="${postre.nombre}">
        <div>
            <h2>${postre.nombre}</h2>
            <p>${postre.descripcionBreve}</p>
            <p><strong>Precio:</strong> $${postre.precio}</p>
        </div>
        <a class="botonLink">Ver más</a>
    `;
    tarjetaPostre.querySelector(".botonLink").href = `detalle.html?id=${postre.id}`;
    contenedor.insertAdjacentElement("beforeend", tarjetaPostre);
}

// para que se vea más smoothly, las inserto con un delay de 50ms
function cargarCatálogo(catalogo_A_Cargar) {
    let i = 0;
    catalogo.innerHTML = ""; // limpio catálogo antes de cargar

    const intervalo = setInterval(() => {
        if (i >= catalogo_A_Cargar.length) {
            clearInterval(intervalo);
            return;
        }
        crearTarjeta(catalogo, catalogo_A_Cargar[i]);
        i++;
    }, 50);
}



// ejecutamos las funciones correspondientes     si nos encontramos en index.html
if (window.location.pathname.endsWith("index.html")) {
    crearTarjeta(productosDisplay, postres[indicesAleatorios[0]]);
    crearTarjeta(productosDisplay, postres[indicesAleatorios[1]]);
    crearTarjeta(productosDisplay, postres[indicesAleatorios[2]]);
    crearTarjeta(productosDisplay, postres[indicesAleatorios[3]]);

    // Asignar eventos para botones del modal
    primerBoton.addEventListener("click", cargar2doModal);
    segundoBoton.addEventListener("click", cargar3erModal);
    tercerBoton.addEventListener("click", quitarModal);

    // Si existe oferta en localStorage y expiración, mostrar oferta e iniciar contador y carrusel
    if (postreOferta && localStorage.getItem("ofertaExpira")) {
        cargarPostreOferta(postreOferta);
        iniciarContador();
        setInterval(mostrarSiguienteImagen, 3000);
    }

    // Mostrar popup para seleccionar oferta si no hay oferta guardada
    popUp();
}
