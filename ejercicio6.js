// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.

// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
// y cambia el mensaje en la décima vuelta a 'Dormido!'.

// Bucle for que recorre los números del 0 al 9
for (let i = 0; i < 10; i++) {
    console.log(i); // Muestra el valor de 'i' en cada iteración
}

// Bucle for que recorre los números del 0 al 9
for (let i = 0; i < 10; i++) {
    // Verificamos si el resto de 'i' dividido entre 2 es 0 (números pares)
    if (i % 2 === 0) {
        console.log(i); // Muestra el valor de 'i' solo si es par
    }
}
// Bucle for que da 10 vueltas
for (let i = 1; i <= 10; i++) {
    if (i < 10) {
        console.log('Intentando dormir 🐑'); // Mensaje para cada vuelta hasta la décima
    } else {
        console.log('Dormido!'); // Mensaje final en la décima vuelta
    }
}