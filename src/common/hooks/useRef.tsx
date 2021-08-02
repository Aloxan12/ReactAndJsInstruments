import React, {useEffect, useRef, useState} from "react";

export const Users=()=>{
    //const [renderCount, setRenderCount] = useState(1)
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const prevValue = useRef('')

    useEffect(()=>{
        renderCount.current++
        console.log(inputRef.current?.value)
    })
    useEffect(()=>{
        prevValue.current = value
        console.log(inputRef.current?.value)
    })
    const focus =()=> inputRef.current?.focus()

    return(
        <div>
            <h1>Кол рендеров: {renderCount.current}</h1>
            <h2>Прошлое состояние: {prevValue.current}</h2>
            <input type='text' ref={inputRef} value={value} onChange={e=>setValue(e.target.value)} />
            <button className='btn btn-success' onClick={focus}>Focus</button>
        </div>
    )
}