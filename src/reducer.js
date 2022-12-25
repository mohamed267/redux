/* eslint-disable no-fallthrough */
import { ITEMADDED, ITEMREMOVED, PRICEUPDATED, QUANTITYUPDATED, updateItem, updatePrice } from "./actions"

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
                        quantity: 1, 
                        ...action.payload
                    }

                ]
            })
        case ITEMREMOVED:
            return {
                items : state.items.filter(item=>(
                item.uuid !== action.payload.uuid
            ))
                }
        case PRICEUPDATED:
            return{
                items: state.items.map(item=>{
                    if(item.uuid === action.payload.uuid){
                        return {
                            ...item , 
                            price : action.payload.price
                        }
                    }

                    return item
                })
            }
        case QUANTITYUPDATED:
                return{
                    items: state.items.map(item=>{
                        if(item.uuid === action.payload.uuid){
                            return {
                                ...item , 
                                quantity : action.payload.quantity
                            }
                        }
    
                        return item
                    })
                }
        default :
            break;

    }

    return state

}