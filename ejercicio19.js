// Ejercicio 19

// Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:

// const toys = [
// {id: 5, name: 'Buzz MyYear'}, 
// {id: 11, name: 'Action Woman'}, 
// {id: 23, name: 'Barbie Man'}, 
// {id: 40, name: 'El gato con Guantes'},
// {id: 40, name: 'El gato felix'}
// ]

const toys = [
    {id: 5, name: 'Buzz MyYear'},
    {id: 11, name: 'Action Woman'},
    {id: 23, name: 'Barbie Man'},
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
  ];
  
  // Usamos un bucle for para recorrer el array de juguetes
  for (let i = 0; i < toys.length; i++) {
    // Comprobamos si el nombre del juguete incluye la palabra "gato"
    if (toys[i].name.includes('gato')) {
      // Si contiene "gato", eliminamos el juguete del array
      toys.splice(i, 1);
      i--; // Reducimos i para no saltarnos el siguiente elemento después de la eliminación
    }
  }
  
  // Mostramos el array modificado
  console.log(toys);
  

//   toys[i].name.includes('gato'): Usamos .includes('gato') para comprobar si la palabra "gato" aparece en el nombre del juguete.

// splice(i, 1): Eliminamos el juguete de la posición i en el array.

// i--: Reducimos i para evitar saltarnos el siguiente juguete que se mueve a la posición i después de la eliminación.

