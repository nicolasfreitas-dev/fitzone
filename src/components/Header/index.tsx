import "./style.scss"

export default function Header() {
    return (
        <header className="header">
            <span className="header__logo">FitZone</span>
            <nav className="header__navbar">
                <li className="header__navbar-item">Página inicial</li>
                <li className="header__navbar-item">Sobre</li>
                <li className="header__navbar-item">Serviços</li>
                <li className="header__navbar-item">Contato</li>
            </nav>
            <button className="header__btn">Cadastre-se</button>
        </header>
    );
};
