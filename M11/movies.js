// Define the Movie class
class Movie {
  // Private properties
  #title;
  #cast;
  #description;
  #rating;

  // Constructor to initialize the movie object
  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast; // array of strings
    this.#description = description;
    this.#rating = rating;
  }



  // Method to update the rating of the movie
  updateRating(newRating) {
    this.#rating = newRating;
  }

  // Method to display the movie's information
  displayInfo() {
    const movieInfoDIv = document.getElementById("movie-info");
    movieInfoDIv.innerHTML += `
      <h3>Title: ${this.#title}</h3>
      <p><strong>Cast:</strong> ${this.#cast.join(", ")}</p>
      <p><strong>Description:</strong> ${this.#description}</p>
      <p><strong>Rating:</strong> ${this.#rating}</p>
      <hr/>
    `;
  }
  // Getter for title (needed for searching in movies array)
  getTitle() {
    return this.#title;
  }
}

// Test your implementation

// Create a new movie object
const shawshank = new Movie(
  "The Shawshank Redemption",
  ["Tim Robbins", "Morgan Freeman"],
  "Two imprisoned men bond over a number of years, finding eventual redemption through acts of common decency.", 9.3
);
// Display the initial information of the movie
shawshank.displayInfo();

// Create a collection array and add the movie
const movies = [shawshank];

// Function to update the rating of the movie
function updateMovieRating(title, newRating) {
  for (let movie of movies) {
    if (movie.getTitle() === title) {
      movie.updateRating(newRating);
      movie.displayInfo(); // Display the updated information
      break;
    }
  }
}


// Update the rating of the movie
updateMovieRating("The Shawshank Redemption", 9.5);
