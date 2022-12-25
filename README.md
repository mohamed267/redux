# redux
## Table of Contents
1. [React Redux](#react-redux)
2. [Bind Actions](#bind-actions)
3. [Api Connect]("#connect")
## REACT REDUX

> react redux is an intermediary from  react and redux so you can you can use redux as a global store for your react app


> for setting app redux on react we need to  wrap our app with a REDUX provider and pass the store as a parameter
```js
  import {Provider} from "react-redux"
  <Provider
    store={store}
  >
    <App />

  </Provider>

```
> so like that we can access the store on the app by using the useSelector function and dispatch actions using useDispatch


```jsx
import { useDispatch, useSelector } from 'react-redux';

import {decrement, increment, reset} from "./actions"

function App() {
  const counter =  useSelector(state=>state.count)
  const dispatch =  useDispatch()
  return (
    <div>
      <p>{counter}</p>

      <div>
        <button onClick={()=>{dispatch(decrement())}}  >decrement</button>
        <button  onClick={()=>{dispatch(reset())}}  >reset</button>
        <button onClick={()=>{dispatch(increment())}}  >increment</button>
      </div>
    
    </div>
  );
}

export default App;

```



## bind actions 

> for making  it more flexibla and reusible we can create some hooks 
> first hook is useActions  so that we can compose all actios with the dispatch function

```jsx
import {useMemo} from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";

export const useActions = (actions)=>{
    const dispatch =  useDispatch();
    return useMemo(() =>  bindActionCreators(actions , dispatch) , [actions , dispatch] )
}

>use Memo is used for caching the result if the actions and dispatch are the same  we dont need to recalculate  the result

```
> second hook is use counter that contain the logic for the counter

```jsx
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



```

## Connect

> we can use higer order function to pass the state using the connect function


```jsx

import {connect} from "react-redux"

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(
        {
            onSubmit : (price , name)=>{
                dispatch(itemAdded(name , price))
            }
        },
        dispatch
        
    )
}

const mapStateToProps = (state)=>({
    items: state.items
})

export const NewItemContainer = connect(
    mapStateToProps , 
    mapDispatchToProps
)(Component)

```

> we can pass the dispatch function itself or we can esulate the store roles and pass onSubmit function that will be called when needed like thatwe are completely esolating  the component from the store logic
> items  and onSumit  will be passed as props to the Component 