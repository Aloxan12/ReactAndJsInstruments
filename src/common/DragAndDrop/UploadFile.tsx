import React, {useState} from "react";
import './UploadFile.css'

export const UploadFile = () => {
    const [drag, setDrag] = useState(false)
    const [file, setFile] = useState<File | null>(null)
    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(true)
    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(false)
    }
    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const file = e.dataTransfer.files
        if(file !== null){
            setFile(file[0])
            console.log(file)
        }
    }
    return (
        <div
            className="upload-file"
        >
            {drag ?
                <div className="drop-area"
                     onDragStart={e => dragStartHandler(e)}
                     onDragLeave={e => dragLeaveHandler(e)}
                     onDragOver={e => dragStartHandler(e)}
                     onDrop={e => onDropHandler(e)}>Отпустите файлы, чтобы загурзить их</div> :
                <div
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                >Перетащите файлы, чтобы загурзить их</div>
            }
        </div>
    )
}