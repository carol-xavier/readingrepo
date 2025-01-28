import { Link } from 'react-router-dom';
// import { useState } from "react";
import Header from './Header';
import "./../style/reset.css";
import "./../style/style.css";
import Footer from './Footer';


export default function MainPage() {
    return (
        <div className="MainPage">
            <Header />
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
            <Footer />
        </div>
    );
}

