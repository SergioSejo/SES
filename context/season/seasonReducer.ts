import { SeasonState } from '.';


type SeasonActionType = 
    | { type: 'Season - Change', payload: string } 


export const seasonReducer = ( state: SeasonState, action: SeasonActionType ): SeasonState => {

   switch (action.type) {
      case 'Season - Change':
         return {
            ...state,
            seasonActive: action.payload,
          }
       default:
          return state;
   }

}