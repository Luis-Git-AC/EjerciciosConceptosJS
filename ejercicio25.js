// Ejercicio 25

// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

// const products = [
//   { name: "Funko Dr. Strange", sellCount: 10 },
//   { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
//   { name: "Sable laser FX", sellCount: 23 },
//   { name: "Varita de Voldemort", sellCount: 6 },
// ];

const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];
  
  // Inicializamos las variables para almacenar el total de ventas y la cantidad de productos
  let totalSales = 0;
  let totalProducts = products.length;  // Usamos la longitud del array para saber cuántos productos hay
  
  // Usamos un bucle for para recorrer el array de productos y sumar las ventas
  for (let i = 0; i < totalProducts; i++) {
    totalSales += products[i].sellCount;
  }
  
  // Calculamos la media de ventas
  let averageSales = totalSales / totalProducts;
  
  // Imprimimos la media de ventas en la consola
  console.log("Media de ventas:", averageSales);
  

//   Inicializamos las variables:

// totalSales: Comienza en 0 y se usará para acumular la suma de todas las ventas.

// totalProducts: Usamos products.length para obtener el número total de productos.

// Bucle for: Recorreremos el array products, y en cada iteración sumamos las ventas de cada producto (sellCount) a la variable totalSales.

// Cálculo de la media: Dividimos el total de ventas (totalSales) entre la cantidad de productos (totalProducts) para obtener la media de ventas.

// Impresión en consola: Mostramos la media de ventas con console.log