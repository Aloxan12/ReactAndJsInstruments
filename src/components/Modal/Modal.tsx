import React, {useState} from "react";
import style from "./Modal.module.css";

type ModalType = {
    active: boolean
    setActive: (value: boolean) => void
}

export const Modal: React.FC<ModalType> = ({active, setActive}) => {
    return (
        <div className={active ? `${style.modal} + '' + ${style.active}` : style.modal} onClick={() => setActive(false)}>
            <div className={active ? `${style.modalContent} + '' + ${style.active}` : style.modalContent}>
                <h1>Модалка вжух вжух</h1>
            </div>
        </div>
    )
}
export const ModalView: React.FC = () => {
    const [active, setActive] = useState<boolean>(false)
    return (
        <div>
            <button onClick={()=> setActive(true)}>+</button>
            lorem1xzXZXZ
            <Modal active={active} setActive={setActive} />
        </div>
    )
}