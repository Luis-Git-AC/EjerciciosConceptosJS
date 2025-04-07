// Ejercicio 7

// Completa la función que tomando dos números como argumento devuelva el más alto.

// function getMaxNumber(numberOne , numberTwo) {
  // insert code
// }

// function getMaxNumber(numberOne, numberTwo) {
    // Usamos una estructura condicional para comparar los dos números
//     if (numberOne > numberTwo) {
//       return numberOne; // Si numberOne es mayor, lo devolvemos
//     } else {
//       return numberTwo; // Si no, devolvemos numberTwo (ya sea mayor o igual)
//     }
//   }

  
  

//   function getMaxNumber(numberOne, numberTwo) {
    // El operador ternario evalúa la condición y devuelve uno u otro valor
//     return numberOne > numberTwo ? numberOne : numberTwo;
//   }
  

function getMaxNumber(numberOne, numberTwo) {
    // Compara los dos números y devuelve el mayor
    return numberOne > numberTwo ? numberOne : numberTwo;
  }
  
  // Prueba con valores reales
  let resultado1 = getMaxNumber(10, 5);
  console.log("El número mayor entre 10 y 5 es:", resultado1); // Debería mostrar 10
  
  let resultado2 = getMaxNumber(3, 8);
  console.log("El número mayor entre 3 y 8 es:", resultado2); // Debería mostrar 8
  
  let resultado3 = getMaxNumber(7, 7);
  console.log("El número mayor entre 7 y 7 es:", resultado3); // Debería mostrar 7
  