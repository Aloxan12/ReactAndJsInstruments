import React from "react";

type ItemType = {
    title: string
    value: any
}
export type AccordionType = {
    titleValue: string
    /**
     * Element that are showed when is closes or is open
     */
    collapsed: boolean
    onChange:() => void
    onClick:(value:any)=> void
    color?: string
    items:ItemType[]
};

function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} value={true} color={props.color} />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
        </div>
    );

}

type AccordionTitleType = {
    value: boolean
    title: string
    onChange:()=> void
    color?: string
}

function AccordionTitle(props: AccordionTitleType) {
    console.log('AccordionTitle rendering')
    return <h3
        onClick={()=>
            props.onChange()}
        style = {{color: props.color? props.color : 'black'}}
    >

        {props.title}
    </h3>
}
export type AccordionBodyPropsType = {
    items:ItemType[]
    onClick:(value:any)=> void
};


function AccordionBody(props:AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i,index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}

export default Accordion;