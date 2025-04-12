import { useSmoothScroll } from "../../../../hooks/useSmoothScroll";
import "./style.scss"

export default function FooterLinks() {
    const { handleScroll } = useSmoothScroll();
    
    return (
        <>
            <div className="footer__links">
                <div className="footer__links-content">
                    <h4 className="footer__links-content-title">Links rápidos</h4>
                    <ul className="footer__links-content-list">
                        <li className="footer__links-content-list-item" onClick={(e) => handleScroll(e, "home")}>Home</li>
                        <li className="footer__links-content-list-item" onClick={(e) => handleScroll(e, "about")}>Sobre nós</li>
                        <li className="footer__links-content-list-item" onClick={(e) => handleScroll(e, "modalities")}>Modalidades</li>
                        <li className="footer__links-content-list-item" onClick={(e) => handleScroll(e, "plans")}>Planos</li>
                        <li className="footer__links-content-list-item" onClick={(e) => handleScroll(e, "contact")}>Contact</li>
                    </ul>
                </div>
                <div className="footer__links-content">
                    <h4 className="footer__links-content-title">Institucional</h4>
                    <ul className="footer__links-content-list">
                        <li className="footer__links-content-list-item">Investidores</li>
                        <li className="footer__links-content-list-item">Fale Conosco</li>
                        <li className="footer__links-content-list-item">Aviso de Privacidade</li>
                        <li className="footer__links-content-list-item">Central de Ajuda</li>
                    </ul>
                </div>
                <div className="footer__links-content">
                    <h4 className="footer__links-content-title">Corporativo</h4>
                    <ul className="footer__links-content-list">
                        <li className="footer__links-content-list-item">Imprensa</li>
                        <li className="footer__links-content-list-item">Quero ser um franqueado</li>
                        <li className="footer__links-content-list-item">Divulgue sua marca</li>
                        <li className="footer__links-content-list-item">Tranbalhe conosco</li>
                    </ul>
                </div>
            </div>
            
        </>
    );
}
