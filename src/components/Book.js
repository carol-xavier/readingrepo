import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Book() {
    const [books, setBooks] = useState([]);
    const URL = process.env.REACT_APP_API_URL

    useEffect(() => {
        console.log("Estou ativando a requisicao");
        const promise = axios.get(URL)
        promise.then((response) => {
            const { data } = response;
            setBooks(data);
        });
        promise.catch((err) => {
            alert("Deu ruim");
            console.log(err);
        });
    }, [])

    return (
        <div className='Body'>
            {
                books.map(book => {
                    const { img, title, author } = book;
                    return (
                        <Link className="BookContent" to="/ficha-do-livro">
                            <img className="BookImage" src={img} />
                            <p>{title}</p>
                            <p>{author}</p>
                        </Link>
                    )
                })
            }
        </div>
    )
}