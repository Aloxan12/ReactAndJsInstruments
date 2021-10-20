import React from "react";



const contentToHtml = (text: string) => text.split(/\n(?!\n)/).filter(item => item !== "").map((paragraph: string) => <p key={paragraph}>{paragraph}</p>);


export const TextComponent =(props:{text: string})=>{
    return <>
        Описание: {contentToHtml(props.text)}
    </>
}
