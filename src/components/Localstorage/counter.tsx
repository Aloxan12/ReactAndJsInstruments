import React, {useState} from "react";


export const Counter=()=>{
    const [value, setValue]=useState(0)

    const incHandler=()=>{
        setValue(value + 1)
    }
    const setToLocalStorage=()=>{
        localStorage.setItem('counterValue', JSON.stringify(value))
    }
    const getFromLocalStorage=()=>{
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString){
            const newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }
    const clearLocalStorage=()=>{
        localStorage.clear()
        setValue(0)
    }
    return(
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>+</button>
            <button onClick={setToLocalStorage}>setToLocalStorage</button>
            <button onClick={getFromLocalStorage}>getToLocalStorage</button>
            <button onClick={clearLocalStorage}>clearLocalStorage</button>
        </div>
    )
}