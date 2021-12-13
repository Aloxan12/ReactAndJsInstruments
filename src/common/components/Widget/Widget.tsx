import React, {useState} from "react";
import './Widget.css'



type WidgetProps = {
    title: string
    content: JSX.Element
}

export const Widget: React.FC<WidgetProps> = ({title, content})=>{
    const [active, setActive] = useState(false)
    return (
        <div style={{textAlign: "center"}}>
            <div className="wrap">
                <div className="header-wrap">
                    <div>{title}</div>
                    <div onClick={()=> setActive(!active)}>свернуть\развернуть</div>
                </div>
                {active && <div className="content-wrap">{content}</div>}
            </div>
        </div>
    )
}