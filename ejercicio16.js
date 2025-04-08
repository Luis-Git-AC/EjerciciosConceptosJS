// Ejercicio 16

// Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

// Puedes usar este array:

// const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

// Bucle for...of para recorrer cada elemento del array
for (const place of placesToTravel) {
  // Mostrar cada destino en consola
  console.log(`🌴 Destino: ${place}`);
}

// for...of es un bucle muy limpio y fácil de leer para recorrer arrays.

// place representa cada elemento del array placesToTravel en cada iteración.

// Usamos console.log() para imprimir el destino.