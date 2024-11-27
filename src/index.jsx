// import React from 'react';
import ReactDOM from 'react-dom';
// import App from './Components/App';

// Render();
// function Render() {
//     ReactDOM.render(
//         <App />,
//         document.querySelector('.root')
//     );
// }

// export default Render;

function Lista() {
    return (
        <ul>
            <li>Topico 1</li>
            <li>Topico 2</li>
            <li>Reaprendendo React</li>
        </ul>
    );
}

const lista = Lista();
const local = document.querySelector(".root");
ReactDOM.render(lista, local);