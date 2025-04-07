// Ejercicio 10

// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

// const numbers = [12, 21, 38, 5, 45, 37, 6];
// function average(param) {
  // insert code
// }

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  // Sumar todos los números del array usando un bucle o reduce
  let total = 0;

  for (let i = 0; i < param.length; i++) {
    total += param[i]; // Acumulamos la suma de todos los elementos
  }

  // Calculamos el promedio dividiendo el total entre la cantidad de elementos
  let avg = total / param.length;

  // Devolvemos el promedio calculado
  return avg;
}

// Ejecutamos la función y mostramos el resultado en la consola
let resultado = average(numbers);
console.log("El promedio es:", resultado); // Debería mostrar: 23.714285714285715


// Sumar todos los números: Se recorre el array y se acumulan los valores en la variable total.

// Calcular el promedio: Se divide el total entre la cantidad de elementos en el array (param.length).

// Devolver el resultado: Finalmente, se devuelve el promedio calculado.

//reduce

function average(param) {
    let total = param.reduce((acc, num) => acc + num, 0); // Suma todos los números
    return total / param.length; // Calcula el promedio
  }
  