import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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
