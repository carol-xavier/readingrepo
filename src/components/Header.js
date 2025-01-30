import { useLocation } from 'react-router-dom';
import "./../style/reset.css";
import "./../style/style.css";



export default function Header() {
    const location = useLocation()

    return (
        <div className="Header">

            <h1>Diário de Leitura</h1>
            <button>sobre mim</button>

            {location.pathname === "/ficha-do-livro" ? (
                <div className='BookTitle'>Titleeeeeeeeeeeeeeeeeee</div>
            ) : (<p></p>)}
        </div>
    );
}