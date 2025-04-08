// Ejercicio 21

// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto

// "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

// const users = [
//   { name: "Tony", years: 43 },
//   { name: "Peter", years: 18 },
//   { name: "Natasha", years: 14 },
//   { name: "Bruce", years: 32 },
//   { name: "Khamala", years: 16 },
// ];

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];
  
  // Imprimimos el encabezado para los menores de edad
  console.log("Usuarios menores de edad:");
  for (let user of users) {
    if (user.years < 18) {
      console.log(user.name); // Imprimimos el nombre de los menores de edad
    }
  }
  
  // Imprimimos el encabezado para los mayores de edad
  console.log("Usuarios mayores de edad:");
  for (let user of users) {
    if (user.years >= 18) {
      console.log(user.name); // Imprimimos el nombre de los mayores de edad
    }
  }
  

//   Primera parte (menores de edad):

// Imprimimos el texto "Usuarios menores de edad:".

// Usamos un bucle for...of para recorrer el array users y verificamos si la edad (years) del usuario es menor que 18.

// Si la condición se cumple, imprimimos el nombre del usuario.

// Segunda parte (mayores de edad):

// Imprimimos el texto "Usuarios mayores de edad:".

// Nuevamente usamos un bucle for...of para recorrer el array users, pero esta vez verificamos si la edad (years) es mayor o igual a 18.

// Si la condición se cumple, imprimimos el nombre del usuario