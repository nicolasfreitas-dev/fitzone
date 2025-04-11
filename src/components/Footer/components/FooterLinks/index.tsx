import { useSmoothScroll } from "../../../../hooks/useSmoothScroll";
import "./style.scss"

export default function FooterLinks() {
    const { handleScroll } = useSmoothScroll();
    
    return (
        <>
            <div className="footer__links">
                <ul className="footer__links-content">
                    <h4 className="footer__links-content-title">Links rápidos</h4>
                    <li className="footer__links-content-item" onClick={(e) => handleScroll(e, "home")}>Home</li>
                    <li className="footer__links-content-item" onClick={(e) => handleScroll(e, "about")}>Sobre nós</li>
                    <li className="footer__links-content-item" onClick={(e) => handleScroll(e, "modalities")}>Modalidades</li>
                    <li className="footer__links-content-item" onClick={(e) => handleScroll(e, "plans")}>Planos</li>
                    <li className="footer__links-content-item" onClick={(e) => handleScroll(e, "contact")}>Contact</li>
                </ul>
                <ul className="footer__links-content">
                    <h4 className="footer__links-content-title">Institucional</h4>
                    <li className="footer__links-content-item">Investidores</li>
                    <li className="footer__links-content-item">Fale Conosco</li>
                    <li className="footer__links-content-item">Aviso de Privacidade</li>
                    <li className="footer__links-content-item">Central de Ajuda</li>
                </ul>
                <ul className="footer__links-content">
                    <h4 className="footer__links-content-title">Corporativo</h4>
                    <li className="footer__links-content-item">Imprensa</li>
                    <li className="footer__links-content-item">Quero ser um franqueado</li>
                    <li className="footer__links-content-item">Divulgue sua marca</li>
                    <li className="footer__links-content-item">Tranbalhe conosco</li>
                </ul>
            </div>
            
        </>
    );
}
