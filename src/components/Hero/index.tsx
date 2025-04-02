import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react"
import "./style.scss"

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__banner">
                <h1 className="hero__banner-title">Eleve seus treinos</h1>
                <p className="hero__banner-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sunt, voluptatibus est. Voluptates, dignissimos minus.
                    Eveniet!
                </p>
                <button className="hero__banner-btn">Ver planos</button>
                <div className="hero__banner-social">
                    <TwitterLogo className="hero__banner-social-item" size={25} />
                    <FacebookLogo className="hero__banner-social-item" size={25} />
                    <InstagramLogo className="hero__banner-social-item" size={25} />
                </div>
            </div>
        </section>
    );
};
