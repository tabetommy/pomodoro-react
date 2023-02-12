import { createContext} from 'react';

interface PomodoroState{
    pomodoro:number,
    setPomodoro:(state:number)=>void,
    shortBreak:number,
    setShortBreak:(state:number)=>void,
    longBreak: number,
    setLongBreak:(state:number)=>void
  }

export const GlobalContext= createContext<PomodoroState>({
pomodoro:25,
setPomodoro:()=>{},
shortBreak:5,
setShortBreak:()=>{},
longBreak: 15,
setLongBreak:()=>{},
});

// export const useGlobalContext= () =>useContext(GlobalContext);