import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./../style/reset.css";
import "./../style/style.css";

export default function Footer() {

    return (
        <div className="Footer">
            <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener norerrer">
                <FaLinkedin size={30} color="black" />
            </a>
            <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noopener norerrer">
                <FaGithub size={30} color="black" />
            </a>
        </div>
    );
}
