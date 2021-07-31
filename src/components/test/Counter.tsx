import React, {useState} from "react";

export const Counter =()=>{
    const [check, setCheck]= useState(false)
    return(
        <div>
            <input checked={check} type={'checkbox'} onClick={()=> setCheck(!check)}/>
            {check? <span>Hello</span> : null}
        </div>
    )
}