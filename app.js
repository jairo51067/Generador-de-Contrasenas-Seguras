let claveGenerada = ""; // Variable global para almacenar la clave generada

function generarClave() {
  const caracteres = "0123456789!@#$%^&*()-_=+[]{}|;:',.<>?/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var longitud = caracteres.length;
  var titlePrevio = document.getElementById("titlePrevio");
  var titleClaveGenerada = document.getElementById("nuevaClaveGenerada");
  var claveElemento = document.getElementById("clave");
  var botonCopiarPortapeles = document.getElementById("botonCopiarPortapeles");
  var botonEmpezarDeNuevo = document.getElementById("botonEmpezarDeNuevo");
  var botonGenerarContrasena = document.getElementById("botonGenerarContrasena");
  var botonCambiarContrasena = document.getElementById("botonCambiarContrasena");

  claveGenerada = ""; // Reiniciar la clave generada

  while (claveGenerada.length < 12) {
    var indice = Math.floor(Math.random() * longitud);
    var caracter = caracteres.charAt(indice);

    if (claveGenerada.indexOf(caracter) === -1) {
      claveGenerada += caracter;
    }
  }

  titlePrevio.style.display = "none";
  document.getElementById("clave-generada").textContent = claveGenerada;
  titleClaveGenerada.style.display = "block";
  claveElemento.style.background = "#000";
  botonCopiarPortapeles.style.display = "block";
  botonEmpezarDeNuevo.style.display = "block";
  botonCambiarContrasena.style.display = "block";
  botonGenerarContrasena.style.display = "none";
}

// Función para recargar la página
function recargarPagina() {
  location.reload();
}

// Función para copiar al portapapeles
function copiarElemento() {
  if (claveGenerada === "") {
    // Mostrar alerta si no se ha generado una nueva clave
    alertify.alert("Aviso", "Debes generar una nueva contraseña antes de copiarla al portapapeles.", function () {
      // alertify.message("Por favor, genera una nueva contraseña.");
      alertify.success("Por favor, genera una nueva contraseña.");
    });
    return;
  }

  // Crear un elemento de texto temporal
  var elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = claveGenerada;

  // Agregar el elemento temporal al documento
  document.body.appendChild(elementoTemporal);

  // Seleccionar y copiar el contenido del elemento temporal
  elementoTemporal.select();
  document.execCommand("copy");

  // Eliminar el elemento temporal
  document.body.removeChild(elementoTemporal);

  // Mostrar un mensaje de éxito con SweetAlert2
  Swal.fire({
    title: '<b class="title-fire"> La contraseña se ha copiado<br>al portapapeles.</b>',
    html: '<b class="text-fire">¡Protege tus cuentas!<br><br>Guarda tu nueva contraseña<br><br>en un lugar seguro,<br><br>como un gestor de contraseñas.</b>',
    width: "100%",
    background: "#232323",
    grow: "column",
    confirmButtonColor: "#04aa6d",
    buttonsStyling: false,
  }).then(() => {
    // Recargar la página después de cerrar el SweetAlert2
    recargarPagina();
  });
}


// function generarClave() {
//   var caracteres =
//     "0123456789/*-+%$?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var longitud = caracteres.length;
//   var titlePrevio = document.getElementById("titlePrevio");
//   var titleClaveGenerada = document.getElementById("nuevaClaveGenerada");
//   var claveGenerada = document.getElementById("clave")

//   var clave = "";

//   while (clave.length < 9) {
//     var indice = Math.floor(Math.random() * longitud);
//     var caracter = caracteres.charAt(indice);

//     if (clave.indexOf(caracter) === -1) {
//       clave += caracter;
//     }
//   }

//   titlePrevio.style.display = "none";
//   document.getElementById("clave-generada").innerHTML = clave;
//   titleClaveGenerada.style.display = "block";
//   claveGenerada.style.background = "#000";
// }

// // función en JavaScript que recarga la página y limpiar la pagina
// function recargarPagina() {
//   location.reload();
// }

// // ** función en JavaScript para copiar elemento generado por otra función, que se muestra en pantalla y llevarlo al portapapeles para ser reutilizado, lo malo es que si presiono copiar y aun no se a generado nueva contraseña, me copia la que se genero anteriormente lo cual representa una falla de seguridad.
// function copiarElemento() {
//   var elemento = document.getElementById("clave-generada");

//   // Creamos un elemento de texto temporal
//   var elementoTemporal = document.createElement("textarea");
//   elementoTemporal.value = elemento.textContent;

//   // Agregamos el elemento temporal al documento
//   document.body.appendChild(elementoTemporal);

//   // Seleccionamos y copiamos el contenido del elemento temporal
//   elementoTemporal.select();
//   document.execCommand("copy");

//   // Eliminamos el elemento temporal
//   document.body.removeChild(elementoTemporal);

//   // Mostrar un mensaje de clave copiada al portapapeles
//   Swal.fire({
//     title: '<b class="title-fire"> La contraseña se ha copiado<br>al portapapeles.</b>',
//     text: "La contraseña se ha copiado al portapapeles.",
//     html: '<b class="text-fire">¡Protege tus cuentas!<br><br>Guarda tu nueva contraseña<br><br>en un lugar seguro,<br><br>como un gestor de contraseñas.</b>',
//     width: "100%",
//     background: "#232323",
//     grow: "column",
//     confirmButtonColor: "#04aa6d",
//     buttonsStyling: false,
//   });
// }

// *** Con esta función podemos generar claves aleatorias, que dependerán de los dígitos que le asignemos, solo que se pueden repetir
// function generarClave() {
//   var caracteres = "0123456789JACMdadm/*-+%$?";
//   var longitud = 10; // Podemos ajustar la longitud de la clave según las necesidades
//   var clave = "";

//   for (var i = 0; i < longitud; i++) {
//     var indice = Math.floor(Math.random() * caracteres.length);
//     clave += caracteres.charAt(indice);
//   }

//   document.getElementById("clave-generada").innerHTML = clave;
// }

// En el HTML, debemos tener un botón con un identificador único  (id) y una etiqueta donde se mostrará la clave generada:
// <button onclick="generarClave()">Generar Clave</button>
// <p id="clave-generada"></p>


// biblioteca de alertas alertify