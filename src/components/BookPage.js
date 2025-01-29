
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";


// Check if I need another className different from Body
// Update Header to switch and add book title and reading dates

function Checkbox() { /* It does not need to be dynamic like this once I have the info in the database */
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = ["Recomendo", "Não Recomendo", "Se você gosta de leitura densa, só vai!"];

    const HandleChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedOptions((prev) => [...prev, value]);
        } else {
            setSelectedOptions((prev) => prev.filter((option)))
        }
    }

    return (
        <div className="BookContent">
            <p>Choose options:</p>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={HandleChange}
                    />
                    {option}
                </label>
            ))}
        </div>
    )
}

export default function BookPage() {
    return (
        <div className="BookPageBody">
            <Header />
            <div className="BookPageSummary">
                <div>
                    <p>Autor:</p>
                    <p>Editora:</p>
                    <p>Ano:</p>
                    <p>Páginas:</p>
                    <p>Gênero:</p>
                    <p>Nacionalidade:</p>
                </div>
                <Checkbox />
            </div>
            <div className="BookReview">
                <h3>Resumo do Livro</h3>
                {/*get info from database*/}
                <p>Data Science from Zero" essentially refers to starting a journey to learn data science with no prior experience, meaning you would begin by acquiring fundamental knowledge in statistics, programming languages like Python, data manipulation techniques, and gradually progress to more advanced concepts like machine learning and data visualization to eventually analyze and extract meaningful insights from large datasets, all while building practical skills through projects and applications</p>
                <h3>Personagens Principais</h3>
                <h3>Citação Preferida</h3>
            </div>
            <Footer />
        </div>
    );
}