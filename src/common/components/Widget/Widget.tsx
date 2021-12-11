import {useState} from "react";


export const Widget = ()=>{
    const [active, setActive] = useState(false)
    return (
        <div>
            <div>
                <div>
                    <div>Шапка</div>
                    <div onClick={()=> setActive(!active)}>свернуть\развернуть</div>
                </div>
                {active && <div>Контент</div>}
            </div>
        </div>
    )
}