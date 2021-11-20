import {useRef} from "react";


export const HookRef = ()=>{

    const ref = useRef(null)

    return (
        <div>
            <input ref={ref} type="text"/>
        </div>
    )
}
