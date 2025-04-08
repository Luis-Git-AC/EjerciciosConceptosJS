// Ejercicio 11

// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// pista (typeof)

// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
// function averageWord(param) {
  // insert code
// }

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let total = 0; // Acumulador de suma total
  let count = param.length; // Cantidad de elementos para calcular el promedio

  // Recorremos cada elemento del array
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      total += param[i]; // Sumamos el número directamente
    } else if (typeof param[i] === 'string') {
      total += param[i].length; // Sumamos la cantidad de letras del string
    }
  }

  // Calculamos el promedio
  let average = total / count;

  // Devolvemos el promedio
  return average;
}

// Probar la función
let resultado = averageWord(mixedElements);
console.log("El promedio total (números + longitud de strings) es:", resultado);


// typeof: detecta el tipo del elemento.

// .length: mide la longitud de los strings.

// param.length: sirve para dividir el total por la cantidad de elementos.


// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub', null, undefined, true, { name: "test" }];

// function averageWord(param) {
//   let total = 0; // Acumulador total
//   let validCount = 0; // Contador de elementos válidos

//   for (let i = 0; i < param.length; i++) {
//     const element = param[i];

//     // Si el elemento es un número válido
//     if (typeof element === 'number' && !isNaN(element)) {
//       total += element;
//       validCount++;
//     }
//     // Si el elemento es un string
//     else if (typeof element === 'string') {
//       total += element.length;
//       validCount++;
//     }
//     // Otros tipos se ignoran
//     else {
//       console.log(`Elemento ignorado (${i}):`, element);
//     }
//   }

//   // Si no hay elementos válidos, devolvemos null o un mensaje
//   if (validCount === 0) {
//     return "No hay elementos válidos para calcular el promedio.";
//   }

//   // Calculamos y devolvemos el promedio
//   return total / validCount;
// }

// // Probar la función
// let resultado = averageWord(mixedElements);
// console.log("El promedio de los elementos válidos es:", resultado);
