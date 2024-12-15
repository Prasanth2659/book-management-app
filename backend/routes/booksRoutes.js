const express = require("express");
const db = require("../database/db");
const router = express.Router();

router.get("/", (req, res) => {
    db.all("SELECT * FROM Books", (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });
  
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    db.get("SELECT * FROM Books WHERE BookID = ?", [id], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(row);
      }
    });
  });
  
  router.post("/", (req, res) => {
    const { Title, AuthorID, GenreID, Pages, PublishedDate } = req.body;
    const query = `INSERT INTO Books (Title, AuthorID, GenreID, Pages, PublishedDate) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [Title, AuthorID, GenreID, Pages, PublishedDate], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ BookID: this.lastID });
      }
    });
  });
  
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { Title, AuthorID, GenreID, Pages, PublishedDate } = req.body;
    const query = `UPDATE Books SET Title = ?, AuthorID = ?, GenreID = ?, Pages = ?, PublishedDate = ? WHERE BookID = ?`;
    db.run(query, [Title, AuthorID, GenreID, Pages, PublishedDate, id], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ updatedRows: this.changes });
      }
    });
  });
  
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM Books WHERE BookID = ?`;
    db.run(query, [id], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ deletedRows: this.changes });
      }
    });
  });
  
  module.exports = router;
  
