export const ITEMADDED =  "ITEMADDED"


export const itemAdded = (name , price)=>({
    type : ITEMADDED , 
    payload : {
        name , 
        price
    }
})