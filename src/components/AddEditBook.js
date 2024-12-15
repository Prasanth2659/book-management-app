import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AddEditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    Title: "",
    AuthorID: "",
    GenreID: "",
    Pages: "",
    PublishedDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? "PUT" : "POST";
    const url = id ? `http://localhost:5000/books/${id}` : "http://localhost:5000/books";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    }).then(() => navigate("/search"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={book.Title}
        onChange={(e) => setBook({ ...book, Title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={book.AuthorID}
        onChange={(e) => setBook({ ...book, AuthorID: e.target.value })}
      />
      <input
        type="text"
        placeholder="Genre"
        value={book.GenreID}
        onChange={(e) => setBook({ ...book, GenreID: e.target.value })}
      />
      <input
        type="number"
        placeholder="Pages"
        value={book.Pages}
        onChange={(e) => setBook({ ...book, Pages: e.target.value })}
      />
      <input
        type="date"
        placeholder="Published Date"
        value={book.PublishedDate}
        onChange={(e) => setBook({ ...book, PublishedDate: e.target.value })}
      />
      <button type="submit">Submit</button>
      </form>
  );
};

export default AddEditBook;