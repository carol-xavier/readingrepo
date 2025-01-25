import { useState } from "react";
import "./style/style.css";
import "./style/reset.css";


export default function MainPage() {
    return (
        <div className="MainPage">
            <div className="Header">
                <h1>Diário de Leitura</h1>
                <button>sobre mim</button>
            </div>
            <div className="Body">
                <div className="BookContent">
                    <img className="BookImage" src="https://trechos.org/wp-content/uploads/2021/05/Livro-Data-Science-do-Zero-2o-Edicao-Nocoes-Fundamentais-com-Python-por-Joel-Grus.jpg" />
                    <p>Data Science do Zero</p>
                    <p>Nome do Autor</p>
                </div>
                <img className="BookImage" src="https://trechos.org/wp-content/uploads/2021/05/Livro-Data-Science-do-Zero-2o-Edicao-Nocoes-Fundamentais-com-Python-por-Joel-Grus.jpg" />
                <img className="BookImage" src="https://trechos.org/wp-content/uploads/2021/05/Livro-Data-Science-do-Zero-2o-Edicao-Nocoes-Fundamentais-com-Python-por-Joel-Grus.jpg" />
                <img className="BookImage" src="https://trechos.org/wp-content/uploads/2021/05/Livro-Data-Science-do-Zero-2o-Edicao-Nocoes-Fundamentais-com-Python-por-Joel-Grus.jpg" />
                <img className="BookImage" src="https://trechos.org/wp-content/uploads/2021/05/Livro-Data-Science-do-Zero-2o-Edicao-Nocoes-Fundamentais-com-Python-por-Joel-Grus.jpg" />
                <img className="BookImage" src="https://trechos.org/wp-content/uploads/2021/05/Livro-Data-Science-do-Zero-2o-Edicao-Nocoes-Fundamentais-com-Python-por-Joel-Grus.jpg" />
                <img className="BookImage" src="https://trechos.org/wp-content/uploads/2021/05/Livro-Data-Science-do-Zero-2o-Edicao-Nocoes-Fundamentais-com-Python-por-Joel-Grus.jpg" />
            </div>
            <div className="Footer">
                <h3>contact</h3>
            </div>
        </div>
    );
}