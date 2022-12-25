# redux
## Table of Contents
1. [React Redux](#react-redux)
## REACT REDUX

> react redux is an intermediary from  react and redux so you can you can use redux as a global store for your react app


> for setting app redux on react we need to  wrap our app with a REDUX provider and pass the store as a parameter
```
  import {Provider} from "react-redux"
  <Provider
    store={store}
  >
    <App />

  </Provider>

```
> so like that we can access the store on the app by using the useSelector function and dispatch actions using useDispatch


```
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