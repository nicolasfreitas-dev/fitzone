import { ReactNode } from "react";
import "./style.scss"

type ModalitiesHeaderProps = {
    name: string
    modalitieImg: ReactNode
}

export default function ModalitiesHeader({ name, modalitieImg }: ModalitiesHeaderProps) {
    return (
        <div className="choose-us__header">
            <div className="choose-us__header-img">
                { modalitieImg }
            </div>
            <h3 className="choose-us__header-name">{ name }</h3>
        </div>
    );
};
