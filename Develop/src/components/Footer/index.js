import React from 'react';
import { Github} from "react-icons/fa";

function Footer() {
    return (
            <div className="footer">
                <footer>
                        <a href="https://github.com/Fabitheguy003" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <Github />
                            </li>
                        </a>
                </footer>
            </div>
        );
    }

export default Footer;