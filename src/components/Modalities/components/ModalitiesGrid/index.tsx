import ModalitiesHeader from "../ModalitiesHeader";
import {
    Barbell,
    BoxingGlove,
    PersonSimpleSwim,
    PersonSimpleTaiChi,
} from "@phosphor-icons/react";
import modalitie3 from "../../../../assets/boxing.jpg";
import modalitie2 from "../../../../assets/natacao.jpg";
import modalitie1 from "../../../../assets/yoga.jpg";
import "./style.scss";

export default function ModalitiesGrid() {
    return (
        <div className="modalities__grid">
            <div className="modalities__grid-1 modalities__grid--size">
                <ModalitiesHeader
                    name="Musculação"
                    modalitieImg={<Barbell size={24} color="#fafafa" />}
                />
                <p className="modalities__grid-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, ipsam.
                </p>
            </div>
            <div className="modalities__grid-2 modalities__grid--size">
                <ModalitiesHeader
                    name="Boxe"
                    modalitieImg={<BoxingGlove size={24} color="#fafafa" />}
                />
                <p className="modalities__grid-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, ipsam.
                </p>
            </div>
            <div className="modalities__grid-5 modalities__grid--size">
                <ModalitiesHeader
                    name="Natação"
                    modalitieImg={
                        <PersonSimpleSwim size={24} color="#fafafa" />
                    }
                />
                <p className="modalities__grid-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, ipsam.
                </p>
            </div>
            <div className="modalities__grid-6 modalities__grid--size">
                <ModalitiesHeader
                    name="Yoga"
                    modalitieImg={
                        <PersonSimpleTaiChi size={24} color="#fafafa" />
                    }
                />
                <p className="modalities__grid-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, ipsam.
                </p>
            </div>
            <div className="modalities__grid-3 modalities__grid--size">
                <img
                    className="modalities__grid-img--size"
                    src={modalitie1}
                    alt="modalities image"
                />
            </div>
            <div className="modalities__grid-4 modalities__grid--size">
                <img
                    className="modalities__grid-img--size"
                    src={modalitie2}
                    alt="modalities image"
                />
            </div>
            <div className="modalities__grid-7 modalities__grid--size">
                <img
                    className="modalities__grid-img--size"
                    src={modalitie3}
                    alt="modalities image"
                />
            </div>
        </div>
    );
}
