import {ChangeEvent, FormEvent, useState} from "react";
import style from './Valid.module.css';
import {CountryDropdown, RegionDropdown, CountryRegionData} from 'react-country-region-selector';

export const Valid = () => {
    const [inputText, setInputText] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputCountry, setInputCountry] = useState({country: ''})
    const [inputRegion, setInputRegion] = useState({region: ''})
    const [error, setError] = useState('')

    const selectCountry = (val: string) => {
        setInputCountry({country: val});
    }

    const selectRegion = (val: string) => {
        setInputRegion({region: val});
    }
    const re = /\S+@\S+\.\S+/;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputText.length < 6) {
            setError('Слишком короткое имя')
        }else if(inputText.length > 25){
            setError('Слишком длинное имя')
        }else if(!re.test(inputEmail)){
            setError('email введён некорректно')
        }else {
            alert('Введенное имя: ' + inputText)
            alert('Введенный email: ' + inputEmail)
            alert('Введенный пароль: ' + inputPassword)
        }
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <input
                type="text"
                className={style.input}
                value={inputText}
                onChange={(e) => {
                    setError('')
                    setInputText(e.currentTarget.value)
                }}
                placeholder='Введите логин'
            />
            <input
                type="email"
                className={style.input}
                value={inputEmail}
                onChange={(e) => {
                    setError('')
                    setInputEmail(e.currentTarget.value)
                }}
                placeholder='Введите email'
            />
            <input
                type="password"
                className={style.input}
                value={inputPassword}
                onChange={(e) => {
                    setError('')
                    setInputPassword(e.currentTarget.value)
                }}
                placeholder='Введите пароль'
            />
            <div>
                <CountryDropdown
                    value={inputCountry.country}
                    onChange={(val) => selectCountry(val)}/>
                <RegionDropdown
                    country={inputCountry.country}
                    value={inputRegion.region}
                    onChange={(val) => selectRegion(val)}/>
            </div>
            <input type="submit" value="Отправить" className={style.btn}/>
            {error ? <div className={style.error}>{error}</div> : ''}
        </form>
    )
}
