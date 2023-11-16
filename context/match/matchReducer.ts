import { Match } from '@/interfaces';
import { MatchState } from '.';

type MatchActionType = 
    | { type: 'Match - Add', payload: Match } 


export const matchReducer = ( state: MatchState, action: MatchActionType ): MatchState => {

   switch (action.type) {
      case 'Match - Add':
         return {
            ...state,
            matches: [ ...state.matches, action.payload ],
         }
       default:
          return state;
   }
}