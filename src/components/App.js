import React,{useState} from 'react';
import './../styles/App.css';

const App = () => {
  const [count, SetCount] = useState(0);
  
  return(
    <div>
      <p>Button clicked {count} times</p>
      <button type='button' style={{padding:"10px"}}
        onClick={e=>SetCount(count +1)}>Click me</button>
    </div>
  )
}
export default App

