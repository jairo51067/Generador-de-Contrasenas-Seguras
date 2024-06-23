function generarClave() {
  var caracteres =
    "0123456789/*-+%$?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var longitud = caracteres.length;
  var clave = "";

  while (clave.length < 9) {
    var indice = Math.floor(Math.random() * longitud);
    var caracter = caracteres.charAt(indice);

    if (clave.indexOf(caracter) === -1) {
      clave += caracter;
    }
  }

  document.getElementById("clave-generada").innerHTML = clave;
}

// función en JavaScript que recarga la página y limpiar la pagina
function recargarPagina() {
  location.reload();
}

// función en JavaScript para copiar elemento generado por otra función, que se muestra en pantalla y llevarlo al portapapeles para ser reutilizado:
function copiarElemento() {
  var elemento = document.getElementById("clave-generada");

  // Creamos un elemento de texto temporal
  var elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = elemento.textContent;

  // Agregamos el elemento temporal al documento
  document.body.appendChild(elementoTemporal);

  // Seleccionamos y copiamos el contenido del elemento temporal
  elementoTemporal.select();
  document.execCommand("copy");

  // Eliminamos el elemento temporal
  document.body.removeChild(elementoTemporal);

  // Mostrar un mensaje de clave copiada al portapapeles
  Swal.fire({
    title: '<b class="title-fire"> Clave Copiada </b>',
    text: "La clave ha sido copiada en el portapapeles",
    html: '<b class="text-fire"> La clave ha sido copiada en el portapapeles </b>',
    // width:'90%',
    background: "#232323",
    grow: "column",
    confirmButtonColor: "#04aa6d",
    buttonsStyling: false,
  });
}

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
