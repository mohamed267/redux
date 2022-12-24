const { createStore  } = require("redux");

const INCREMENT = "INCREMENT"
const initialState = {value :0 };
const reducer  = (state =initialState, action)=>{
    if(action.type=INCREMENT){
        return ({
            ...state,
            value : state.value + action.payload ? action.payload :0, 
        })
    }
    return state;
}

const store  =  createStore(reducer);

const incrementAction = {type : INCREMENT , payload : 5}

const increment =  ()=>{
    return incrementAction
}




const subscriber = ()=>console.log("SUBSCRIBER",store.getState())
store.subscribe(subscriber)


store.dispatch(increment())



