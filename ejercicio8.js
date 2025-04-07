// Ejercicio 8

// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

// const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
// function findLongestWord(param) {
  // insert code
// }

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
  // Inicializamos la variable con la primera palabra del array como la más larga hasta ahora
  let longestWord = param[0];

  // Recorremos el array desde la segunda posición (índice 1)
  for (let i = 1; i < param.length; i++) {
    // Comparamos la longitud de la palabra actual con la más larga
    if (param[i].length > longestWord.length) {
      longestWord = param[i]; // Si es más larga, la actualizamos
    }
    // Si es igual o menor en longitud, no hacemos nada (así se conserva la primera en caso de empate)
  }

  return longestWord; // Devolvemos la palabra más larga encontrada
}

// Ejecutamos la función con el array 'avengers'
let resultado = findLongestWord(avengers);
console.log("La palabra más larga es:", resultado); // Debería mostrar: "Captain M."


// param[0]: se usa como punto de partida para comparar.

// param[i].length > longestWord.length: compara la longitud de las palabras.

// En caso de empate (igual longitud), no se actualiza, por lo tanto se queda con la primera palabra larga encontrada.