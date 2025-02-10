import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import "./../style/reset.css";
import "./../style/style.css";



export default function Header (props) {
    const { title = "", bookId } = props;
    const location = useLocation()

    return (
        <HeaderBox>
            <h1>Diário de Leitura</h1>
            <Link to="/sobre-mim">
                <Button>sobre mim</Button>
            </Link>
            {location.pathname === `/ficha-do-livro/${bookId}` ? (
                <BookTitle>{`      ${title}`}</BookTitle>
            ) : (<p></p>)}
        </HeaderBox>
    );
}

const HeaderBox = styled.div`
    width: 100%;
    height: 15vh;
    top: 0; 
    left: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    z-index: 1;
    position: fixed;
    background-color: #dcbb96;
    
    position: fixed; 
    margin: 0; 
    padding: 0; 
`
const Button = styled.button`
    width:10vw;
    height:4vh;
    background: #FFFFFF;
    border-radius: 5vw;
    font-family:  "Cambo", serif;
    font-size: 1.5vw;
`

const BookTitle = styled.div`
    position: absolute; /* Places it inside .Header */
    bottom: 0; /* Aligns with bottom of .Header */
    left: 2vw; /* Aligns with the left margin */
    
    width: 30vw;
    height: 5vh;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1vw;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    z-index: 2; /* Ensure it stays above .Header */
    white-space: pre-wrap;
`