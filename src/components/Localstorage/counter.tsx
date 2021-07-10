import React, {useEffect, useState} from "react";


export const Counter=()=>{
    const [value, setValue]=useState(0)

    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString){
            const newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(value))
    },[value])

    const incHandler=()=>{
        setValue(value + 1)
    }

    const clearLocalStorage=()=>{
        localStorage.clear()
        setValue(0)
    }

    return(
        <div style={{textAlign: 'center'}}>
            <h1>{value}</h1>
            <button onClick={incHandler}>+</button>
            <button onClick={clearLocalStorage}>clearLocalStorage</button>
        </div>
    )
}