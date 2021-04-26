import React, { useState } from "react";
import "./OnOff.css";


type BtnType = {
    value: boolean
    onClick:(value:boolean)=> void
}

export function OnOffControl(props: BtnType) {

//let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        marginLeft: '5px',
        backgroundColor: props.value ? "green" : "white"
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        marginLeft: '5px',
        backgroundColor: !props.value ? "red" : "white"
    }
    const onOffIndicator = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        display: 'inline-block',
        borderRadius: '5px',
        marginLeft: '8px',
        backgroundColor: props.value ? "green" : "red"
    }


    return (
        <div>
            <div style={onStyle} onClick={ ()=> {props.onClick(true)}}>On</div>
            <div style={offStyle} onClick={ ()=> {props.onClick(false)}}>Off</div>
            <div style={onOffIndicator}></div>
        </div>
    );
}

