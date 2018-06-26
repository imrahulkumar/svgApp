export interface IAppState{
    counter:any;
  
}
export const INITIAL_STATE :IAppState = {
    counter:'' 
}

export function rootReducer(state:IAppState,action):IAppState
{
    debugger
   switch(action.type)
   {
     case 'ON': return {         
         counter:state.counter + ' ' + action.payload}
   
    case 'OFF': return {         
         counter:state.counter + ' ' + action.payload}
   }
    return state;
}



