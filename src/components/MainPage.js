import axios from 'axios';
import { useEffect, useState } from "react";
import Header from './Header';
import Footer from './Footer';
import Book from './Book';
import "./../style/reset.css";
import "./../style/style.css";

export default function MainPage() {
    // const [books, setBooks] = useState([]);
    // const URL = process.env.REACT_APP_API_URL

    // useEffect(() => {
    //     console.log("Estou ativando a requisicao");
    //     const promise = axios.get(URL)
    //     promise.then((response) => {
    //         const {data} = response;
    //         setBooks(data);
    //     });
    //     promise.catch((err) => {
    //         alert("Deu ruim");
    //         console.log(err);
    //     });
    // }, [])



    return (
        <div className="MainPage">
            <Header />

            <Book />

            <Footer />
        </div>
    );
}

