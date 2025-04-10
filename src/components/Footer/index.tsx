import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react"
import "./style.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <span>FitZone</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque, architecto.
                    </p>
                    <span>fitzone@gmail.com</span>
                    <div>
                        <FacebookLogo />
                        <InstagramLogo />
                        <TwitterLogo />
                    </div>
                </div>
                <div className="footer-links">
                    <ul>
                        <h4>Links rápidos</h4>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                    <ul>
                        <h4>Lorem, ipsum.</h4>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                    <ul>
                        <h4>Lorem, ipsum.</h4>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                    <ul>
                        <h4>Lorem, ipsum.</h4>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
