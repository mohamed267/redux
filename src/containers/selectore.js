import {createSelector} from "reselect"


const items =  state=> state.items


export const total = createSelector([items] , items=>items.reduce((prev, curr)=>{
    return (curr.quantity * curr.price + prev)
} , 0)
)