import { createContext } from 'react';
import { Statistic, StatisticWithourId } from '../../interfaces';

interface ContextProps {
    statistics: Statistic[];

    // Methods
    addStatistic: (statistic: StatisticWithourId) => void;
}


export const StatisticContext = createContext({} as ContextProps );