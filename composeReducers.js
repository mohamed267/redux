const { createStore, combineReducers  } = require("redux");

const ADDUSER = "ADDUSER"
const ADDTASK = "ADDTASK"
const initialState = {
    users : [], 
    tasks: []

};
const userReducer  = (state =initialState.users, action)=>{
    if(action.type=ADDUSER){
        return (
            [
                ...state.users , 
                payload
            ]
        )
    }

   
    return state;
}

const taskReducer  = (state =initialState.tasks, action)=>{
    if(action.type=ADDTASK){
        return ( 
            [
                ...state.tasks , 
                payload
            ]
            )
    }
    return state;
}

const reducer =  combineReducers(
    {
        users : userReducer , 
        tasks : taskReducer
    }
)

const store  =  createStore(reducer)







