import React,{useState} from 'react';

const AlarmSound=()=>{
    const [soundValue, setSoundValue]= useState("");
    const handleSoundChange=(event:any): void=>{
        setSoundValue(event.target.value)
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
        </div>
    )
}

export default AlarmSound;