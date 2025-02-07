import Header from './Header';
import Footer from './Footer';
import Book from './Book';
import "./../style/reset.css";
import "./../style/style.css";

export default function MainPage() {

    return (
        <div className="MainPage">
            <Header />

            <Book />

            <Footer />
        </div>
    );
}

