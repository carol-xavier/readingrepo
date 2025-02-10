import Header from "./Header";
import Footer from "./Footer";
import myGif from "./../assets/giphy.gif";
import "./../style/reset.css";
import "./../style/style.css";

export default function AboutPage() {
    
    return (
        <div className="Body">
            <Header />
            <div>
                <h3>Em construção</h3>
                <img src={myGif} alt="Animated GIF" />
            </div>
            <Footer />
        </div>
    );
}