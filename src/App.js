import React, {useState} from 'react';
import './App.css';
import Student from './Student.js';
// import Message from './Message';



function App() {

  let [count, setcount] = useState(0);
  let [isday, setday] = useState(true);

  return (

    <div className={`${isday ? "box" : "box2"}`}>
    <Student counter = {count}/>
    <h1>Day Time: {isday ? "Moiz" : "Murad"} </h1>
    
    <button onClick={()=> {
      setcount(count = count + 2);}
      }>Count Plus 2</button>
    
    <button onClick={() => {
      setday(!isday)}
      }>Change</button>

    <button onClick={() => {
      setcount(count = count * 0);
      setday(false);
      }
      }>Reset</button>
    </div>
  )
}

export default App;
