import FooterContact from "./components/FooterContact";
import FooterLinks from "./components/FooterLinks";
import "./style.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <FooterContact />
                <FooterLinks />
            </div>
            <div className="footer__disclaimer">
                <p className="footer__disclaimer-text">
                    Site desenvolvido com propósito de aprimoramento
                    profissional © {new Date().getFullYear()} Nicolas Freitas.
                    Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};
