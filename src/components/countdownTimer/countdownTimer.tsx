import {useContext} from 'react';
import { GlobalContext } from '../GlobalState';

const CountDownTimer=()=>{
    const {pomodoro,shortBreak, longBreak}= useContext(GlobalContext);
    return(
        <div>
           <span>{pomodoro}</span>
           <span>{shortBreak}</span>
           <span>{longBreak}</span>
        </div> 
    )
}

export default CountDownTimer