// api/api.js

const BASE_URL = "http://localhost:5000";

// Fetch all books
export const fetchBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/books`);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fetch a single book by ID
export const fetchBookById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch book details");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Add a new book
export const addBook = async (book) => {
  try {
    const response = await fetch(`${BASE_URL}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (!response.ok) {
      throw new Error("Failed to add book");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Update an existing book
export const updateBook = async (id, book) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (!response.ok) {
      throw new Error("Failed to update book");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Delete a book by ID
export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete book");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
