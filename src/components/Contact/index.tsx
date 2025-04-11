import contactImg from "../../assets/contact.webp"
import "./style.scss"

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <img
                className="contact__img"
                src={contactImg}
                alt="Imagem de fundo da seção de contato"
                loading="lazy"
                width={1152}
                height={768}
            />
            <div className="contact__overlay"></div>
            <div className="contact__text">
                <h2 className="contact__text-title">Entre em contato</h2>
                <h3 className="contact__text-number">(85) 98454-9854</h3>
            </div>
        </section>
    );
};
