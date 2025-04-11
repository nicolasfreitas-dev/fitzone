import ModalitiesGrid from "./components/ModalitiesGrid"
import "./style.scss"

export default function Modalities() {
    return (
        <section className="modalities" id="modalities">
            <h2 className="modalities__title">Modalidades</h2>
            <p className="modalities__text">
                Os melhores equipamentos e infraestrutura para a prática de diversas modalidades.
            </p>
            <ModalitiesGrid />
        </section>
    );
};
