import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import "./../style/reset.css";
import "./../style/style.css";

export default function Footer() {

    return (
        <FooterBox>
            <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener norerrer">
                <FaLinkedin size="1.7em" color="black" />
            </a>
            <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noopener norerrer">
                <FaGithub size="1.7em" color="black" />
            </a>
        </FooterBox>
    );
}

const FooterBox = styled.div`
    width: 100%;
    height: 5vh;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1vw;
    z-index: 1;
    position: fixed;
    background-color: #ef9c77;
`