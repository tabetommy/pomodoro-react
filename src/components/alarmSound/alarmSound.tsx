import React,{useState, useEffect} from 'react';
import alarm from './sounds/soundOne.mp3';
import emergency from './sounds/soundTwo.mp3';
import tick from './sounds/soundThree.mp3';

const soundList=[
    {
        soundTrack:alarm,
        soundLabel:"alarm"
    },
    {
        soundTrack:emergency,
        soundLabel:"emergency"
    },
    {
        soundTrack:tick,
        soundLabel:"tick"
    }
]


const AlarmSound=()=>{
    const [soundValue, setSoundValue]= useState("");
    // const [audio] = useState(new Audio(soundOne));
    const handleSoundChange=(event:any): void=>{
        setSoundValue(event.target.value);
    }

    useEffect(()=>{
        playSound(soundValue);
    },[soundValue]);

    // const playSound=(sound: any):void=>{
    //     //check value of soundValue if it is thesame as value of .... play sound
    //     const audio= new Audio(sound);
    //     audio.play()
    // }

    const playSound =(soundParam:string)=>{

        soundList.map((sound:any)=>{
            if(sound.soundLabel===soundParam){
                const audio= new Audio(sound.soundTrack);
                audio.play()
            }

        })
    }
    
    return (
        <div>
            <select name="sounds" id="sounds" onChange={handleSoundChange}>
                <option value="alarm">Alarm</option>
                <option value="emergency">Emergency</option>
                <option value="tick">Tick</option>
            </select>
            <p>{soundValue}</p>
            {/* <button onClick={()=>playSound(alarm)}>Alarm</button>
            <button onClick={()=>playSound(emergency)}>Emergency</button>
            <button onClick={()=>playSound(tick)}>Clock ticks</button> */}
        </div>
    )
}

export default AlarmSound;