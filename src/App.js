import logo from './logo.svg';
import './App.css';
import { useCounter } from '@chakra-ui/react';

function App() {
  const {count , increment , decrement , reset} =  useCounter()
 
  return (
    <div>
      <p>{count}</p>

      <div>
        <button onClick={()=>decrement()}  >decrement</button>
        <button  onClick={()=>reset()}  >reset</button>
        <button onClick={()=>increment()}  >increment</button>
      </div>
    
    </div>
  );
}

export default App;
