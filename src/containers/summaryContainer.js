import {connect} from "react-redux"
import SummaryComponent from "../components/summaryComponent"
import { total } from "./selectore"



const mapStateToProps = (state)=>({
    total :  total(state)
})


export const SummaryContainer = connect(
    mapStateToProps
)(SummaryComponent)