// Ejercicio 17

// Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

// const alien = {
//     name: 'Wormuck',
//     race: 'Cucusumusu',
//     planet: 'Eden',
//     weight: '259kg'
// }

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
  };
  
  // Bucle for...in para recorrer las propiedades del objeto
  for (const key in alien) {
    // Imprimimos cada propiedad y su valor
    console.log(`🛸 ${key}: ${alien[key]}`);
  }
  

//   for...in se usa para recorrer las propiedades (claves) de un objeto.

// key toma el nombre de cada propiedad: "name", "race", etc.

// alien[key] accede al valor correspondiente a esa clave.

// Usamos console.log() para mostrar "clave: valor"



//en 1 linea...

// const alien = {
//     name: 'Wormuck',
//     race: 'Cucusumusu',
//     planet: 'Eden',
//     weight: '259kg'
//   };
  
//   // Creamos una frase usando las propiedades del objeto directamente
//   const description = `${alien.name} es de la raza ${alien.race}, viene del planeta ${alien.planet} y pesa ${alien.weight}.`;
  
//   // Mostramos la frase en consola
//   console.log(description);
  
//   template literal (plantilla literal) y se usa con las comillas invertidas ` (no comillas simples ni dobles) para insertar variables fácilmente con ${}.