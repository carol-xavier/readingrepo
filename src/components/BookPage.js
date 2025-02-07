import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Checkbox from "./Checkbox";
import "./../style/reset.css";
import "./../style/style.css";

export default function BookPage() {
    const { bookId } = useParams();
    const [book, setBook] = useState({})
    const URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        if (!bookId) return;

        const promise = axios.get(`${URL}/ficha-do-livro/${bookId}`)
        promise.then((response) => {
            const { data } = response;
            setBook(data);
        });
        promise.catch((err) => {
            console.log(err);
            alert("Não foi possível carregar os dados do livro.");
        });
    }, [bookId, URL])


    const { title, author, publisher, year, pages, genre, my_category, nationality, summary, main_characters, citation } = book;

    return (
        <div className="BookPageBody">
            <Header
                title={title || ""}
                bookId={bookId}
            />
            <div className="BookPageSummary">
                <div>
                    <p>Autor: {author}</p>
                    <p>Editora: {publisher}</p>
                    <p>Ano: {year} </p>
                    <p>Páginas: {pages} </p>
                    <p>Gênero: {genre} </p>
                    <p>Nacionalidade: {nationality} </p>
                </div>
                <Checkbox checked={my_category || ""} />
            </div>
            <div className="BookReview">
                <h3>Resumo do Livro</h3>
                <p>{summary}</p>
                <h3>Personagens Principais</h3>
                {main_characters}
                <h3>Citação Preferida</h3>
                {citation}
            </div>
            <Footer />
        </div>
    );
}