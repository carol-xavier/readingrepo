import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import "./../style/reset.css";
import "./../style/style.css";

export default function Book() {
    const [books, setBooks] = useState([]);
    const URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const promise = axios.get(URL)
        promise.then((response) => {
            const { data } = response;
            setBooks(data);
        });
        promise.catch((err) => {
            alert("Deu ruim");
            console.log(err);
        });
    }, [URL])

    return (
        <div className='Body'>
            {
                books.map(book => {
                    const { _id, img, title, author } = book;
                    return (
                        <Link className="BookContent"
                            key={_id}
                            to={`/ficha-do-livro/${_id}`}
                        >
                            <BookImage src={img} />
                            <Identifier>
                                <h2>{title}</h2>
                                <h2>{author}</h2>
                            </Identifier>
                        </Link>
                    )
                })
            }
        </div>
    );
}

const BookImage = styled.img`
    width: 12vw; 
    height: 12vw; 
    border-radius: 50%; 
    object-fit: cover;
    margin-left: 5vw;
    margin-right: 5vw; 
`

const Identifier = styled.div`
    padding-top: 1.5vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`