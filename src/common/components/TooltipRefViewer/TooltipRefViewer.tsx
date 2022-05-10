import React, {useRef, useState} from "react";
import './TooltipRefViewer.css'


export const TooltipRefViewer = ()=>{
    const [activeMode, setActiveMode] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const top = inputRef.current?.offsetTop
    const left = inputRef.current?.offsetLeft

    console.log('top', top)
    return (
        <div className="tooltip-ref-viewer-wrapper">
            <div>
                <div style={{display:'flex'}}>
                    <input ref={inputRef}/>
                    <span onClick={()=> setActiveMode(prevState => !prevState)}>развернуть</span>
                </div>
                {activeMode && <div className="items" style={{position:'fixed', top: top && top + 34, left: left}}>всплывашка</div>}
            </div>
        </div>
    )
}