// Ejercicio 15

// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

// const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

const products = [
    'Camiseta de Pokemon',
    'Pantalón coquinero',
    'Gorra de gansta',
    'Camiseta de Basket',
    'Cinrurón de Orión',
    'AC/DC Camiseta'
  ];
  
  for (let i = 0; i < products.length; i++) {
    const item = products[i];
  
    // .includes('Camiseta') devuelve true si la palabra está incluida en el string
    if (item.includes('Camiseta')) {
      console.log(`🟢 Producto con "Camiseta": ${item}`);
    }
  }
  
//   .includes('Camiseta') verifica si ese string contiene esa palabra exacta.

// Recorre el array con un for.

// Si el elemento cumple la condición, lo muestra con console log.
