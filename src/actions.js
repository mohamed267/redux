export const ITEMADDED =  "ITEMADDED"
export const ITEMREMOVED = "ITEMREMOVED"
export const PRICEUPDATED = "PRICEUPDATED"
export const QUANTITYUPDATED = "QUANTITYUPDATED"


export const itemAdded = (name , price)=>({
    type : ITEMADDED , 
    payload : {
        name , 
        price
    }
})

export const removeItem = (uuid)=>({
    type : ITEMREMOVED , 
    payload : {
        uuid
    }
})

export const updatePrice = (uuid , price)=>({
    type : PRICEUPDATED , 
    payload : {
        uuid , 
        price
    }
})

export const updateQuantity = (uuid , quantity)=>({
    type : QUANTITYUPDATED , 
    payload : {
        uuid , 
        quantity
    }

})