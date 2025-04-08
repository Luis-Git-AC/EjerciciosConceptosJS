// Ejercicio 20

// For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:

// const popularToys = [];
// const toys = [
// 	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
// 	{id: 11, name: 'Action Woman', sellCount: 24}, 
// 	{id: 23, name: 'Barbie Man', sellCount: 15}, 
// 	{id: 40, name: 'El gato con Guantes', sellCount: 8},
// 	{id: 40, name: 'El gato felix', sellCount: 35}
// ]

const popularToys = [];
const toys = [
  {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
  {id: 11, name: 'Action Woman', sellCount: 24}, 
  {id: 23, name: 'Barbie Man', sellCount: 15}, 
  {id: 40, name: 'El gato con Guantes', sellCount: 8},
  {id: 40, name: 'El gato felix', sellCount: 35}
];

// Usamos un bucle for...of para recorrer todos los juguetes en el array
for (let toy of toys) {
  // Si el número de ventas es mayor que 15, añadimos el juguete al array popularToys
  if (toy.sellCount > 15) {
    popularToys.push(toy);
  }
}

// Mostramos el array de juguetes populares por consola
 console.log(popularToys);

// for (let toy of toys): Usamos un bucle for...of para recorrer cada objeto toy dentro del array toys.

// if (toy.sellCount > 15): Comprobamos si el número de ventas del juguete (sellCount) es mayor que 15.

// popularToys.push(toy): Si cumple la condición, añadimos el juguete al array popularToys.

