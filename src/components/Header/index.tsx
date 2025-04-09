import { List, X } from "@phosphor-icons/react";
import { useResize } from "../../hooks/useResize";
import "./style.scss";

export default function Header() {
    const { windowSize } = useResize();

    const handleSidebarVisible = () => {
        const sidebar = document.querySelector(".header__sidebar");

        sidebar?.classList.toggle("header__sidebar--visible");
    };

    return (
        <header className="header">
            <span className="header__logo">FitZone</span>
            {windowSize >= 768 ? (
                <nav className="header__navbar">
                    <li className="header__navbar-item">
                        <a href="#home">Página inicial</a>
                    </li>
                    <li className="header__navbar-item">
                        <a href="#about">Sobre nós</a>
                    </li>
                    <li className="header__navbar-item">
                        <a href="#modalities">Modalidades</a>
                    </li>
                    <li className="header__navbar-item">
                        <a href="#contact">Contato</a>
                    </li>
                    <button className="header__btn">Área do cliente</button>
                </nav>
            ) : (
                <>
                    <List
                        className="header__menu-toggle"
                        size={25}
                        onClick={() => handleSidebarVisible()}
                    />
                    <aside className="header__sidebar">
                        <X
                            className="header__menu-close"
                            size={25}
                            onClick={() => handleSidebarVisible()}
                        />
                        <nav className="header__menu">
                            <li className="header__menu-item">
                                <a href="#home">Página inicial</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#about">Sobre nós</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#modalities">Modalidades</a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#contact">Contato</a>
                            </li>
                            <button className="header__btn">
                                Área do cliente
                            </button>
                        </nav>
                    </aside>
                </>
            )}
        </header>
    );
}
