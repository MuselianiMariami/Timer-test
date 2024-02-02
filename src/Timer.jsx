import { useState, useEffect } from 'react'

import './timer.css'

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
 
  useEffect(() => {
     let interval;
     if (isActive) {
       interval = setInterval(() => {
         setTime((time) => time + 1);
       }, 1000);
     } else if (!isActive && time !== 0) {
       clearInterval(interval);
     }
     return () => clearInterval(interval);
  }, [isActive, time]);
 
  const handleStart = () => {
     setIsActive(true);
  };
 
  const handleStop = () => {
     setIsActive(false);
  };
 
  const handleReset = () => {
     setTime(0);
  };
 
  return (
     <div>
       <h1>Timer App</h1>
       <p>Elapsed Time: {time} seconds</p>
       <button onClick={handleStart}>Start</button>
       <button onClick={handleStop}>Stop</button>
       <button onClick={handleReset}>Reset</button>
     </div>
  );
 };

export default Timer
