import React, {useState} from "react";
import './Tooltip.css'

type TooltipType = {
    delay?: number
    direction?: string
    content?: string
    children?: React.ReactNode
}

export const Tooltip = (props: TooltipType)=>{
    let timeout: ReturnType<typeof setTimeout>;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };


    return (
        <div
            className="Tooltip-Wrapper"
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {/* Wrapping */}
            {props.children}
            {active && (
                <div className={`Tooltip-Tip ${props.direction || "top"}`}>
                    {/* Content */}
                    {props.content}
                </div>
            )}
        </div>
    )
}