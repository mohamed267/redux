import { useDispatch, useSelector } from "react-redux"
import { increment , decrement , reset } from "./actions"
import { useActions } from "./useActions"

const useCounter = ()=>{
    const count =  useSelector(state=>state.count)
    const dispatch =  useDispatch()
    const actions = useActions({increment , decrement , reset})


    return (
        {
            count , 
            ...actions
        }
    )


}

