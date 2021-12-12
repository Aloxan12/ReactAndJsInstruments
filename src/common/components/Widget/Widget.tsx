import {useState} from "react";
import './Widget.css'

export const Widget = ()=>{
    const [active, setActive] = useState(false)
    return (
        <div style={{textAlign: "center"}}>
            <div className="wrap">
                <div className="header-wrap">
                    <div>Шапка</div>
                    <div onClick={()=> setActive(!active)}>свернуть\развернуть</div>
                </div>
                {active && <div className="content-wrap">Контент</div>}
            </div>
        </div>
    )
}