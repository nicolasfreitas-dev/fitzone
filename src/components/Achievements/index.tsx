import "./style.scss"

export default function Achievements() {
    return (
        <section className="achievements">
            <div className="achievements__item">
                <span className="achievements__item-number">5+</span>
                <p className="achievements__item-text">Anos de serviço</p>
            </div>
            <div className="achievements__item">
                <span className="achievements__item-number">15+</span>
                <p className="achievements__item-text">Treinadores certificados</p>
            </div>
            <div className="achievements__item">
                <span className="achievements__item-number">731+</span>
                <p className="achievements__item-text">Usuários satisfeitos</p>
            </div>
        </section>
    )
};
