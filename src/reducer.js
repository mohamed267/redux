/* eslint-disable no-fallthrough */
import { DECREMENT, INCREMENT, RESET } from "./actions"


export const initialState = { count: 0}

export const reducer = (state=initialState , action)=>{
    console.log("state stroggered");
    switch(action.type){
        case INCREMENT :
            return ({...state , count : state.count + 1})
        case DECREMENT : 
            return ({...state , count : state.count - 1})
        case RESET : 
            return ({...state , count : 0})
        default :
            break;

    }

    return state

}