import CardPlan from "./components/CardPlan"
import "./style.scss"

export default function Plans() {
    return (
        <section className="plans">
            <div className="plans__header">
                <h2 className="plans__header-title">Planos</h2>
                <div className="plans__header-btn">
                    <button className="plans__header-btn--monthly">Mensal</button>
                    <button className="plans__header-btn--yearly">Anual</button>
                </div>
            </div>
            <div className="plans__card">
                <CardPlan 
                    planName="Plano Básico"
                    planDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nulla, culpa facilis consectetur cupiditate fugiat dolorum excepturi rem dolore maiores?"
                    planValue="99,90"
                    />
                <CardPlan 
                    planName="Plano Premium+"
                    planDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nulla, culpa facilis consectetur cupiditate fugiat dolorum excepturi rem dolore maiores?"
                    planValue="149,90"
                    />
                <CardPlan 
                    planName="Plano Premium"
                    planDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nulla, culpa facilis consectetur cupiditate fugiat dolorum excepturi rem dolore maiores?"
                    planValue="119,90"
                    />
                    
            </div>
        </section>
    )
};
