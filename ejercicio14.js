// Ejercicio 14

// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

// const counterWords = [
//   'code',
//   'repeat',
//   'eat',
//   'sleep',
//   'code',
//   'enjoy',
//   'sleep',
//   'code',
//   'enjoy',
//   'upgrade',
//   'code'
// ];
// function repeatCounter(param) {
//   // insert code
// }

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  function repeatCounter(param) {
    // Creamos un objeto vacío para almacenar las repeticiones
    const repetitions = {};
  
    // Recorremos el array
    for (let i = 0; i < param.length; i++) {
      const word = param[i];
  
      // Si la palabra ya existe en el objeto, sumamos 1
      if (repetitions[word]) {
        repetitions[word]++;
      } else {
        // Si no existe, la inicializamos en 1
        repetitions[word] = 1;
      }
    }
  
    // Mostramos el resultado por consola
    console.log("🔢 Repeticiones:", repetitions);
  
    return repetitions;
  }
  
  // Ejecutamos la función
  repeatCounter(counterWords);
  

//   Uso un objeto (repetitions) para guardar cuántas veces aparece cada palabra.

// repetitions[word]++ suma 1 si ya estaba.

// repetitions[word] = 1 si es la primera vez que aparece.