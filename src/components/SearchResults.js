import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const [books, setBooks] = useState([]); // Original book list from the server
  const [filteredBooks, setFilteredBooks] = useState([]); // Books filtered based on search
  const [searchQuery, setSearchQuery] = useState(""); // Search input value
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch books from the server
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data); // Initialize filteredBooks with all books
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter books based on the search query
    const filtered = books.filter(
      (book) =>
        book.Title.toLowerCase().includes(query) || // Match by title
        book.AuthorName?.toLowerCase().includes(query) || // Match by author
        book.GenreName?.toLowerCase().includes(query) // Match by genre (if available)
    );
    setFilteredBooks(filtered);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setBooks(books.filter((book) => book.BookID !== id));
          setFilteredBooks(filteredBooks.filter((book) => book.BookID !== id));
        } else {
          throw new Error("Failed to delete book");
        }
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <div>
      <h2>Search Results</h2>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by title, author, or genre..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          fontSize: "16px",
        }}
      />
      {filteredBooks.length > 0 ? (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.BookID}>
              <Link to={`/details/${book.BookID}`}>{book.Title}</Link>
              <button onClick={() => navigate(`/edit/${book.BookID}`)}>Edit</button>
              <button onClick={() => handleDelete(book.BookID)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found. Try adjusting your search criteria.</p>
      )}
    </div>
  );
};

export default SearchResults;
