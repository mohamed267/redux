# redux
## Table of Contents
1. [Redux functions](#redux-functions)
2. [composer](#composer)
3. [Create store](#create-store)
## Redux Functions:
***
![redux functions ](./functionsredux.png)
## compose
> compose simply do combining the function specifiied as parameters to create a new function . 

## Create Store
>Store take a reducers which are simply a function  (action , state)=>state ....
two things go in (action and state ) and return a state resulting from the previous state and the actions that happend.
state is a data structure that represent your app's data , occasunaly actions will happend that will trigger change on state

````
```
import {createStore} from "redux";
const initialState = {value :0 };

const reducer  = (state , action)=>{
    return state;
}

const store  =  configureStore(reducer);
```
````

