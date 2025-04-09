import "./style.scss"
import {  } from "@phosphor-icons/react"

type CardPlansProps = {
    planName: string,
    planDescription: string,
    planValue: string,
}

export default function CardPlan({ planName, planDescription, planValue }: CardPlansProps) {
    return (
        <div className="cardPlan">
            <h3 className="cardPlan__name">{planName}</h3>
            <span className="cardPlan__pricing">R$ {planValue}</span>
            <p className="cardPlan__description">{planDescription}</p>
            <ul className="cardPlan__benefits">
                <li className="cardPlan__benefits-item">
                    Lorem ipsum dolor sit amet, consectetur.
                </li>
                <li className="cardPlan__benefits-item">
                    Lorem ipsum dolor sit amet, consectetur.
                </li>
                <li className="cardPlan__benefits-item">
                    Lorem ipsum dolor sit amet, consectetur.
                </li>
                <li className="cardPlan__benefits-item">
                    Lorem ipsum dolor sit amet, consectetur.
                </li>
                <li className="cardPlan__benefits-item">
                    Lorem ipsum dolor sit amet, consectetur.
                </li>
                <li className="cardPlan__benefits-item">
                    Lorem ipsum dolor sit amet, consectetur.
                </li>
            </ul>
            <button className="cardPlan__button">Contratar agora</button>
        </div>
    );
};
