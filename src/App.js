import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SearchResults from "./components/SearchResults";
import BookDetails from "./components/BookDetails";
import AddEditBook from "./components/AddEditBook";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/details/:id" element={<BookDetails />} />
      <Route path="/add" element={<AddEditBook />} />
      <Route path="/edit/:id" element={<AddEditBook />} />
    </Routes>
  </Router>
);

export default App;