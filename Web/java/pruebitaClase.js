console.log("hello Mr. Octavio  (▀̿̿Ĺ̯̿▀̿ ̿)")

//Primer ejercicio
function Unico(cadena) {
    for (let i = 0; i < cadena.length; i++) {
      let Actual = cadena.charAt(i);
      if (cadena.indexOf(Actual) === i && cadena.indexOf(Actual, i + 1) === -1) {
        return Actual;
      }
    }
  }
  
 //Ver Resultado
  let Prueba = 'abacddbec';
  let primerCaracter = Unico(Prueba);
  console.log(primerCaracter);


//Segundo ejercicio
function bubbleSort(lista) {
  let n = lista.length;
  do {
    var intercambio = false;
    for (let i = 0; i < n - 1; i++) {
      if (lista[i] > lista[i + 1]) {
        [lista[i], lista[i + 1]] = [lista[i + 1], lista[i]];
        intercambio = true;
      }
    }
    n--;
  } while (intercambio);
  return lista;
}

//Ver Resultado
let lista = [22, 3, 5, 12, 1, 2, 0, 8, 8, 4];
let listaOrdenada = bubbleSort(lista);
console.log(listaOrdenada);


//Tercer ejercicio
function Invertidos(numeros) {
  let Inver = [];
  for (let i = numeros.length - 1; i >= 0; i--) {
    Inver.push(numeros[i]);
  }
  return Inver;
}

//Ver Resultado
let numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let Inver = Invertidos(numeros);
console.log(Inver);


//Cuarto ejercicio
function Mayus(cadena) {
  let palabras = cadena.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
  }
  return palabras.join(" ");
}

//Ver Resultado
let cadena = "no me gusta java :(";
let Mayusculas = Mayus(cadena);
console.log(Mayusculas);


//Quinto ejercicio
function mcd(num1, num2) {
  let resto;
  while (num2 !== 0) {
    resto = num1 % num2;
    num1 = num2;
    num2 = resto;
  }
  return num1;
}

//Ver Resultado
let num1 = 99;
let num2 = 18;
let mcdiv = mcd(num1, num2);
console.log(mcdiv);


//Sexto ejercicio
function hackerSpeak(texto) {
  let diccionario = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '5'
  };
  let palabras = texto.toLowerCase().split(' ');
  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    for (let letra in diccionario) {
      palabra = palabra.replace(new RegExp(letra, 'g'), diccionario[letra]);
    }
    palabras[i] = palabra;
  }
  return palabras.join(' ');
}

//Ver Resultado
let texto = 'Javascript es divertido';
let hText = hackerSpeak(texto);
console.log(hText);


//Septimo ejercicio
function factoriza(numero) {
  let factos = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      factos.push(i);
    }
  }
  return factos;
}

//Ver Resultado
let numero = 22;
let factos = factoriza(numero);
console.log(factos);


//Octavo ejercicio
function quitaDuplicados(arreglo) {
  let conjunto = new Set(arreglo);
  let unicos = Array.from(conjunto);
  return unicos;
}

//Ver Resultado
let arreglo = [22, 3, 3, 4, 55, 22, 55, 4, 4];
let unicos = quitaDuplicados(arreglo);
console.log(unicos);


//Noveno ejercicio
function Corta(listaCadenas) {
  let masCorta = Infinity;
  for (let cadena of listaCadenas) {
    if (cadena.length < masCorta) {
      masCorta = cadena.length;
    }
  }
  return masCorta;
}

//Ver Resultado
let listaCadenas = ["Siu", "Real Madrid", "<Cristiano", "Ronaldo"];
let longitud = Corta(listaCadenas);
console.log(longitud);


//Decimo ejercicio
function Palindromo(cadenap) {
  cadenap = cadenap.toLowerCase().replace(/ /g, '');
  let i = 0;
  let j = cadenap.length - 1;
  while (i < j) {
    if (cadenap[i] !== cadenap[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// Ejemplo de uso
let cadenap = "Logra Casillas alli sacar gol";
let resultado = Palindromo(cadenap);
console.log(resultado); 

//Decimo primer ejercicio
function OrdenAlfabetico(list) {
  let nuevaLista = list.slice();
  nuevaLista.sort();
  return nuevaLista;
}

//Ver Resultado
let list = ["Madrid", "United", "Arsenal", "Barca", "Juventus"];
let nuevaLista = OrdenAlfabetico(list);
console.log(nuevaLista);


//Decimo segundo ejercicio
function MedianaModa(liste) {
  liste.sort((a, b) => a - b);

  //MEDIANA
  let med;
  if (liste.length % 2 === 0) {
    let mitadSuperior = liste.length / 2;
    let mitadInferior = mitadSuperior - 1;
    med = (liste[mitadSuperior] + liste[mitadInferior]) / 2;
  } else {
    let mitad = Math.floor(liste.length / 2);
    med = liste[mitad];
  }

  //MODA
  let cuenta = {};
  let maximoFrecuencia = 0;
  let mod = [];
  for (let num of liste) {
    if (cuenta[num]) {
      cuenta[num]++;
    } else {
      cuenta[num] = 1;
    }
    if (cuenta[num] > maximoFrecuencia) {
      maximoFrecuencia = cuenta[num];
      mod = [num];
    } else if (cuenta[num] === maximoFrecuencia) {
      mod.push(num);
    }
  }
  return { med, mod };
}

//Ver Resultado
let liste = [5, 2, 8, 5, 9, 3, 7];
let result = MedianaModa(liste);
console.log(result);


//Decimo tercer ejercicio
function Frecuente(cadenas) {
  const frecuencia = {};
  cadenas.forEach(cadena => {
    if (frecuencia[cadena]) {
      frecuencia[cadena]++;
    } else { 
      frecuencia[cadena] = 1;
    }
  });

  let frecuent = '';
  let frecuenciaMasAlta = 0;
  for (let cadena in frecuencia) {
    if (frecuencia[cadena] > frecuenciaMasAlta) {
      frecuent = cadena;
      frecuenciaMasAlta = frecuencia[cadena];
    }
  }
  
  return frecuent;
}

//Ver Resultado
const cadenas = ["Cristiano", "Messi", "Ronaldinho", "Kvaratskhelia", "Cristiano", "Messi", "Cristiano"];
console.log(Frecuente(cadenas));


//Decimo cuarto ejercicio
function potenciaDos(numero) {
  if (numero < 1) {
    return false;
  }
  while (numero > 1) {
    if (numero % 2 !== 0) {
      return false;
    }
    numero /= 2;
  }
  return true;
}

//Ver Resultado
let numero1 = 8;
let numero2 = 10;
console.log(potenciaDos(numero1));
console.log(potenciaDos(numero2));


//Decimo quinto ejercicio
function Descendente(lista) {
  return lista.sort((a, b) => b - a);
}

//Ver Resultado
let num = [22, 4, 6, 12, 7];
console.log(Descendente(num));