import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {actions} from "../../store/counter-reducer";


export const CounterWithRedux=()=>{

    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const incHandler=()=>{
        dispatch(actions.incCount())
    }

    return(
        <div style={{textAlign: 'center'}}>
            <h1>{value}</h1>
            <button onClick={incHandler}>+</button>
        </div>
    )
}