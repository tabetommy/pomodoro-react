import React from 'react';

interface Props{
 cont: string
}

const NumberInput: React.FC<Props>=({cont})=>{  
    
    return(
        <div>
            <label htmlFor={cont}>{cont}</label>
            <input type="number" id={cont} name={cont} min="0" value={10}/>
        </div>
    )
}

export default NumberInput