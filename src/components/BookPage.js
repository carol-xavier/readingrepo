
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
        <div>
            <h3>Choose options:</h3>
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
        <div className="Body">
            <Header />
            <div>
                <p>Autor:</p>
                <p>Editora:</p>
                <p>Ano:</p>
                <p>Páginas:</p>
                <p>Gênero:</p>
                <p>Nacionalidade:</p>
            </div>
            <Checkbox />
            <div>
                <p>Resumo do Livro</p>
                {/*get info from database*/}
                <p>Personagens Principais</p>
                <p>Citação Preferida</p>
            </div>
            <Footer />
        </div>
    );
}