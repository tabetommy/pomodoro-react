import React,{useContext} from 'react';
import { GlobalContext } from '../GlobalState';


const NumberInput=()=>{ 
    //importing the state from GlobalState.tsx
    const {pomodoro,setPomodoro, 
        shortBreak, setShortBreak, 
        longBreak, setLongBreak}= useContext(GlobalContext);
    

    const changeHandler=(e:any): void=>{
        //setchange based on input element's name
        if(e.target.name==="pomodoro"){
            setPomodoro(e.target.value)
        }else if(e.target.name==="short-break"){
            setShortBreak(e.target.value)
        }else if(e.target.name==="long-break"){
            setLongBreak(e.target.value)
        }
    }
    
    return(
        <div>
            <label htmlFor="pomodoro">Pomodoro</label>
            <input type="number" id="pomodoro "
            name="pomodoro" min="0" 
            value={pomodoro}
            onChange={changeHandler}
            /><br />
            <label htmlFor="short-break">Short Break</label>
            <input type="number" id="short-break"
            name="short-break" min="0" 
            value={shortBreak}
            onChange={changeHandler}
            /><br />
            <label htmlFor="long-break">Long break</label>
            <input type="number" id="long-break" 
            name="long-break" min="0" 
            value={longBreak}
            onChange={changeHandler}
            />
        </div>
    )
}

export default NumberInput