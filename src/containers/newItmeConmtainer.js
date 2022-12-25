import {connect} from "react-redux"
import NewItemCard from "../components/NewItemCard"
import {bindActionCreators} from "redux"
import { itemAdded } from "../actions"

const mapDispatchToProps = (dispatch , ownProps)=>{
    console.log("our own " , ownProps)
    return bindActionCreators(
        {
            onSubmit : (name , price)=>{
                dispatch(itemAdded(name , price))
            }
        },
        dispatch
        
    )
}

export const NewItemContainer = connect(
    null, 
    mapDispatchToProps
)(NewItemCard)