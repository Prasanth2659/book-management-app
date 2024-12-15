module.exports = {
    createTable: (db) => {
      db.run(`CREATE TABLE IF NOT EXISTS Books (
        BookID INTEGER PRIMARY KEY,
        Title TEXT NOT NULL,
        AuthorID INTEGER NOT NULL,
        GenreID INTEGER NOT NULL,
        Pages INTEGER,
        PublishedDate TEXT,
        FOREIGN KEY(AuthorID) REFERENCES Authors(AuthorID),
        FOREIGN KEY(GenreID) REFERENCES Genres(GenreID)
      )`);
    },
  };