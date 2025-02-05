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
                <img src={myGif} alt="Animated GIF" />
            </div>
            <Footer />
        </div>
    );
}