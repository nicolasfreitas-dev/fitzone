import "./style.scss"

export default function Achievements() {
    return (
        <section className="achievements">
            <div className="achievements__item">
                <span className="achievements__item-number">6+</span>
                <p className="achievements__item-text">Anos de serviço</p>
            </div>
            <div className="achievements__item">
                <span className="achievements__item-number">10+</span>
                <p className="achievements__item-text">Profissionais</p>
            </div>
            <div className="achievements__item">
                <span className="achievements__item-number">731+</span>
                <p className="achievements__item-text">Usuários satisfeitos</p>
            </div>
            <div className="achievements__item">
                <span className="achievements__item-number">5</span>
                <p className="achievements__item-text">Unidades</p>
            </div>
        </section>
    )
};
