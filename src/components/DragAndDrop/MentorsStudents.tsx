import React, {useState, DragEvent} from "react";
import style from './MentorsStudents.module.css'
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

export const MentorsStudents = () => {
    let [boards, setBoards] = useState<Array<DevelopersType> | null>([
        {
            id: v1(),
            title: 'Mentors',
            developers: [{id: v1(), name: 'Dima'}, {id: v1(), name: 'Pasha'}, {id: v1(), name: 'Vlad'}]
        },
        {
            id: v1(),
            title: 'Students',
            developers: [{id: v1(), name: 'Artem'}, {id: v1(), name: 'Vika'}, {id: v1(), name: 'Lesha'}]
        },
    ])
    let [currentBoard, setCurrentBoard] = useState<DevelopersType | null>(null)
    let [currentDev, setCurrentDev] = useState<DeveloperType | null>(null)

    function dragStartHandler(e: DragEvent<HTMLDivElement>, board: DevelopersType, dev: DeveloperType) {
        setCurrentBoard(board);
        setCurrentDev(dev);
    }

    function dragEndHandler(e: DragEvent<HTMLDivElement>) {
        // @ts-ignore
        e.target.style.boxShadow = 'none';
    }

    function onDragLeaveHandler(e: DragEvent<HTMLDivElement>) {
        // @ts-ignore
        e.target.style.boxShadow = 'none';
    }

    function dragOverHandler(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        // @ts-ignore
        if (e.target.className == "developers") {
            // @ts-ignore
            e.target.style.boxShadow = '0 4px 3px grey';
        }
    }

    function dropHandler(e: DragEvent<HTMLDivElement>, board: DevelopersType, dev: DeveloperType) {
        e.preventDefault();
        if (currentBoard !== null && currentDev !== null) {
            let currentIndex = currentBoard.developers.indexOf(currentDev)
            currentBoard.developers.splice(currentIndex, 1)
            const dropIndex = board.developers.indexOf(dev)
            board.developers.splice(dropIndex + 1, 0, currentDev)
            setBoards(boards && boards.map(b => {
                if (b.id === board.id) {
                    return board
                }
                if (currentBoard && b.id === currentBoard.id) {
                    return currentBoard
                }
                return b
            }))
        }
    }

    return (
        <div className={style.container}>
            {boards ? boards.map(board =>
                <div className={style.board}>
                    <div className={style.boardTitle}>{board.title}</div>
                    {board.developers.map(dev =>
                        <div onDragOver={(e) => dragOverHandler(e)}
                             onDragLeave={e => onDragLeaveHandler(e)}
                            onDragStart={(e) => dragStartHandler(e, board, dev)}
                             onDragEnd={(e) => dragEndHandler(e)}
                             onDrop={(e) => dropHandler(e, board, dev)}
                             className={style.developers}
                             draggable={true}
                        >{dev.name}
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    )
}