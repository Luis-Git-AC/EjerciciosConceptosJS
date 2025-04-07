// Ejercicio 9

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

// const numbers = [1, 2, 3, 5, 45, 37, 58];

// function sumAll(param) {
  // insert code
// }

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // Inicializamos una variable para acumular la suma
  let total = 0;

  // Recorremos cada número del array
  for (let i = 0; i < param.length; i++) {
    total += param[i]; // Sumamos cada número al total
  }

  // Devolvemos el total al final del bucle
  return total;
}

// Prueba de la función con console.log
let resultado = sumAll(numbers);
console.log("La suma total es:", resultado); // Debería mostrar: 151


// let total = 0: iniciamos el acumulador en cero.

// for (let i = 0; i < param.length; i++): recorre todo el array.

// total += param[i]: va sumando cada valor del array al total.

// return total: devuelve la suma final después del bucle.



//.reduce
function sumAll(param) {
    return param.reduce((acc, num) => acc + num, 0);
  }

  