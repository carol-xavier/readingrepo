import { Link } from 'react-router-dom';
// import { useState } from "react";
import "./../style/reset.css";
import "./../style/style.css"

import BookPage from "./BookPage";


export default function MainPage() {
    return (
        <div className="MainPage">
            <div className="Header">
                <h1>Diário de Leitura</h1>
                <button>sobre mim</button>
            </div>
            <div className="Body">
                <Link className="BookContent" to="/ficha-do-livro">
                    <img className="BookImage" src="https://trechos.org/wp-content/uploads/2021/05/Livro-Data-Science-do-Zero-2o-Edicao-Nocoes-Fundamentais-com-Python-por-Joel-Grus.jpg" />
                    <p>Data Science do Zero</p>
                    <p>Nome do Autor</p>
                </Link>
                <Link className="BookContent" to="/ficha-do-livro">
                    <img className="BookImage" src="https://trechos.org/wp-content/uploads/2021/05/Livro-Data-Science-do-Zero-2o-Edicao-Nocoes-Fundamentais-com-Python-por-Joel-Grus.jpg" />
                    <p>Data Science do Zero</p>
                    <p>Nome do Autor</p>
                </Link>
                <Link className="BookContent" to="/ficha-do-livro">
                    <img className="BookImage" src="https://trechos.org/wp-content/uploads/2021/05/Livro-Data-Science-do-Zero-2o-Edicao-Nocoes-Fundamentais-com-Python-por-Joel-Grus.jpg" />
                    <p>Data Science do Zero</p>
                    <p>Nome do Autor</p>
                </Link>      
            </div>
            <div className="Footer">
                <h3>contact</h3>
            </div>
        </div>
    );
}