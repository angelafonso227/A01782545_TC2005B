console.log("hello world")

//Primer ejercicio
function primerCaracterUnico(cadena) {
    for (let i = 0; i < cadena.length; i++) {
      let caracterActual = cadena.charAt(i);
      if (cadena.indexOf(caracterActual) === i && cadena.indexOf(caracterActual, i + 1) === -1) {
        return caracterActual;
      }
    }
  }
  
  // Prueba la función
  let cadenaPrueba = 'abacddbec';
  let primerCaracter = primerCaracterUnico(cadenaPrueba);
  console.log(primerCaracter);

//Segundo ejercicio