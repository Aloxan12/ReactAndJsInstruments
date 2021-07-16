import React, {useState, DragEvent} from "react";
import style from './MentorsStudents.module.css'
import {v1} from "uuid";
import {createStyles, Grid, makeStyles, Paper, Theme} from "@material-ui/core";

type DeveloperType = {
    id: string
    name: string
}

type DevelopersType = {
    id: string
    title: string
    developers: DeveloperType[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const MentorsStudents = () => {
    const [boards, setBoards] = useState<Array<DevelopersType> | null>([
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
    const [currentBoard, setCurrentBoard] = useState<DevelopersType | null>(null)
    const [currentDev, setCurrentDev] = useState<DeveloperType | null>(null)
    const classes = useStyles();

    function dragStartHandler(e: DragEvent<HTMLDivElement>, board: DevelopersType, dev: DeveloperType) {
        setCurrentBoard(board);
        setCurrentDev(dev);
    }

    function dragEndHandler(e: DragEvent<HTMLDivElement>) {
        e.currentTarget.style.boxShadow = 'none';
    }

    function dragOverHandler(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        if (e.currentTarget.className === `${style.developers}`) {
            e.currentTarget.style.boxShadow = '0 4px 3px grey';
        }
    }

    function dropHandler(e: DragEvent<HTMLDivElement>, board: DevelopersType, dev: DeveloperType) {
        e.preventDefault();
        e.currentTarget.style.boxShadow = 'none';
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
        <div className={`${style.container}`}>
            <Grid container spacing={6}>
                {boards && boards.map(board =>
                    <Grid item xs={6} sm={5}>
                        <Paper elevation={3} className={classes.paper} style={{padding: '20px', marginLeft:'100px'}}>
                            <div className={style.board}>
                                <div className={style.boardTitle}>{board.title}</div>
                                {board.developers.map(dev =>
                                    <div onDragOver={(e) => dragOverHandler(e)}
                                         onDragLeave={(e) => dragEndHandler(e)}
                                         onDragStart={(e) => dragStartHandler(e, board, dev)}
                                         onDragEnd={(e) => dragEndHandler(e)}
                                         onDrop={(e) => dropHandler(e, board, dev)}
                                         className={style.developers}
                                         draggable={true}
                                    >{dev.name}
                                    </div>
                                )}
                            </div>
                        </Paper>
                    </Grid>
                )}

            </Grid>
        </div>
    )
}