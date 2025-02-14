import Header from "./Header";
import Footer from "./Footer";
import myGif from "./../assets/giphy.gif";
import profile_pic from "./../assets/Me.jpeg";
import styled from "styled-components";
import "./../style/reset.css";
import "./../style/style.css";

export default function AboutPage() {

    return (
        <div className="Body">
            <Header />
            <Profile>
                <img className="BookImage" src={profile_pic} alt="Picture of myself" />
                <Text>
                    Eu sou mais conhecida como Carol, já cheguei na casa dos 30. Nasci em São Paulo, mudei para Fortaleza quando eu tinha 9 anos e costumo dizer que sou
                    Fortalezense de coração. No meu tempo livre, eu adoro ir ao teatro, cinema, lugares com boa música, praia e encontrar os amigos.
                    Também é fácil me encontrar praticando crossfit. Eu me formei em Biotecnologia pela Universidade Federal do Ceará em 2017.
                    Em 2017 mesmo, eu me mudei pros EUA para me desenvolver na área de pesquisa em biotecnologia animal na Utah State. Foi muito bacana, eu aprendi muito sobre
                    ciência, coleção e validação de informação, gestão de projetos e pessoas, etc.  E nada melhor do que viver em um lugar completamente diferente para desenvolver
                    mais autoconhecimento... Gradualmente, eu fui percebendo que eu preferia morar no Brasil, mesmo com todas as suas questões, viver e partilhar da nossa cultura. 
                    <br /> <br />
                    Esse site foi uma ideia que tive para reviver as minhas habilidades de desenvolvimento web full-stack e, de fato, manter um diário de leitura que já era
                    algo que queria há algum tempo.
                </Text>
            </Profile>
            <Footer />
        </div>
    );
}

const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
`

const Text = styled.p`
    font-family:  "Cambo", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2vw; 
    
    margin-right: 5vw;
`