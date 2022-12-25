/* eslint-disable no-fallthrough */
import { ITEMADDED } from "./actions"

let id = 1;
export const initialState = { items: [{name : "ayoub"}]}

export const reducer = (state=initialState , action)=>{
    switch(action.type){
        case ITEMADDED :
            return ({
                ...state, 
                items : [
                    ...state.items , 
                    {
                        uuid: id++,
                        ...action.payload
                    }

                ]
            })
        default :
            break;

    }

    return state

}