import {useContext, useState, useEffect} from 'react';
import { GlobalContext } from '../GlobalState';


const CountDownTimer=()=>{
    // const {pomodoro,shortBreak, longBreak}= useContext(GlobalContext);

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
      let interval:any;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    return (
      <div className="stopwatch">
        <div className="numbers">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button onClick={() => setRunning(true)}>Start</button>
          <button onClick={() => setRunning(false)}>Stop</button>
          <button onClick={() => setTime(0)}>Reset</button>       
        </div>
      </div>
    );
}

export default CountDownTimer