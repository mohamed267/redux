import {connect} from "react-redux"
import NewItemCard from "../components/NewItemCard"
import {bindActionCreators} from "redux"
import { itemAdded } from "../actions"

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(
        {
            onSubmit : (price , name)=>{
                dispatch(itemAdded(name , price))
            }
        },
        dispatch
        
    )
}

export const NewItemContainer = connect(
    mapDispatchToProps
)(NewItemCard)