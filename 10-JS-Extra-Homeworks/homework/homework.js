// No cambies los nombres de las funciones.

const {
  returnStatement
} = require("@babel/types");

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let z = []
  z = Object.entries(objeto);
  return z;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  const count = {}
  string.split('').forEach(char => {
    count[char] = count[char] ? (count[char] + 1) : 1;
  });
  return count;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let lowerCase = [...s].filter(l => l === l.toLowerCase())
  let upperCase = [...s].filter(l => l === l.toUpperCase())
  return [...upperCase, ...lowerCase].join("")
}




function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí



  return str.split("").reverse().join("").split(" ").reverse().join(" ")
  //solo me tomó como 5 horas :)

}




function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let rem = 0;
  let temp = 0;
  let finalNumber = 0;

  temp = numero;
  while (numero > 0) {
    rem = numero % 10;
    numero = parseInt(numero / 10);
    finalNumber = finalNumber * 10 + rem;
  }
  if (finalNumber === temp) {
    return "Es capicua";

  } else
    return "No es capicua";

}



function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí


  let arrayDeCadena = []
  let abcdeleted = []

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === 'a') {
      abcdeleted.push(cadena[i]);

    } else if (cadena[i] === 'b') {
      abcdeleted.push(cadena[i]);
    } else if (cadena[i] === 'c') {
      abcdeleted.push(cadena[i]);
    } else
      arrayDeCadena.push(cadena[i])
  }

  if (arrayDeCadena.length === cadena.length) {
    return cadena;
  } else
    return arrayDeCadena.join('');
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let organizedArray = arr.sort(function (a, b) {
    return a.length - b.length;
  })
  return organizedArray;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let sameNumbers = []
  for (let i = 0; i < arreglo1.length; i++) {
    for (let k = 0; k < arreglo2.length; k++) {
      if (arreglo1[i] === arreglo2[k]) {
        sameNumbers.push(arreglo2[k]);
      }
    }
  }
  return sameNumbers;
}

//no he podido con este último, no sé por qué me da undefined. 

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};