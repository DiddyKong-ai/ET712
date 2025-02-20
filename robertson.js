/*
Dillon Robertson
Homework 3 - Objects and exception handling in JS
*/
// Movie class definition
class Movie {
    constructor(title, director, year) {
      this.title = title;
      this.director = director;
      this.year = year;
    }
  
    // Method to get details of the movie
    getDetails() {
      return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}`;
    }
  }
  
  // MovieCollection class definition
  class MovieCollection {
    constructor() {
      this.movies = [];  // Array to hold movies
    }
  
    // Method to add a movie to the collection
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    // Method to remove a movie from the collection by title
    removeMovie(title) {
      try {
        const movieIndex = this.movies.findIndex(movie => movie.title === title);
  
        if (movieIndex === -1) {
          throw new Error(`Movie with title "${title}" not found.`);
        }
  
        this.movies.splice(movieIndex, 1);  // Remove the movie from the array
        console.log(`Movie with title "${title}" has been removed.`);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    // Method to show all movies in the collection
    showMovies() {
      try {
        if (this.movies.length === 0) {
          throw new Error("No movies in the collection.");
        }
  
        console.log("Movies in the collection:");
        this.movies.forEach(movie => console.log(movie.getDetails()));
      } catch (error) {
        console.error(error.message);
      }
    }
  }
  
  // Example usage
  const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
  const movie2 = new Movie("The Matrix", "The Wachowskis", 1999);
  const movie3 = new Movie("Interstellar", "Christopher Nolan", 2014);
  
  const myMovieCollection = new MovieCollection();
  
  // Add movies to the collection
  myMovieCollection.addMovie(movie1);
  myMovieCollection.addMovie(movie2);
  myMovieCollection.addMovie(movie3);
  
  // Show all movies in the collection
  myMovieCollection.showMovies();
  
  // Remove a movie from the collection
  myMovieCollection.removeMovie("Inception");
  
  // Try removing a movie that doesn't exist
  myMovieCollection.removeMovie("Avatar");
  
  // Try showing movies when the collection is empty
  const emptyCollection = new MovieCollection();
  emptyCollection.showMovies();
  