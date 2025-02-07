import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import BookPage from './BookPage';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/ficha-do-livro/:bookId" element={<BookPage />} />
        <Route path="sobre-mim" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}