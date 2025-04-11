export const useMenu = () => {
    const handleSidebarOpen = (sidebarOpen: HTMLElement | null) => {
        if (!sidebarOpen) return

        sidebarOpen.classList.toggle("header__sidebar--visible");
    };

    return { handleSidebarOpen };
};
