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




const AlarmSound: React.FC=()=>{
    const [soundValue, setSoundValue]= useState("");

    const handleSoundChange=(event:any): void=>{
        setSoundValue(event.target.value);
    }

    useEffect(()=>{
        playSound(soundValue);
    },[soundValue]);


    const playSound =(soundParam:string)=>{
        soundList.map((sound:any):void=>{
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
        </div>
    )
}

export default AlarmSound;