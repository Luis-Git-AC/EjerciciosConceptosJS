// Ejercicio 26

// Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.

// const goodProducts = [];
// const badProducts = [];
// const products = [
//   { name: "Funko Dr. Strange", sellCount: 10 },
//   { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
//   { name: "Sable laser FX", sellCount: 23 },
//   { name: "Varita de Voldemort", sellCount: 6 },
// ];

const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

// Recorremos el array de productos
for (let i = 0; i < products.length; i++) {
  // Si el producto tiene más de 20 ventas, lo agregamos al array goodProducts
  if (products[i].sellCount > 20) {
    goodProducts.push(products[i]);
  } else {
    // Si el producto tiene 20 o menos ventas, lo agregamos al array badProducts
    badProducts.push(products[i]);
  }
}

// Imprimimos los resultados en consola
console.log("Good Products:", goodProducts);
console.log("Bad Products:", badProducts);


// Inicializamos dos arrays:

// goodProducts: Para los productos con más de 20 ventas.

// badProducts: Para los productos con 20 o menos ventas.

// Bucle for: Recorremos el array products. En cada iteración:

// Si el sellCount de un producto es mayor que 20, lo agregamos a goodProducts usando push().

// Si el sellCount es 20 o menor, lo agregamos a badProducts.

// Impresión en consola: Finalmente, mostramos ambos arrays (goodProducts y badProducts) para ver los resultados.