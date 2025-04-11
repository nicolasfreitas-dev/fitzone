import { ReactNode } from "react";
import "./style.scss"

type ModalitiesHeaderProps = {
    name: string
    modalitieImg: ReactNode
}

export default function ModalitiesHeader({ name, modalitieImg }: ModalitiesHeaderProps) {
    return (
        <div className="modalities__header">
            <div className="modalities__header-img">
                { modalitieImg }
            </div>
            <h3 className="modalities__header-name">{ name }</h3>
        </div>
    );
};
