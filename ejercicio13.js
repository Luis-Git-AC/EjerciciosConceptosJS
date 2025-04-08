// Ejercicio 13

// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

// const nameFinder = [
//   'Peter',
//   'Steve',
//   'Tony',
//   'Natasha',
//   'Clint',
//   'Logan',
//   'Xabier',
//   'Bruce',
//   'Peggy',
//   'Jessica',
//   'Marc'
// ];
// function finderName(param) {
//   // insert code
// }

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(array, nameToFind) {
    // indexOf busca el elemento y devuelve su posición o -1 si no lo encuentra
    const index = array.indexOf(nameToFind);
  
    if (index !== -1) {
      console.log(`✅ El nombre "${nameToFind}" fue encontrado en la posición ${index}.`);
      return true;
    } else {
      console.log(`❌ El nombre "${nameToFind}" no está en el array.`);
      return false;
    }
  }
  
  // Pruebas
  finderName(nameFinder, 'Tony');     // true, posición 2
  finderName(nameFinder, 'Bruce');    // true, posición 7
  finderName(nameFinder, 'Wanda');    // false
  

//   array.indexOf(valor):

// Si lo encuentra → devuelve el índice.

// Si no lo encuentra → devuelve -1.

// Usar !== -1 para saber si el valor existe.

// El console.log  muestra el resultado humano-legible.

// La función retorna true o false.