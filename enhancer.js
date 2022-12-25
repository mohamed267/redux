const { createStore, combineReducers  } = require("redux");

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

const logEnhancer = (createStore)=>(reducer , initialState , enhancer)=>{
    const logReducer= (state , action)=>{
        console.log("old State " , state , action)
        const newState =  reducer(state , action);
        console.log("new State " , newState , action)

        return newState

    }

    return createStore(logReducer , initialState , enhancer)
}

const store  =  createStore(reducer ,initialState ,logEnhancer)

store.dispatch({type : "INCREMENT"})







