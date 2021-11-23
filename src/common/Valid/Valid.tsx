import {ChangeEvent, useState} from "react";
import style from './Valid.module.css';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export const Valid =()=>{
    const [inputText, setInputText] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputCountry, setInputCountry] = useState({ country: ''})
    const [inputRegion, setInputRegion] = useState({region: '' })

    const selectCountry=(val: string)=> {
        setInputCountry({ country: val });
    }

    const selectRegion = (val: string)=> {
        setInputRegion({ region: val });
    }

    return (
        <form className={style.form}>
            <input
                type="text"
                className={style.input}
                value={inputText}
                onChange={(e)=>{setInputText(e.currentTarget.value)}}
                placeholder='Введите логин'
            />
            <input
                type="password"
                className={style.input}
                value={inputPassword}
                onChange={(e)=>{setInputPassword(e.currentTarget.value)}}
                placeholder='Введите пароль'
            />
            <div>
                <CountryDropdown
                    value={inputCountry.country}
                    onChange={(val) => selectCountry(val)} />
                <RegionDropdown
                    country={inputCountry.country}
                    value={inputRegion.region}
                    onChange={(val) => selectRegion(val)} />
            </div>
            <button className={style.btn}>Отправвить</button>
        </form>
    )
}
