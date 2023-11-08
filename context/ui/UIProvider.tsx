import { FC, useReducer, PropsWithChildren } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
    titlePage: string;
}


const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    titlePage: 'Inicio'
}


export const UIProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE );


    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }

    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })

    const changeTitle = (title:string) => dispatch({ type: 'UI - Change title', payload: title })

    return (
        <UIContext.Provider value={{
            ...state,

            // Methods
            closeSideMenu,
            openSideMenu,
            changeTitle,
        }}>
            { children }
        </UIContext.Provider>
    )
};