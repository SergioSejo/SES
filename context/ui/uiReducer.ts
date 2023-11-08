import { UIState } from './';


type UIActionType = 
    | { type: 'UI - Open Sidebar' } 
    | { type: 'UI - Close Sidebar' }
    | { type: 'UI - Change title', payload: string }


export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {

   switch (action.type) {
      case 'UI - Open Sidebar':
         return {
            ...state,
            sidemenuOpen: true,
          }

      case 'UI - Close Sidebar':
          return {
            ...state,
            sidemenuOpen: false,
           }
      case 'UI - Change title':
         return {
            ...state,
            titlePage: action.payload,
         }

       default:
          return state;
   }

}