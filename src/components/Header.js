import { useLocation, Link } from 'react-router-dom';
import "./../style/reset.css";
import "./../style/style.css";



export default function Header(props) {
    const { title = "", bookId } = props;
    const location = useLocation()

    return (
        <div className="Header">

            <h1>Diário de Leitura</h1>
            <Link to="/sobre-mim">
                <button>sobre mim</button>
            </Link>
            {location.pathname === `/ficha-do-livro/${bookId}` ? (
                <div className='BookTitle'>{title}</div>
            ) : (<p></p>)}
        </div>
    );
}