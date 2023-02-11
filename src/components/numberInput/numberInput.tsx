import React,{useState} from 'react';


const NumberInput=()=>{ 
    const [pomodoro, setPomodoro]= useState(25);
    const [shortBreak, setShortBreak]= useState(5);
    const [longBreak, setLongBreak]= useState(15);

    const changeHandler=(e:any): void=>{
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
            />
            <label htmlFor="short-break">Short Break</label>
            <input type="number" id="short-break"
            name="short-break" min="0" 
            value={shortBreak}
            onChange={changeHandler}
            />
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