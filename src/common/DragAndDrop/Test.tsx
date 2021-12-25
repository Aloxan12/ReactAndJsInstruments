import React, {useState} from "react";
import './UploadFile.css'
import DocViewer, {DocViewerRenderers} from "react-doc-viewer";
import {Modal, ModalView} from "../Modal/Modal";

export const Test = () => {
    const [active, setActive] = useState(false)
    const docs = [
        {uri: "https://c8261d96-4316-475f-9f68-c7d397d4d0b5.selcdn.net/media/Kitayskiy.docx"},
        {uri: "https://c8261d96-4316-475f-9f68-c7d397d4d0b5.selcdn.net/media/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg"}
    ]

    return(
        <div style={{height: '100vh'}}>
            <button onClick={() => setActive(true)}>Изменить
                тренера</button>
            <Modal active={active} setActive={setActive}>
            </Modal>
            <DocViewer style={{width:"600px", height: '700px', margin: 'auto'}} pluginRenderers={DocViewerRenderers} documents={docs} />
        </div>
    )
}