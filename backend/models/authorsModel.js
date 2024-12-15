module.exports = {
    createTable: (db) => {
      db.run(`CREATE TABLE IF NOT EXISTS Authors (
        AuthorID INTEGER PRIMARY KEY,
        Name TEXT NOT NULL
      )`);
    },
  };