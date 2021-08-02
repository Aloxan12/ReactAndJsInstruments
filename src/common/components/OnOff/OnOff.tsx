import React, { useState } from "react";
import "./OnOff.css";


type BtnType = {
    on: boolean
    onChange:(value:boolean)=> void
}

export function OnOff(props: BtnType) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        marginLeft: '5px',
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        marginLeft: '5px',
        backgroundColor: !props.on ? "red" : "white"
    }
    const onOffIndicator = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        display: 'inline-block',
        borderRadius: '5px',
        marginLeft: '8px',
        backgroundColor: props.on ? "green" : "red"
    }


    return (
        <div>
            <div style={onStyle}  onClick={ ()=> {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={ ()=> {props.onChange(false)}}>Off</div>
            <div style={onOffIndicator}></div>
        </div>
    );
}


/* function Btn(props: BtnType){
        if(props.OnOff === true){
            return (
                <div className="cont">
                    <button className="on">On</button>
                    <button >Off</button>
                    <div className="BtnOn"></div>
                </div>
            )
        } else{
            return (
                <div className="cont">
                    <button >On</button>
                    <button className="off">Off</button>
                    <div className="BtnOff"></div>
                </div>
            )
        }
    
} */

