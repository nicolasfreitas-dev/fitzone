import aboutImg from "../../assets/about-img.webp"
import "./style.scss"

export default function About() {
    return (
        <section className="about" id="about">
            <h2 className="about__title">Sobre nós</h2>
            <div className="about__banner">
                <p className="about__banner-text">
                    Desde 2018, a FitZone tem sido mais que um espaço para
                    exercícios - somos uma comunidade dedicada à transformação
                    completa de nossos membros. Com uma equipe de profissionais
                    certificados, equipamentos modernos e programas
                    personalizados, criamos um ambiente acolhedor onde pessoas
                    de todas as idades e níveis de condicionamento físico
                    encontram suporte para alcançar seus objetivos de saúde e
                    bem-estar. Acreditamos que fitness vai além da estética, e
                    nosso compromisso é ajudar você a conquistar sua melhor
                    versão em um ambiente inclusivo e motivador.
                </p>
                <img
                    className="about__banner-img"
                    src={aboutImg}
                    alt="fitzone trainer and student"
                    loading="lazy"
                    width={1152}
                    height={768}
                />
            </div>
        </section>
    );
};
