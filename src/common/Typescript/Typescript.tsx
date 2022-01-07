import React from "react";


interface IComponent {
    title: string
}

type ComponentType = {
    title: string
}


export const Component: React.FC<ComponentType> = ({title}) =>{
    return (
        <div>
            <span>{title}</span>
            <span>{title}</span>
        </div>
    )
}