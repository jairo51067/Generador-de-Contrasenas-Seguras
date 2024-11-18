// function generarClaveSegura() {
//   const caracteres = "0123456789!@#$%^&*()-_=+[]{}|;:',.<>?/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const longitud = 16;
//   claveGenerada = "";

//   function generarIndiceAleatorio(max) {
//     const array = new Uint32Array(1);
//     window.crypto.getRandomValues(array);
//     return array[0] % max;
//   }

//   while (claveGenerada.length < longitud) {
//     const indice = generarIndiceAleatorio(caracteres.length);
//     const caracter = caracteres.charAt(indice);
//     if (!claveGenerada.includes(caracter)) claveGenerada += caracter;
//   }

//   incluirCaracterDeCadaGrupo();
//   document.getElementById("clave-generada").value = claveGenerada;
// }

// function incluirCaracterDeCadaGrupo() {
//   const grupos = [
//     "0123456789",
//     "abcdefghijklmnopqrstuvwxyz",
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     "!@#$%^&*()-_=+[]{}|;:',.<>?/\\"
//   ];
//   grupos.forEach(grupo => {
//     const indice = Math.floor(Math.random() * grupo.length);
//     claveGenerada += grupo.charAt(indice);
//   });
// }
