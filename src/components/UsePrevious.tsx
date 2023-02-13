import {useRef, useEffect} from 'react';


export const usePrevious=(value:any)=>{
    const ref:React.MutableRefObject<undefined>=useRef();

    useEffect(()=>{
        ref.current=value // assign value of ref to argument
    },[value])

    return ref.current //return current value of ref
}

