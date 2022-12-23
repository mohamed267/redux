const { createStore } = require("redux");


const initialState = {value :0 };

const reducer  = (state , action)=>{
    return state;
}



const store  =  configureStore(reducer);


console.log("store is  ", store)







