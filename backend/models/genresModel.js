module.exports = {
    createTable: (db) => {
      db.run(`CREATE TABLE IF NOT EXISTS Genres (
        GenreID INTEGER PRIMARY KEY,
        Name TEXT NOT NULL,
        Description TEXT
      )`);
    },
  };