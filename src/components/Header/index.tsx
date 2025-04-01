import Navbar from "../Navbar"
import "./style.scss"

export default function Header() {
    return (
        <header className="header">
            <span className="header__logo">FitZone</span>
            <Navbar />
            <button className="header__btn">Matricule-se</button>
        </header>
    )
};
