import React from "react";
import './LoaderComponent.css'
import loader from './loader.svg'

export const LoaderComponent = ()=>{
    return (
        <div className="loader-component-wrap">
            <div>
                <img src={loader}/>
            </div>
            <div>
                Загрузка может занять 1-2 минуты
            </div>
        </div>
    )
}