// Ejercicio 24

// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

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
  
  // Variable para almacenar el total de ventas
  let totalSales = 0;
  
  // Usamos un bucle for para recorrer el array de productos
  for (let i = 0; i < products.length; i++) {
    totalSales += products[i].sellCount;  // Sumamos las ventas de cada producto
  }
  
  // Imprimimos el total de ventas en la consola
  console.log("Total de ventas:", totalSales);
  

//   Inicializamos totalSales: Usamos una variable totalSales para almacenar la suma acumulada de todas las ventas. Comienza en 0.

// Bucle for: Recorremos el array products con un bucle for. En cada iteración, accedemos al valor de sellCount del producto actual (products[i].sellCount) y lo sumamos a la variable totalSales.

// Impresión: Al final, mostramos en consola el total de las ventas.

