import React, {useState} from "react";
import './Widget.css'
import strelka from './../../utils/images/strelka.png'



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
                    <div onClick={()=> setActive(!active)}>
                        <div className={`icon-wrap ${active ? '' : 'open'}`}>
                            <img src={strelka} />
                        </div>
                    </div>
                </div>
                {active && <div className="content-wrap">{content}</div>}
            </div>
        </div>
    )
}