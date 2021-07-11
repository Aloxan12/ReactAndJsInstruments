import React, {useState, DragEvent} from "react";
import style from "./DragAndDrop.module.css";
import {v1} from "uuid";

type CardType = {
    id: string
    order: number
    text: string
}

export const DragAndDrop=()=>{
    const [cardList, setCardList] = useState<Array<CardType>>([
        {id: v1(), order: 1, text: 'Card 1'},
        {id: v1(), order: 2, text: 'Card 2'},
        {id: v1(), order: 3, text: 'Card 3'},
        {id: v1(), order: 4, text: 'Card 4'},
        {id: v1(), order: 5, text: 'Card 5'},
    ])
    const [currentCard, setCurrentCard] = useState<CardType | null>(null)

    function dragStartHandler(e: DragEvent<HTMLDivElement>, card: CardType){
        setCurrentCard(card)
    }
    function dragEndHandler(e:DragEvent<HTMLDivElement>){
        // @ts-ignore
        e.target.style.background = 'white';
    }
    const sortCards =(a: CardType, b: CardType)=>{
        if(a.order > b.order) return 1
        else return -1
    }
    function dragOverHandler(e:DragEvent<HTMLDivElement>){
        e.preventDefault();
        // @ts-ignore
        e.target.style.background = 'lightgray'
    }
    function dropHandler(e:DragEvent<HTMLDivElement>, card: CardType){
        e.preventDefault();
        setCardList(cardList.sort(sortCards).map(c=> {
            if(c.id === card.id && currentCard){
                return {...c, order: currentCard.order}
            }
            if(currentCard && c.id === currentCard.id){
                return {...c, order: card.order}
            }
            return c
        }))
    }
    return(
        <div className={style.container}>
            {cardList.map(c=>{
                return <div draggable="true"
                            onDragStart={(e)=>dragStartHandler(e, c)}
                            onDragLeave={(e)=>dragEndHandler(e)}
                            onDragEnd={(e)=>dragEndHandler(e)}
                            onDragOver={(e)=>dragOverHandler(e)}
                            onDrop={(e)=>dropHandler(e, c)}
                            className={style.card}>
                    {c.text}
                </div>
            })}
        </div>
    )
}