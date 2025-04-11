import { RefObject } from "react";

type SmoothScrollProps = {
    sidebarRef?: RefObject<HTMLElement | null>;
};

export const useSmoothScroll = ({ sidebarRef }: SmoothScrollProps = {}) => {
    const handleScroll = (
        e: React.MouseEvent<HTMLElement>,
        targetId: string
    ) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }

        if (sidebarRef?.current) {
            sidebarRef.current.classList.remove("header__sidebar--visible");
        }
    };

    return { handleScroll };
};
