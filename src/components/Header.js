import { useLocation, Link } from 'react-router-dom';
import "./../style/reset.css";
import "./../style/style.css";



export default function Header() {
    const location = useLocation()

    return (
        <div className="Header">

            <h1>Diário de Leitura</h1>
            <Link to="/sobre-mim">
                <button>sobre mim</button>
            </Link>
            {location.pathname === "/ficha-do-livro" ? (
                <div className='BookTitle'>Titleeeeeeeeeeeeeeeeeee</div>
            ) : (<p></p>)}
        </div>
    );
}