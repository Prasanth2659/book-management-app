const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(`CREATE TABLE Authors (AuthorID INTEGER PRIMARY KEY, Name TEXT)`);
  db.run(`CREATE TABLE Genres (GenreID INTEGER PRIMARY KEY, Name TEXT, Description TEXT)`);
  db.run(`CREATE TABLE Books (
    BookID INTEGER PRIMARY KEY,
    Title TEXT,
    AuthorID INTEGER,
    GenreID INTEGER,
    Pages INTEGER,
    PublishedDate TEXT,
    FOREIGN KEY(AuthorID) REFERENCES Authors(AuthorID),
    FOREIGN KEY(GenreID) REFERENCES Genres(GenreID)
  )`);
});

module.exports = db;
