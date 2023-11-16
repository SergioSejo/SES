import { FC, useReducer, PropsWithChildren } from 'react';
import { MatchContext, matchReducer } from '.';
import { Match, MatchWithoutId } from '@/interfaces';
import { matchesApi } from '@/apis';

export interface MatchState {
    matches: Match[];
}

const Matches_INITIAL_STATE: MatchState = {
    matches: [],
}

export const MatchProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer( matchReducer, Matches_INITIAL_STATE );

    const addMatch = async(match: MatchWithoutId) => {
        const { data } = await matchesApi.post<Match>('',match);
        dispatch({ type: 'Match - Add', payload: data });
    }

    return (
        <MatchContext.Provider value={{
            ...state,

            // Methods
            addMatch
        }}>
            { children }
        </MatchContext.Provider>
    )
};