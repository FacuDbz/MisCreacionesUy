//recurrí a hacer otro archivo js, porque por algun motivo al tenes este fragmento de codigo en script.js, me rompía todo el sistema del modal y de los productos sugeridos aleatoriamente

// R E C O M E N D A C I O N - No pude hacer lo que me comentaste de que al momento de hacer un input, el script espere por las dudas de cargar un mismo producto dos veces, recomiendo entre dejar un espacio de al menos 3 o 4 segundos entre cada input para evitar errores
let veganoCheck = document.querySelector("#vegano");
let celiacoCheck = document.querySelector
("#celiaco");
let catalogoRestriccionAlimento = [];
//trabajo con los selects, y en base a los valores filtro el catálogo original
function armarCatalogoVegOCel(){
    catalogoRestriccionAlimento = postres;
    catalogo.innerHTML = "";
    //como no uso elses o returns, me permite tener 4 resultados: sin filtros, vegano, celiaco o ambos
    if(veganoCheck.checked){
        catalogoRestriccionAlimento = catalogoRestriccionAlimento.filter((postre) => postre.aptoVeganos === true);
    }
    if(celiacoCheck.checked){
        catalogoRestriccionAlimento =  catalogoRestriccionAlimento.filter((postre) => postre.aptoCeliacos === true);
    }
    cargarCatálogo(catalogoRestriccionAlimento)
}
//ejecuto las funciones al momento de recibir un click
veganoCheck.addEventListener("change",armarCatalogoVegOCel);
celiacoCheck.addEventListener("change", armarCatalogoVegOCel);

//ejecuto el buscador de texto
function buscarInputText(){
    let palabraIngresada = inputTexto.value;
    if(palabraIngresada === ""){
        catalogo.innerHTML = "";
        cargarCatálogo(postres)
        return
    }
    //si alguna de las restricciones alimenticias esta checked, en vez de trabajar con el catalogo completo trabajamos con el catalogo restringido
    if(veganoCheck.checked || celiacoCheck.checked){
        let catalogoActualizado = catalogoRestriccionAlimento.filter((postre) =>postre.nombre.toLowerCase().startsWith(palabraIngresada.toLowerCase()));
        cargarCatálogo(catalogoActualizado);
    }else{
        let catalogoActualizado = postres.filter((postre) =>postre.nombre.toLowerCase().startsWith(palabraIngresada.toLowerCase()));
        cargarCatálogo(catalogoActualizado);
    }
    //cargo el catálogo actualizado
}
inputTexto.addEventListener("input", buscarInputText);
cargarCatálogo(postres);