import "./../style/reset.css";
import "./../style/style.css";

export default function Checkbox(props) {
    const { checked = "" } = props;
    const options  = ['Recomendo', 'Não recomendo', 'Para gostos peculiares']
 
    return (
        <div className="BookContent">
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        name="recommendation"
                        value={option}
                        checked={checked === option.toLocaleLowerCase()}
                        readOnly
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}