// Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};

// Valor de la propiedad 'age' de 10 a 25
character.age = 25;

console.log(character);  // { name: 'Jack Sparrow', age: 25 }

// Declara 3 variables con los nombres y valores siguientes 
let firstName = 'Jon';   // Primer nombre
let lastName = 'Snow';   // Apellido
let age = 24;            // Edad

// Usamos template literals para mostrar el mensaje completo en consola
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);

// Definimos dos objetos, cada uno representando un juguete con su nombre y precio
const toy1 = {name: 'Buss myYear', price: 19};  // Primer juguete
const toy2 = {name: 'Rallo mcKing', price: 29}; // Segundo juguete

// Sumar los precios de ambos juguetes 
console.log(toy1.price + toy2.price);  // 19 + 29 = 48

/*1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};*/

// Definir una variable globalBasePrice que representa el precio base de los coches
let globalBasePrice = 10000;

// Definir dos objetos de coches, cada uno con un precio base y un precio final
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

// Actualizar el valor de globalBasePrice a 25000
globalBasePrice = 25000;

// Calcular el nuevo precio final de cada coche sumando su basePrice con el nuevo valor de globalBasePrice
car1.finalPrice = car1.basePrice + globalBasePrice;  // 50000 + 25000 = 75000
car2.finalPrice = car2.basePrice + globalBasePrice;  // 70000 + 25000 = 95000


console.log(car1.finalPrice);  // 75000
console.log(car2.finalPrice);  // 95000
