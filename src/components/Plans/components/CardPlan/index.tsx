import { CheckCircle } from "@phosphor-icons/react"
import "./style.scss"

type CardPlansProps = {
    planName: string,
    planDescription: string,
    planValue: string,
    fidelity: string
}

export default function CardPlan({ planName, planDescription, planValue, fidelity }: CardPlansProps) {
    let isPremiumPlus;

    if (planName === "Plano Premium Plus") {
        isPremiumPlus = true;
    } else {
        isPremiumPlus = false;
    }

    const benefits = [
        "Área de musculação e aeróbicos.",
        "Fitzone App (treinos online)",
        "Acesso ilimitado a +100 academias.",
        "Leve 5 amigos por mês para treinar com você.",
        "Cadeira de massagem.",
        "Acompanhamento nutricional.",
        "Acesso a uma modalidade esportiva grátis"
    ];

    const basicBenefitsNotIncluded =
        planName === "Plano Básico"
            ? [
                  "Acesso ilimitado a +100 academias.",
                  "Leve 5 amigos por mês para treinar com você.",
                  "Cadeira de massagem.",
                  "Acompanhamento nutricional.",
                  "Acesso a uma modalidade esportiva grátis",
              ]
            : [];

    const premiumBenefitsNotIncluded =
        planName === "Plano Premium"
            ? [
                  "Acompanhamento nutricional.",
                  "Acesso a uma modalidade esportiva grátis",
              ]
            : [];

    return (
        <div
            className={`cardPlan ${
                isPremiumPlus ? "cardPlan--premiumPlus" : ""
            }`}
        >
            <h3 className="cardPlan__name">{planName}</h3>
            <p className="cardPlan__pricing">
                R$ {planValue} <span>/ Mês</span>
            </p>
            <p className={`${planName !== "Plano Premium" ? "cardPlan__fidelity" : "cardPlan__no-fidelity"}`}>{fidelity}</p>
            <p className="cardPlan__description">{planDescription}</p>
            <ul className="cardPlan__benefits">
                {benefits.map((benefit) => (
                    <li
                        key={benefit}
                        className={`cardPlan__benefits-item ${
                            basicBenefitsNotIncluded.includes(benefit)
                                ? "benefit--excluded"
                                : ""
                        } ${
                            premiumBenefitsNotIncluded.includes(benefit)
                                ? "benefit--excluded"
                                : ""
                        }`}
                    >
                        <CheckCircle size={25} />
                        <p>{benefit}</p>
                    </li>
                ))}
            </ul>
            <button className="cardPlan__button">Contratar agora</button>
        </div>
    );
};
