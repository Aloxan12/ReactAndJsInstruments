import React, {useReducer} from "react";
import {reduce, TOGGLE_CONSTANT} from "./reduce";

type AccordionType = {
    titleValue: string
};

function UnControlAccordion(props: AccordionType) {
    
    //let [collapsed, setCollapsed] =  useState(false)
    let [state, dispatch] =  useReducer(reduce, {collapsed: false})
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}} />*/}
            <AccordionTitle title={props.titleValue} onClick={()=> dispatch({type: TOGGLE_CONSTANT})} />
            {!state.collapsed && <AccordionBody />}
        </div>
    );

}



type AccordionTitleType = {
    title: string
    onClick: ()=> void
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={()=>{props.onClick()}} >{props.title}</h3>
}
function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UnControlAccordion;