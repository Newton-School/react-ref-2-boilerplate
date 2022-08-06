import React from 'react'
import '../styles/App.css';
import { useState, useEffect, useRef } from "react";

const delay = 1;

 function App() {
  const [counter, setCounter] = useState(0);
  const timer = useRef(null); // we can save timer in useRef and pass it to child

  useEffect(() => {
    // useRef value stored in .current property
    timer.current = setInterval(() => setCounter((v) => v + 1), delay * 1000);
    // clear on component unmount
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className='App'>
      <div>Interval is working, counter is: {counter}</div>
      <Child counter={counter} currentTimer={timer.current} />
    </div>
  );
}

function Child({ counter, currentTimer }) {
   /**
    * @todo : complete this function, 
    * it should stop the timer when counter reaches 2 seconds 
    * and show that 2 second on the UI 
    */

}
export default App;
