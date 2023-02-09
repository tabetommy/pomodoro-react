import React,{useState} from 'react';
import soundOne from './sounds/soundOne.mp3';
import soundTwo from './sounds/soundTwo.mp3';
import soundThree from './sounds/soundThree.mp3';


const AlarmSound=()=>{
    const [soundValue, setSoundValue]= useState("");
    // const [audio] = useState(new Audio(soundOne));
    const handleSoundChange=(event:any): void=>{
        setSoundValue(event.target.value)
    }

    const playSound=(sound: any)=>{
        const audio= new Audio(sound);
        audio.play()
    }
    // if soundValue and ... are thesame play ... sound
    return (
        <div>
            <select name="cars" id="cars" onChange={handleSoundChange}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <p>{soundValue}</p>
            <button onClick={()=>playSound(soundOne)}>Alarm</button>
            <button onClick={()=>playSound(soundTwo)}>Emergency</button>
            <button onClick={()=>playSound(soundThree)}>Clock ticks</button>
        </div>
    )
}

export default AlarmSound;