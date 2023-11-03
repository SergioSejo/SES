import { createContext } from 'react';


interface ContextProps {
    seasonActive: string;

    // Methods
    changeSeason: (number:string) => void;
}


export const SeasonContext = createContext({} as ContextProps );