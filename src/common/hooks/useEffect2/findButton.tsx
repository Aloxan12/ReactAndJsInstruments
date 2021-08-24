import React from "react";

type FindButtonType = {
    tempSearch: string
    setTempSearch: (value: string)=> void
    setSearchTerm: (value: string)=> void
}

export const FindButton:React.FC<FindButtonType> = ({tempSearch, setTempSearch, setSearchTerm}) => {

    return (
        <div>
            <input value={tempSearch} onChange={(e) => {
                setTempSearch(e.currentTarget.value)
            }} placeholder={'search...'}/>
            <button
                onClick={() =>
                    setSearchTerm(tempSearch)}
            >Find
            </button>
        </div>
    )
}
