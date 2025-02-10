import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Checkbox from "./Checkbox";
import "./../style/reset.css";
import "./../style/style.css";
import styled from "styled-components";

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
        <div>
            <Header
                title={title || ""}
                bookId={bookId}
            />
            <BookPageBody>
                <BookPageSummary>
                    <div>
                        <BookSpecifics>
                            <h3>Autor: </h3>
                            <h2>{`    ${author}`}</h2>
                        </BookSpecifics>
                        <BookSpecifics>
                            <h3>Editora: </h3>
                            <h2>{`    ${publisher}`}</h2>
                        </BookSpecifics>
                        <BookSpecifics>
                            <h3>Ano: </h3>
                            <h2>{`    ${year}`}</h2>
                        </BookSpecifics>
                        <BookSpecifics>
                            <h3>Páginas: </h3>
                            <h2>{`    ${pages}`}</h2>
                        </BookSpecifics>
                        <BookSpecifics>
                            <h3>Gênero: </h3>
                            <h2>{`    ${genre}`}</h2>
                        </BookSpecifics>
                        <BookSpecifics>
                            <h3>Nacionalidade: </h3>
                            <h2>{`    ${nationality}`}</h2>
                        </BookSpecifics>
                    </div>
                    <Checkbox checked={my_category || ""} />
                </BookPageSummary>
                <BookReview>
                    <BookSections>
                        <h3>Resumo do Livro</h3>
                        <p>{summary}</p>
                    </BookSections>
                    <BookSections>
                        <h3>Personagens Principais</h3>
                        <p>{main_characters}</p>
                    </BookSections>
                    <BookSections>
                        <h3>Citação Preferida</h3>
                        <p>{citation}</p>
                    </BookSections>
                </BookReview>
            </BookPageBody>
            <Footer />
        </div>
    );
}

const BookPageBody = styled.div`
    width: calc(100% - 2vw); 
    height:80vh;
    top: 18vh;
    left: 2vw;
    position: absolute;
`

const BookSpecifics = styled.div` 
    display: flex;
    align-items: center;
`

const BookSections = styled.div`
    display: flex;
    flex-direction: column;
`

const BookPageSummary = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center; 
`

const BookReview = styled.div`
    height: 60vh;

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`