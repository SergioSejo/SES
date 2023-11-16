import { createContext } from 'react';
import { Match, MatchWithoutId } from '../../interfaces';

interface ContextProps {
    matches: Match[];

    // Methods
    addMatch: (match: MatchWithoutId) => void;
}


export const MatchContext = createContext({} as ContextProps );