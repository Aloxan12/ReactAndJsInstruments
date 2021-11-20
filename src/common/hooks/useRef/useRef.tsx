import {useEffect, useRef, useState} from "react";


export const HookRef = ()=>{
    const [value, setValue] = useState('value')
    const renderRef = useRef(0)
    const inputRef = useRef<null | any>(null)
    const prevValueRef = useRef<null | any>(null)

    useEffect(()=>{
        renderRef.current++;
    })

    useEffect(()=>{
        prevValueRef.current = value;
    }, [value])

    const focus =()=> inputRef.current.focus();

    return (
        <div>
            <div>Количество рендеров: {renderRef.current}</div>
            <div>Предыдущее value: {prevValueRef.current}</div>
            <input ref={inputRef} value={value} onChange={(e)=>setValue(e.currentTarget.value)} type="text"/>
            <button onClick={focus}>Фокус</button>
        </div>
    )
}
