// // Replace with your actual TMDB API key
// const API_KEY = "AIzaSyB_ahY4N9Dsdctd4ZJsj0IkwNrGvmU-nns"

// // Function to search for movies based on a query
// export const searchMovies = async (query) => {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US`
//     );
//     const data = await response.json();
//     return data.results;  // Returning the search results
//   } catch (error) {
//     console.error("Error fetching search results:", error);
//     return [];  // Return an empty array in case of error
//   }
// };
// a