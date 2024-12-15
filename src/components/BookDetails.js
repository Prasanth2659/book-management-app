import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-details-section">
      <h2>{book.Title}</h2>
      <p>Author: {book.AuthorID}</p>
      <p className="genre">Genre: {book.GenreID}</p>
      <p className="pages">Pages: {book.Pages}</p>
      <p className="date">Published Date: {book.PublishedDate}</p>
    </div>
  );
};

export default BookDetails;