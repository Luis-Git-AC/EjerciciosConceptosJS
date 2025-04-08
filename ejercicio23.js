// Ejercicio 23

// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

// const movies = [
//   { name: "Titan A.E.", durationInMinutes: 130 },
//   { name: "Nightmare before Christmas", durationInMinutes: 225 },
//   { name: "Inception", durationInMinutes: 165 },
//   { name: "The Lord of the Rings", durationInMinutes: 967 },
//   { name: "Star Wars: A New Hope", durationInMinutes: 214 },
//   { name: "Terminator", durationInMinutes: 140 },
// ];

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];
  
  // Arrays donde almacenaremos las películas filtradas
  let smallMovies = [];
  let mediumMovies = [];
  let largeMovies = [];
  
  // Bucle para recorrer todas las películas
  for (let i = 0; i < movies.length; i++) {
    // Condición para películas pequeñas (menos de 100 minutos)
    if (movies[i].durationInMinutes < 100) {
      smallMovies.push(movies[i]);
    }
    // Condición para películas medianas (más de 100 minutos y menos de 200 minutos)
    else if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200) {
      mediumMovies.push(movies[i]);
    }
    // Condición para películas grandes (más de 200 minutos)
    else if (movies[i].durationInMinutes >= 200) {
      largeMovies.push(movies[i]);
    }
  }
  
  // Imprimimos los resultados
  console.log("Películas pequeñas (menos de 100 minutos):", smallMovies);
  console.log("Películas medianas (más de 100 y menos de 200 minutos):", mediumMovies);
  console.log("Películas grandes (más de 200 minutos):", largeMovies);

  
//   Arrays: Creamos tres arrays vacíos para almacenar las películas según su duración: smallMovies, mediumMovies y largeMovies.

// Bucle for: Recorremos el array movies para evaluar la duración de cada película. Usamos condiciones if, else if para clasificar las películas según su duración:

// Películas pequeñas: Menos de 100 minutos.

// Películas medianas: Entre 100 y 200 minutos.

// Películas grandes: Más de 200 minutos.

// Impresión en consola: Finalmente, imprimimos cada array en la consola para ver las películas clasificadas.