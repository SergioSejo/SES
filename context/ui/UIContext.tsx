import { createContext } from 'react';

interface ContextProps {
    sidemenuOpen: boolean;
    titlePage: string;

    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
    changeTitle: (title: string) => void;
}

export const UIContext = createContext({} as ContextProps );