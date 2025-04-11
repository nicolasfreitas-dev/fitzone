import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react"
import { useSmoothScroll } from "../../../../hooks/useSmoothScroll";
import "./style.scss"

export default function FooterContact() {
    const { handleScroll } = useSmoothScroll();
    
    return (
        <div className="footer__contact">
            <a
                className="footer__contact-title"
                onClick={(e) => handleScroll(e, "home")}
            >
                FitZone
            </a>
            <p className="footer__contact-text">
                Academia FitZone: seu espaço de transformação física e bem-estar
                desde 2018. Venha conhecer nossas instalações e descubra por que
                somos referência em resultados na cidade.
            </p>
            <span className="footer__contact-email">fitzone@gmail.com</span>
            <div className="footer__contact-social">
                <FacebookLogo
                    className="footer__contact-social--hover"
                    size={25}
                />
                <InstagramLogo
                    className="footer__contact-social--hover"
                    size={25}
                />
                <TwitterLogo
                    className="footer__contact-social--hover"
                    size={25}
                />
            </div>
        </div>
    );
}
