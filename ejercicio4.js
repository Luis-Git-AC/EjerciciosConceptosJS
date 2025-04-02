// Ejercicio 4

// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log("El primer avenger es:", avengers[0]);  // Muestra el primer elemento del array, que es "HULK"

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = "IRONMAN";  // Cambiamos el primer elemento del array a "IRONMAN"
console.log("El primer avenger ahora es:", avengers[0]);  // Muestra el nuevo valor del primer elemento, "IRONMAN"

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
console.log("El número de avengers es:", avengers.length);  //número de elementos en el array usando .length

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");  //  .push() para añadir los elementos al final del array
console.log("El último personaje de rickAndMortyCharacters es:", rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);  

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
rickAndMortyCharacters.pop();  // Usar .pop() para eliminar el último elemento del array
console.log("El primer personaje es:", rickAndMortyCharacters[0]);  // Muestra el primer elemento del array
console.log("El último personaje es:", rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);  // Muestra el último elemento del array después de eliminar el anterior

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters.splice(1, 1);  // Usar .splice() para eliminar el segundo elemento (índice 1) del array
console.log("El array después de eliminar el segundo elemento:", rickAndMortyCharacters); 
