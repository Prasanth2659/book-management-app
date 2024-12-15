# Book Management Application

## Objective:
Design and implement a Book Management System that allows users to search for books, view details, and manage book records efficiently.

---

## Requirements

### User Interface (UI):

#### Home Page:
- **Navigation Bar:** Includes links to the following pages:
  - Home
  - Contact
  - About
  - Add Book
- **Search Section:** 
  - A search box for users to search by title, author, or genre.
  - Search filters (e.g., genres, authors).
  - A search button to trigger the book search.

#### Search Results Page:
- Display books in a grid or list format with pagination.
- Options to view details, edit, or delete a book record.

#### Book Details Page:
- Display detailed information about a selected book:
  - Title
  - Author
  - Genre
  - Pages
  - Published Date

#### Book Management Pages:
- Forms for adding and editing book details, with appropriate input validations.
- Confirmation step for book deletion.

---

### Database Schema:

#### Books Table:    
| BookID         | INTEGER      | Primary Key                           
| Title          | VARCHAR(255) | Title of the book                    
| AuthorID       | INTEGER      | Foreign Key to Authors Table         
| GenreID        | INTEGER      | Foreign Key to Genres Table          
| Pages          | INTEGER      | Number of pages in the book         
| PublishedDate  | DATE         | Date of publication                   

#### Genres Table:
| GenreID        | INTEGER      | Primary Key                          
| Name           | VARCHAR(255) | Genre name                          
| Description    | TEXT         | Description of the genre            

#### Authors Table:

| AuthorID       | INTEGER      | Primary Key                          
| Name           | VARCHAR(255) | Author name                          

---

## Development Plan

### Frontend:
- **React.js**: Use React.js as the framework for building the user interface.
- **Components**:
  - **Home Page**: Displays the navigation bar and search section.
  - **Search Results**: Displays the list of books with pagination.
  - **Book Details**: Displays detailed information about a specific book.
  - **Add/Edit Book**: Provides forms for adding or editing a book’s details.
  - **Delete Book**: Provides a confirmation prompt for deleting a book.
- **Fetch API**: Use the Fetch API to communicate with the backend API to retrieve and send book data.

### Backend:
- **Node.js** and **Express.js** for developing the RESTful API endpoints.
- **API Endpoints**:
  - `GET /books`: Fetch all books.
  - `POST /books`: Add a new book to the collection.
  - `PUT /books/:id`: Update the details of an existing book.
  - `DELETE /books/:id`: Delete a book from the collection.
  
### Database:
- Use a **relational database** like **SQLite** to store the book, author, and genre data.
  
---

## Installation

### Prerequisites:
- Node.js installed on your machine.
- A code editor (VSCode)
- A terminal/command line tool.

### Setup Instructions:

#### Clone the repository:
```bash
git clone (https://github.com/Prasanth2659/book-management-app.git)
