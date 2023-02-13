import React, {useState} from 'react';
import Setting from './components/setting/setting';
import CountDownTimer from './components/countdownTimer/countdownTimer';
import './App.css';
import { GlobalContext } from './components/GlobalState';




function App() {

  const [pomodoro, setPomodoro]= useState<number>(25);
  const [shortBreak, setShortBreak]= useState<number>(5);
  const [longBreak, setLongBreak]= useState<number>(15);

  return (
    <div className='App'>
    <GlobalContext.Provider 
    value={{
    pomodoro,setPomodoro,
    shortBreak,setShortBreak,
    longBreak,setLongBreak}}>
        <Setting />
        <CountDownTimer />    
    </GlobalContext.Provider>
    </div>
  );
}

export default App;
