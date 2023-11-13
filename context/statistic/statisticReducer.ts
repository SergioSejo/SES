import { Statistic } from '@/interfaces';
import { StatisticState } from '.';

type StatisticActionType = 
    | { type: 'Statistic - Add', payload: Statistic } 
    | { type: 'Statistics Refresh', payload: Statistic[] } 


export const statisticReducer = ( state: StatisticState, action: StatisticActionType ): StatisticState => {

   switch (action.type) {
      case 'Statistic - Add':
         return {
            ...state,
            statistics: [ ...state.statistics, action.payload ],
         }
      case 'Statistics Refresh':
         return {
            ...state,
            statistics: [ ...action.payload ],
         }
       default:
          return state;
   }

}