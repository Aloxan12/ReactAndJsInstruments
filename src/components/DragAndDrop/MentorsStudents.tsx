import React, {useState, DragEvent} from "react";
import style from "./DragAndDrop.module.css";
import {v1} from "uuid";

type DeveloperType = {
    id: string
    name: string
}

type DevelopersType = {
    id: string
    title: string
    developers: DeveloperType[]
}

export const DragAndDrop = () => {
    const [boards, setBoards] = useState<Array<DevelopersType>>([
        {
            id: v1(),
            title: 'Mentors',
            developers: [{id: v1(), name: 'Dima'}, {id: v1(), name: 'Pasha'}, {id: v1(), name: 'Vlad'}]
        },
        {
            id: v1(),
            title: 'Mentors',
            developers: [{id: v1(), name: 'Artem'}, {id: v1(), name: 'Vika'}, {id: v1(), name: 'Lesha'}]
        },
    ])
    const [currentCard, setCurrentCard] = useState<DevelopersType | null>(null)

    function dragStartHandler(e: DragEvent<HTMLDivElement>, board: DevelopersType,) {

    }

    function dragEndHandler(e: DragEvent<HTMLDivElement>) {

    }

    const sortCards = (a: DevelopersType, b: DevelopersType) => {

    }

    function dragOverHandler(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    function dropHandler(e: DragEvent<HTMLDivElement>, card: DevelopersType) {
        e.preventDefault();
    }

    return (
        <div className={style.container}>
            {boards.map(board => {
                return <div>
                    <div className={style.boardTitle}>{board.title}</div>
                    {board.developers.map(dev => {
                        return <div className={style.developers}
                                    draggable="true"
                                    onDragStart={(e) => dragStartHandler(e, board)}
                                    onDragLeave={(e) => dragEndHandler(e)}
                                    onDragEnd={(e) => dragEndHandler(e)}
                                    onDragOver={(e) => dragOverHandler(e)}
                                    onDrop={(e) => dropHandler(e, board)}
                        >
                        </div>
                    })}
                </div>
            })}
        </div>
    )
}