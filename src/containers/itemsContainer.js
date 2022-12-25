import {connect} from "react-redux"
import ItemsComponent from "../components/ItemsComponent"



const mapStateToProps = (state)=>({
    items: state.items
})


export const ItemsContainer = connect(
    mapStateToProps
)(ItemsComponent)