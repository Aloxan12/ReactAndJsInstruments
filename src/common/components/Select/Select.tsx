import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css";

type ItemType = {
    title: string
    value: any
}


export type SelectPropsType = {
    value: any
    onChange: (value: any)=> void
    items:ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(()=>{
        setHoveredElementValue(props.value)
    }, [props.value])
    const selectItem = props.items.find(t=> t.value === props.value)
    const hoveredItem = props.items.find(t=> t.value === hoveredElementValue)
    const showItems = ()=>{setActive(!active)}
    const onItemClick = (value: any)=>{
        props.onChange(value)
        showItems()
    }
    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>)=>{
        if(e.key === "ArrowDown" || e.key === "ArrowUp"){
            for(let i = 0; i<props.items.length; i++){
                if(props.items[i].value === hoveredElementValue){
                    const pretendentEl = e.key === "ArrowDown"
                        ?props.items[i + 1]
                        :props.items[i - 1]
                    if(pretendentEl){
                        props.onChange(pretendentEl.value)
                        return;
                    }
                }
            }
            if(!selectItem){
                props.onChange(props.items[0].value)
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }
    }
    return (
        <>
            {/*<select className={s.select}>*/}
            {/*    {props.items.map(i => <option>{i.title}</option>)}*/}
            {/*</select>*/}
            <div className={s.selectDiv} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={showItems}>
                    {selectItem && selectItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                    {props.items.map(i => <div
                        onMouseEnter={()=> setHoveredElementValue(i.value)}
                        className={s.item + ' ' + (hoveredItem === i? s.selected : '')}
                        key={i.value}
                        onClick={()=>props.onChange(i.value)}
                    >{i.title}</div>)}
                </div>}
            </div>
        </>
    );
}
