import ModalitiesHeader from "../ModalitiesHeader"
import { Barbell, BoxingGlove, PersonSimpleSwim, PersonSimpleTaiChi } from "@phosphor-icons/react"
import chooseUs1 from "../../../../assets/choose-us-1.jpg"
import chooseUs2 from "../../../../assets/choose-us-2.jpg"
import chooseUs3 from "../../../../assets/choose-us-3.jpg"
import "./style.scss"

export default function ModalitiesGrid() {
    return (
        <div className="choose-us__grid">
            <div className="choose-us__grid-1 choose_us__grid--size">
                <ModalitiesHeader name="Musculação" modalitieImg={<Barbell size={24} color="#fafafa" />} />
                <p className="choose-us__grid-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, ipsam.
                </p>
            </div>
            <div className="choose-us__grid-2 choose_us__grid--size">
                <ModalitiesHeader name="Boxe" modalitieImg={<BoxingGlove size={24} color="#fafafa" />} />
                <p className="choose-us__grid-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, ipsam.
                </p>
            </div>
            <div className="choose-us__grid-3 choose_us__grid--size">
                <img className="choose-us__grid-img" src={ chooseUs1 } alt="modalities image" />
            </div>
            <div className="choose-us__grid-4 choose_us__grid--size">
                <img className="choose-us__grid-img" src={ chooseUs2 } alt="modalities image" />
            </div>
            <div className="choose-us__grid-5 choose_us__grid--size">
                <ModalitiesHeader name="Natação" modalitieImg={<PersonSimpleSwim size={24} color="#fafafa" />} />
                <p className="choose-us__grid-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, ipsam.
                </p>
            </div>
            <div className="choose-us__grid-6 choose_us__grid--size">
                <ModalitiesHeader name="Yoga" modalitieImg={<PersonSimpleTaiChi size={24} color="#fafafa" />} />
                <p className="choose-us__grid-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga, ipsam.
                </p>
            </div>
            <div className="choose-us__grid-7 choose_us__grid--size">
                <img className="choose-us__grid-img" src={ chooseUs3 } alt="modalities image" />
            </div>
        </div>
    );
};
