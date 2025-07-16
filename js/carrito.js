//cargo dinamicamente el producto desde el cual se viene

const contenedorCarrito = document.querySelector(".carrito-container");
const idProductoGuardado = localStorage.getItem("carritoProducto");
//si accedo al carrito directamente desde index o catalogo, no se carga en localstorage ningun producto
if (!idProductoGuardado) {
  contenedorCarrito.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
  <img class="carritoVacio" src="img/carritoVacio.png" alt="Carrito Vacio" />
  <p>Tu carrito está vacío.</p>
  </div>`;
} else {
  //cargo dinamicamente la tarjeta del producto
  const producto = postres.find(p => p.id === parseInt(idProductoGuardado));
  const tarjetaCarrito = document.createElement("article");
  tarjetaCarrito.classList.add("itemCarrito");

    tarjetaCarrito.innerHTML = `
      <img src="img/${producto.imagen[0]}" alt="${producto.nombre}" width="120" />
      <div>
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.opciones[0].precio}</p>
      </div>
    `;
    //lo inserto antes del formulario
    contenedorCarrito.insertAdjacentElement("afterbegin", tarjetaCarrito);
  }


//evaluo errores
let inputTexto = document.querySelector("#nombre");
let inputEmail = document.querySelector("#email");
let inputTelefono = document.querySelector("#telefono");
let inputTarjeta = document.querySelector("#tarjeta");
let inputCaptcha = document.querySelector("#captcha");
let preguntaCaptcha = document.querySelector("#preguntaCaptcha");
let terminosYCondiciones = document.querySelector("#terminosYcondiciones");

let contenedorErrorNombre = document.querySelector("#erroresNombre");
let contenedorErrorMail = document.querySelector("#erroresMail");
let contenedorErrorTelefono = document.querySelector("#erroresTelefono");
let contenedorErrorTarjeta= document.querySelector("#erroresTarjeta");
let contenedorErrorCaptcha= document.querySelector("#erroresCaptcha");

const caracteresInvalidos = ["!", "@", "#", "$", "%", "&", "/", "*", "(", ")", "=", "¿", "?", "<", ">"];
const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function evaluarErrorNombre() {
  let nombreIngresado = inputTexto.value.trim();
  //si el nombre es vacío, error
  if (nombreIngresado === "") {
    contenedorErrorNombre.innerHTML = "No ha ingresado su nombre";
    return;
  }
  //si el nombre tiene menos de 4 caracteres, error

  if (nombreIngresado.length < 4) {
    contenedorErrorNombre.innerHTML = "El nombre ingresado es demasiado corto";
    return;
  }
  //si el nombre tiene caracteres como "!,.@", entre otros, o numeros, error
  //utilizando un for, recorro individualmente cada caracter del nombre ingresado, reviso si charAt(x) esta incluido en cualquiera de los dos arrays de caracteres invalidos
  for (let i = 0; i < nombreIngresado.length; i++) {
    const caracterActual = nombreIngresado.charAt(i);
    if (caracteresInvalidos.includes(caracterActual) || numeros.includes(caracterActual)) {
      contenedorErrorNombre.innerHTML = "El nombre no puede tener caracteres inválidos ni números";
      return;
    }
  }
  //si no hay error, limpio el campo
  contenedorErrorNombre.innerHTML = "";
}

inputTexto.addEventListener("input", evaluarErrorNombre)

function evaluarErrorEmail() {
  let emailIngresado = inputEmail.value.trim();
  //si el mail es vacío, error
  if (emailIngresado === "") {
    contenedorErrorMail.innerHTML = "No ha ingresado su correo electrónico";
    return;
  }
  //si el mail no tiene una arroba o un punto, error

  if (!emailIngresado.includes("@") || !emailIngresado.includes(".")) {
    contenedorErrorMail.innerHTML = "El correo electrónico debe incluir '@' y un punto";
    return;
  }

  let posicionArroba = emailIngresado.indexOf("@");
  let posicionPunto = emailIngresado.lastIndexOf(".");
//evaluo que la arroba esté mínimo en el 3er caracter, que el punto este después del arroba, y que el punto no se encuentre en los ultimos 2 caracteres
  if (posicionArroba < 1 || posicionPunto < posicionArroba || posicionPunto >= emailIngresado.length - 1) {
    contenedorErrorMail.innerHTML = "El formato del correo no es válido";
    return;
  }
  if(posicionArroba === posicionPunto-1) {
    contenedorErrorMail.innerHTML = "Debe haber texto entre el arroba y el punto";
    return;
  }
  //si no hay error, limpio el campo
  contenedorErrorMail.innerHTML = "";
}
inputEmail.addEventListener("input", evaluarErrorEmail);

function evaluarErrorTelefono() {
  let telefonoIngresado = inputTelefono.value.trim();

  //si el campo está vacío, error
  if (telefonoIngresado === "") {
    contenedorErrorTelefono.innerHTML = "No ha ingresado su número de teléfono";
    return;
  }
  //filtro que solo pueda tener números
  for (let i = 0; i < telefonoIngresado.length; i++) {
    let caracter = telefonoIngresado.charAt(i);
    if (!numeros.includes(caracter)) {
      contenedorErrorTelefono.innerHTML = "El número contiene caracteres inválidos";
      return;
    }
    if (telefonoIngresado.length < 9) {
      contenedorErrorTelefono.innerHTML = "El número es demasiado corto";
      return;
    }
    //si el numero tiene menos de 9 caracteres, error
    if (!telefonoIngresado.startsWith("09")) {
      contenedorErrorTelefono.innerHTML = "El número es inválido";
      return;
    }

  }
  //si no hay errores, limpio el campo
  contenedorErrorTelefono.innerHTML = "";
}
inputTelefono.addEventListener("input", evaluarErrorTelefono);

function evaluarErrorTarjeta() {
  const valor = inputTarjeta.value.trim();

  if (valor === "") {
    contenedorErrorTarjeta.textContent = "El número de tarjeta es obligatorio";
    return
  }

  if (valor.length != 16) {
    contenedorErrorTarjeta.textContent = "El número de tarjeta debe tener 16 dígitos";
    return
  }

  for (let i = 0; i < valor.length; i++) {
    if (!numeros.includes(valor.charAt(i))) {
      contenedorErrorTarjeta.textContent = "El número de tarjeta solo debe contener números";
      return false;
    }
  }

  contenedorErrorTarjeta.textContent = "";
}
inputTarjeta.addEventListener("input", evaluarErrorTarjeta)

let respuestaValidas;
function cargoPreguntaCaptcha(){
  //al iniciar el carrito, selecciono una pregunta aleatoria de mi captcha y la cargo en el p correspondiente
  const preguntaAleatoria = preguntasCaptcha[Math.floor(Math.random() * preguntasCaptcha.length)];
  console.log(preguntaAleatoria);
  preguntaCaptcha.textContent = "Captcha: " +preguntaAleatoria.pregunta;
  //almaceno la respuesta correcta en una variable
  respuestaValidas = preguntaAleatoria.respuesta;
}
cargoPreguntaCaptcha();
function evaluarCaptcha(){
  //si el captcha está vacío, error
  contenedorErrorCaptcha.innerHTML = ""
  let captchaValor = inputCaptcha.value.toLowerCase();
  if(captchaValor === ""){
    contenedorErrorCaptcha.innerHTML = "El captcha es vacío"
    return
  }
  //si el captcha no esta incluido en las variables de la respuesta, error
  if(!respuestaValidas.includes(captchaValor)){
    contenedorErrorCaptcha.innerHTML = "El captcha es inválido"
    return
  }
}
inputCaptcha.addEventListener("input", evaluarCaptcha)

function evaluarCheckbox() {
  const boton = document.querySelector("#botonCarrito");
  //por lo general, el checkbox es lo que se clickea al final, por ende evaluo todo en ese momento
  const todoValido =
    contenedorErrorCaptcha.textContent === "" &&
    contenedorErrorMail.textContent === "" &&
    contenedorErrorNombre.textContent === "" &&
    contenedorErrorTarjeta.textContent === "" &&
    contenedorErrorTelefono.textContent === "" &&
    terminosYCondiciones.checked;
  //si todo está en orden, desbloqueo el boton y le aplico sus estilos correspondientes
  if (todoValido) {
    boton.classList.add("botonHabilitado");
    boton.classList.remove("botonDeshabilitado");
    boton.disabled = false;
  } else { //si no, lo vuelvo a bloquear
    boton.classList.add("botonDeshabilitado");
    boton.classList.remove("botonHabilitado");
    boton.disabled = true;
  }
}
terminosYCondiciones.addEventListener("change", evaluarCheckbox)
