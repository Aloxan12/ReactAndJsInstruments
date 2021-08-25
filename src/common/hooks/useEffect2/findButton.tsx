import React, {useEffect, useState} from "react";
import {SearchUserType} from "./Users";

type FindButtonType = {
    onSubmit: (value: string)=> void
    value: SearchUserType | null
}

export const FindButton:React.FC<FindButtonType> = ({value, onSubmit}) => {
    const [tempSearch, setTempSearch] = useState('')

    useEffect(() => {
        if (value) {
            document.title = value.login
        }
    }, [value])

    return (
        <div>
            <input value={tempSearch} onChange={(e) => {
                setTempSearch(e.currentTarget.value)
            }} placeholder={'search...'}/>
            <button
                onClick={() =>
                    onSubmit(tempSearch)}
            >Find
            </button>
        </div>
    )
}
