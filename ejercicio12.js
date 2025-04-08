// Ejercicio 12

// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)

// const duplicates = [
//   'sushi',
//   'pizza',
//   'burger',
//   'potatoe',
//   'pasta',
//   'ice-cream',
//   'pizza',
//   'chicken',
//   'onion rings',
//   'pasta',
//   'soda'
// ];
// function removeDuplicates(param) {
//   // insert code
// }

//SET

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicatesWithSet(param) {
    // Set elimina automáticamente duplicados
    const uniqueArray = [...new Set(param)];
  
    // Mostramos cuántos fueron eliminados
    const eliminados = param.length - uniqueArray.length;
    console.log(`🔹 Usando Set: Se eliminaron ${eliminados} duplicados.`);
  
    return uniqueArray;
  }
  
  console.log("Resultado con Set:", removeDuplicatesWithSet(duplicates));
  

  //FOR - INCLUDES

  function removeDuplicatesWithLoop(param) {
    let uniqueArray = [];
  
    for (let i = 0; i < param.length; i++) {
      const item = param[i];
  
      // Si no está ya en uniqueArray, lo agregamos
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
  
    const eliminados = param.length - uniqueArray.length;
    console.log(`🔸 Usando bucle: Se eliminaron ${eliminados} duplicados.`);
  
    return uniqueArray;
  }
  
  console.log("Resultado con bucle:", removeDuplicatesWithLoop(duplicates));
  