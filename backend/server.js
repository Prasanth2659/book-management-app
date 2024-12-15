const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const booksRoutes = require("./routes/booksRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/books", booksRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
