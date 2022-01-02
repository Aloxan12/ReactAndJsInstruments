import React, {useState} from "react";
import './UploadFile.css'
import DocViewer, {DocViewerRenderers} from "react-doc-viewer";

export const Test = () => {
    const [activeModel, setActiveModel] = useState(false)
    const [docs, setDocs] = useState( [
        {uri: "https://c8261d96-4316-475f-9f68-c7d397d4d0b5.selcdn.net/media/Kitayskiy.docx"},
        {uri: "https://c8261d96-4316-475f-9f68-c7d397d4d0b5.selcdn.net/media/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg"}
    ])
    const handleChangeFile = (files: any) => {
        const file = files[0]
        if (file) {
            const formData = new FormData()
            formData.append('file', file)
            setDocs(prevValue => [...prevValue, {uri: file}])
        }
    }
    return (
        <div style={{height: '100vh'}}>
            <input
                onChange={(e) => handleChangeFile(e.target.files)}
                type="file"
                name="file"
                id="file"
                className="input_file"
            />
            <div>
                <button onClick={()=>setActiveModel(true)}>Show</button>
                <DocViewer
                           pluginRenderers={DocViewerRenderers} documents={docs}/>
            </div>
        </div>
    )
}