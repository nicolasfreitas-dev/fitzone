import { FacebookLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react"
import "./style.scss"
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

export default function Hero() {
    const { handleScroll } = useSmoothScroll();

    return (
        <section className="hero">
            <div className="hero__banner">
                <h1 className="hero__banner-title">Eleve seus treinos</h1>
                <p className="hero__banner-text">
                    Transforme seu corpo e sua mente com nossa metodologia
                    exclusiva e profissionais especializados.
                </p>
                <a className="hero__banner-btn" href="#plans" onClick={(e) => handleScroll(e, "plans")}>
                    Ver planos
                </a>
                <div className="hero__banner-social">
                    <TwitterLogo
                        className="hero__banner-social-item"
                        size={25}
                    />
                    <FacebookLogo
                        className="hero__banner-social-item"
                        size={25}
                    />
                    <InstagramLogo
                        className="hero__banner-social-item"
                        size={25}
                    />
                </div>
            </div>
        </section>
    );
};
