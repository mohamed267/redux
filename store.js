const { createStore } = require("redux");

const INCREMENT = "INCREMENT"


const initialState = {value :0 };
const reducer  = (state , action)=>{
    if(action.type=INCREMENT){
        state.value += action.payload
    }
    return state;
}

const store  =  configureStore(reducer);

const incrementAction = {type : INCREMENT , payload : 5}

console.log("store is  ", store)







