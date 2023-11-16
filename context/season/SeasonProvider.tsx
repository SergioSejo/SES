import { FC, useReducer, PropsWithChildren } from 'react';
import { SeasonContext, seasonReducer } from '.';

export interface SeasonState {
    seasonActive: string;
}

const Season_INITIAL_STATE: SeasonState = {
    seasonActive: "1",
}

export const SeasonProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer( seasonReducer, Season_INITIAL_STATE );


    const changeSeason = (number: string) => {
        dispatch({ type: 'Season - Change', payload: number });
    }

    return (
        <SeasonContext.Provider value={{
            ...state,

            // Methods
            changeSeason,
        }}>
            { children }
        </SeasonContext.Provider>
    )
};