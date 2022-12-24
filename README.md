# redux
## Table of Contents
1. [Redux functions](#redux-functions)
2. [composer](#composer)
3. [Create store](#create-store)
4. [Subscribe](#subscribe)
5. [Bind Actions Creator](#bind-actions-creator)
## Redux Functions:
***
![redux functions ](./functionsredux.png)
## compose
> compose simply do combining the function specifiied as parameters to create a new function . 

## Create Store
>Store take a reducers which are simply a function  (action , state)=>state ....
two things go in (action and state ) and return a state resulting from the previous state and the actions that happend.
state is a data structure that represent your app's data , occasunaly actions will happend that will trigger change on state

```
import {createStore} from "redux";
const initialState = {value :0 };

const reducer  = (state=initialState , action)=>{
    return state;
}


const store  =  configureStore(reducer);
```

>Actions can be called  this way 

```
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

store.dispatch(increment())
```

## Subscriber 
>when the any event are triggered the subscrier listenner will be called

```
const subscriber = ()=>console.log("SUBSCRIBER",store.getState())
store.subscribe(subscriber)
```

## Bind Actions Creator

>We can simplify dispatching action by serializing it and bid the actions in a object

```
import {bindActionCreators} from "redux"
const actions = bindActionCreators({ increment , clear } , store.dispatch)
actions.increment()
actions.clear()

```

>another alternative is to use compose

```
const [increment , clear] = [increment , add].map(func=>compose(store.dispatch , func))

```



## Combine Reducers

>we has a nested store has to arrays users and task it begin to be hard to handling this data structure and for bigger project it become more  way harder

```
const { createStore  } = require("redux");

const ADDUSER = "ADDUSER"
const ADDTASK = "ADDTASK"
const initialState = {
    users : [], 
    tasks: []

};
const reducer  = (state =initialState, action)=>{
    if(action.type=ADDUSER){
        return ({
            ...state,
            users : [
                ...state.users , 
                payload
            ]
        })
    }

    if(action.type=ADDTASK){
        return ({
            ...state,
            tasks : [
                ...state.tasks , 
                payload
            ]
        })
    }
    return state;
}

const store  =  createStore(reducer)


```

> we can crate two reducers one for the users and the other  fo the tasks  and combining them into one reducer using "combineReducers"

````
import {combineReducers} from "reduc"
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

const store  =  createStore(reducer)```