import {connect} from "react-redux"
import NewItemCard from "../components/NewItemCard"
import {bindActionCreators} from "redux"
import { itemAdded, removeItem, updatePrice, updateQuantity } from "../actions"
import ItemComponent from "../components/itemComponent"

const mapDispatchToProps = (dispatch , ownProps)=>{
    return bindActionCreators(
        {
            remove : ()=>removeItem(ownProps.item.uuid) ,
            updatePrice : (price)=>updatePrice(ownProps.item.uuid , price) , 
            updateQuantity :  (quantity)=>updateQuantity(ownProps.item.uuid , quantity) , 
        
        },
        dispatch
        
    )
}

export const ItemContainer = connect(
    null, 
    mapDispatchToProps
)(ItemComponent)