import {useState} from "react";


export const HookMemo = ()=>{
    const [number, setNumber] = useState(40)


    return (
        <div>
            <h1>Свойсвто:{number}</h1>
            <button onClick={()=>setNumber(prev=> prev + 1)}>+</button>
            <button onClick={()=>setNumber(prev=> prev - 1)}>-</button>
        </div>
    )
}

















