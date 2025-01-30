import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import myGif from "./../assets/giphy.gif";

export default function AboutPage() {
    return (
        <div className="BookPageBody">
            <Header />
            <div>
                <h3>Em construção</h3>
                <Link to="/sobre-mim">
                    <img src={myGif} alt="Animated GIF" />
                </Link>
            </div>
            <Footer />
        </div>
    );
}