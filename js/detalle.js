    // selectores
const contenedorPostre = document.querySelector("#postre");
const inputTexto = document.querySelector("#inputTexto");

// variables globales
let postreSeleccionado;

// funciones
const identificarPostre = (idPostre) => {
    postreSeleccionado = postres.find((postre) => postre.id === idPostre);

    if (postreSeleccionado) {
        mostrarPostre();
    } else {
        contenedorPostre.innerHTML = "<p>No se encontró ningún postre</p>";
    }
}
//cargo la informacion dinamicamente obteniendo la informacion desde data.js
const mostrarPostre = () => {
    document.title = `${postreSeleccionado.nombre} - Mi Catálogo de Postres`;
    contenedorPostre.innerHTML = `
<div class="contenedorDetalle">
    <div class="seccionDetalle">
        <div class="detalleImagenes">
            <div class="imagenPrincipalContainer">
                <img id="imagenPrincipal" src="img/${postreSeleccionado.imagen[0]}" alt="${postreSeleccionado.nombre}">
            </div>
            <div class="selectorImg">
                <img id="img1" src="img/${postreSeleccionado.imagen[0]}" alt="Vista 1">
                <img id="img2" src="img/${postreSeleccionado.imagen[1]}" alt="Vista 2">
                <img id="img3" src="img/${postreSeleccionado.imagen[2]}" alt="Vista 3">
            </div>
        </div>

        <div class="detalleTexto">
            <h2>${postreSeleccionado.nombre}</h2>
            <p>${postreSeleccionado.descripcionLarga}</p>
            <ul>
                <li>Ingredientes: ${postreSeleccionado.ingredientes.join(", ")}</li>
            </ul>
            <div>
                ${postreSeleccionado.aptoCeliacos ? '<span class="material-symbols-outlined" title="Apto Celíacos">spa</span>' : ''}
                ${postreSeleccionado.aptoVeganos ? '<span class="material-symbols-outlined" title="Apto Veganos">eco</span>' : ''}
            </div>
            <div>
                <p><strong>Opciones:</p>
                <select>
                    <option value="1">${postreSeleccionado.opciones[0].size} porciones | $${postreSeleccionado.opciones[0].precio}  </option>
                    <option value="2">${postreSeleccionado.opciones[1].size} porciones | $${postreSeleccionado.opciones[1].precio} </option>
                </select>
            </div>
            <div><a href="carrito.html" class="botonComprar" >COMPRAR</button></a>  

        </div>
    </div>
</div>
    `;
    let Imagen1 = document.querySelector("#img1")
    let Imagen2 = document.querySelector("#img2")
    let Imagen3 = document.querySelector("#img3")
    function cambiarImagenSeleccionada(indiceImagenSeleccionada){
        document.querySelector(".imagenPrincipalContainer").innerHTML = "";
        document.querySelector(".imagenPrincipalContainer").innerHTML = `<img id="imagenPrincipal" src="img/${postreSeleccionado.imagen[indiceImagenSeleccionada]}">`;
    }
    
    Imagen1.addEventListener("click", () => cambiarImagenSeleccionada(0))
    Imagen2.addEventListener("click", () => cambiarImagenSeleccionada(1))
    Imagen3.addEventListener("click", () => cambiarImagenSeleccionada(2))
    //almaceno el producto en el local storage para poder guardarlo en el carrito
    const btnComprar = document.querySelector(".botonComprar");
        btnComprar.addEventListener("click", () => {
    localStorage.setItem("carritoProducto", postreSeleccionado.id);
});

}
//inicializo postres similares vacio
let postresSimilares = [];
function crearPostresSimilares(){
    let indiceAleatorio = Math.floor(Math.random() * postreSeleccionado.categorias.length);  
    //los postres tienen al menos 2 categorías, para que me sugiera alguna de esas dos, la agarro de manera aleatoria
    let categoriaSeleccionada = postreSeleccionado.categorias[indiceAleatorio];
    //filtro los postres que me coincidan con la categoria seleccionada
    postresSimilares = postres.filter((postre) =>postre.id !== postreSeleccionado.id && postre.categorias.includes(categoriaSeleccionada));
    //itero cuatro veces porque, al venir trabajando con un grid que displayeaba 4 productos, es lo más correcto
    let contenedorPostresSimilares = document.querySelector("#postresSimilares");
    for (let i = 0; i < 4 && i < postresSimilares.length; i++) {
        crearTarjeta(contenedorPostresSimilares, postresSimilares[i]);
    }
}
const url = new URL(window.location.href);
const idPostre = url.searchParams.get("id");
identificarPostre(parseInt(idPostre));
crearPostresSimilares();
if (idPostre) {
    identificarPostre(parseInt(idPostre));
} else {
    contenedorPostre.innerHTML = "<p>No se ha seleccionado ningún postre.</p>";
}



