import React, {useState} from "react";
import './UploadFile.css'

export const UploadFile = () => {
    const [drag, setDrag] = useState(false)
    const dragStartHandler =(e:any)=>{
        e.preventDefault()
        setDrag(true)
    }
    const dragLeaveHandler =(e:any)=>{
        e.preventDefault()
        setDrag(false)
    }
    return(
        <div
            className="upload-file"
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
        >
            {drag ?
                <div className="drop-area">Отпустите файлы, чтобы загурзить их</div> :
                <div
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                >Перетащите файлы, чтобы загурзить их</div>
            }
        </div>
    )
}