// Ejercicio 18

// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

// const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const placesToTravel = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}
  ];
  
  // Usamos un bucle for para recorrer el array
  for (let i = 0; i < placesToTravel.length; i++) {
    // Si el id del destino es 11 o 40, lo eliminamos
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
      placesToTravel.splice(i, 1); // Elimina el elemento en la posición i
      i--; // Reducimos i para no saltarnos el siguiente elemento después de la eliminación
    }
  }
  
  // Mostramos el array modificado
  console.log(placesToTravel);
  

//   splice(i, 1): Este método elimina el elemento en la posición i. El segundo argumento (1) indica que eliminamos 1 solo elemento.

// i--: Después de eliminar un elemento, decrecemos i para que el bucle no salte el siguiente elemento que ocuparía la posición anterior (ya que el array se reajusta).