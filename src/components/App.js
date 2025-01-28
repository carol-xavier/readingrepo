// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import BookPage from './BookPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/ficha-do-livro" element={<BookPage />} />
      </Routes>
    </Router>
  );
}