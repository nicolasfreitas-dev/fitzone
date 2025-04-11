import CardPlan from "./components/CardPlan"
import "./style.scss"

export default function Plans() {
    return (
        <section className="plans" id="plans">
            <div className="plans__header">
                <h2 className="plans__header-title">Planos</h2>
            </div>
            <div className="plans__card">
                <CardPlan
                    planName="Plano Básico"
                    planDescription="Nosso plano mais econômico para você se exercitar quando e quanto quiser na academia que escolher!"
                    planValue="99,90"
                    fidelity="12 meses de fidelidade"
                />
                <CardPlan
                    planName="Plano Premium Plus"
                    planDescription="Treine em qualquer academia da FitZone. São mais de 100 unidades em todo país."
                    planValue="149,90"
                    fidelity="12 meses de fidelidade"
                />
                <CardPlan
                    planName="Plano Premium"
                    planDescription="Nosso plano mensal para você que não quer se comprometer, mas quer treinar em uma academia de alto padrão!"
                    planValue="119,90"
                    fidelity="Sem fidelidade"
                />
            </div>
        </section>
    );
};
