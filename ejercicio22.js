// Ejercicio 22

// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

// const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
// const foodSchedule = [
//   { name: "Heura", isVegan: true },
//   { name: "Salmon", isVegan: false },
//   { name: "Tofu", isVegan: true },
//   { name: "Burger", isVegan: false },
//   { name: "Rice", isVegan: true },
//   { name: "Pasta", isVegan: true },
// ];

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Creamos un índice para recorrer las frutas y evitar duplicados
let fruitIndex = 0;

// Recorremos el foodSchedule con un bucle for
for (let i = 0; i < foodSchedule.length; i++) {
  // Si la comida no es vegana, la reemplazamos con una fruta
  if (!foodSchedule[i].isVegan) {
    // Asignamos la fruta correspondiente, sin duplicados
    foodSchedule[i].name = fruits[fruitIndex];

    // Aumentamos el índice para usar la siguiente fruta
    fruitIndex++;

    // Si llegamos al final de las frutas, reiniciamos el índice
    if (fruitIndex >= fruits.length) {
      fruitIndex = 0; // reinicia el índice para evitar duplicados
    }
  }
}

// Mostramos el resultado
console.log(foodSchedule);


// fruitIndex: Usamos un índice para asegurarnos de reemplazar las comidas no veganas con las frutas de manera secuencial, sin repetir ninguna fruta.

// Bucle for: Recorreremos el array foodSchedule utilizando un bucle for. Por cada comida no vegana (isVegan: false), reemplazamos su nombre con una fruta del array fruits.

// Control de duplicados: Si hemos usado todas las frutas (es decir, si fruitIndex es mayor o igual al tamaño del array fruits), reiniciamos el índice a 0 para empezar nuevamente, asegurándonos de no tener duplicados.

