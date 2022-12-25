const { createStore, combineReducers, compose, applyMiddleware  } = require("redux");

const ADDUSER = "ADDUSER"
const ADDTASK = "ADDTASK"
const initialState = {
    value : 0 ,

};

const reducer =  (state , action)=>state


const monitorEnhancer = (createStore)=>(reducer , initialState , enhancer)=>{
    const monitorReducer = (state , action) =>{
        const start =performance.now()
        const newState =  reducer(state);
        const end  = performance.now()
        const diff = end -  start
        console.log("diff ", diff)

        return  newState
    }

    

    
     

    return createStore(monitorReducer , initialState , enhancer)

}

const  logMiddleware = store=>next=>action=>{
    console.log("old State " , action , store.getState())
    next(action)
    console.log("new State " , action , store.getState())

}

const store  =  createStore(reducer ,initialState , 
    applyMiddleware(logMiddleware)
    
)

store.dispatch({type : "INCREMENT"})







