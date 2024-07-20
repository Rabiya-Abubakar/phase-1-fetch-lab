// Define the fetchBooks function
function fetchBooks() {
  // Make the fetch request to the API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => {
      renderBooks(data); // Call renderBooks with the JSON data
    })
    .catch((error) => console.error("Error fetching books:", error)); // Handle any errors
}

// Define the renderBooks function (you'll need to implement this)
function renderBooks(data) {
  // Example implementation for rendering the book titles
  const bookList = document.getElementById('book-list'); // Assume there's an element with this ID
  bookList.innerHTML = ''; // Clear the list
  
  // Create and append a list item for each book
  data.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name; // Display the book title
    bookList.appendChild(listItem);
  });
}

// Call fetchBooks() when the page is loaded
document.addEventListener('DOMContentLoaded', fetchBooks);
