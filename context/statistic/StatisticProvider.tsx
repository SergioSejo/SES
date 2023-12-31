import { FC, useReducer, PropsWithChildren } from 'react';
import { StatisticContext, statisticReducer } from '.';
import { Statistic, StatisticWithourId } from '@/interfaces';
import { statisticsApi } from '@/apis';

export interface StatisticState {
    statistics: Statistic[];
}

const Statistics_INITIAL_STATE: StatisticState = {
    statistics: [],
}

export const StatisticProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer( statisticReducer, Statistics_INITIAL_STATE );

    const addStatistic = async(statistic: StatisticWithourId) => {
        const { data } = await statisticsApi.post<Statistic>('',statistic);
        dispatch({ type: 'Statistic - Add', payload: data });
    }

    return (
        <StatisticContext.Provider value={{
            ...state,

            // Methods
            addStatistic
        }}>
            { children }
        </StatisticContext.Provider>
    )
};