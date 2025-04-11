import { List, X } from "@phosphor-icons/react";
import { useResize } from "../../hooks/useResize";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import "./style.scss";
import { useMenu } from "../../hooks/useMenu";
import { useRef } from "react";

export default function Header() {
   const sidebarRef = useRef<HTMLElement>(null);
   const { windowSize } = useResize();
   const { handleSidebarOpen } = useMenu();
   const { handleScroll } = useSmoothScroll({ sidebarRef });

    
    return (
        <header className="header">
            <a className="header__logo" href="#home" onClick={(e) => handleScroll(e, "home")}>FitZone</a>
            {windowSize >= 768 ? (
                <ul className="header__navbar">
                    <li className="header__navbar-item" onClick={(e) => handleScroll(e, "home")}>
                        <a href="#home">Página inicial</a>
                    </li>
                    <li className="header__navbar-item" onClick={(e) => handleScroll(e, "about")}>
                        <a href="#about">Sobre nós</a>
                    </li>
                    <li className="header__navbar-item" onClick={(e) => handleScroll(e, "modalities")}>
                        <a href="#modalities">Modalidades</a>
                    </li>
                    <li className="header__navbar-item" onClick={(e) => handleScroll(e, "plans")}>
                        <a href="#plans">Planos</a>
                    </li>
                    <li className="header__navbar-item" onClick={(e) => handleScroll(e, "contact")}>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            ) : (
                <>
                    <List
                        className="header__menu-toggle"
                        size={25}
                        onClick={() => handleSidebarOpen(sidebarRef.current)}
                    />
                    <aside className="header__sidebar" ref={sidebarRef}>
                        <X
                            className="header__menu-close"
                            size={25}
                            onClick={() => handleSidebarOpen(sidebarRef.current)}
                        />
                        <ul className="header__menu">
                            <li className="header__menu-item" onClick={(e) => handleScroll(e, "home")}>
                                <a href="#home">Página inicial</a>
                            </li>
                            <li className="header__menu-item" onClick={(e) => handleScroll(e, "about")}>
                                <a href="#about">Sobre nós</a>
                            </li>
                            <li className="header__menu-item" onClick={(e) => handleScroll(e, "modalities")}>
                                <a href="#modalities">Modalidades</a>
                            </li>
                            <li className="header__menu-item" onClick={(e) => handleScroll(e, "plans")}>
                                <a href="#plans">Planos</a>
                            </li>
                            <li className="header__menu-item" onClick={(e) => handleScroll(e, "contact")}>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </aside>
                </>
            )}
        </header>
    );
}
