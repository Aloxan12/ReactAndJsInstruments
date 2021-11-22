import {ChangeEvent, useState} from "react";
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
        <div>
            <input type="text" value={inputText} onChange={(e)=>{setInputText(e.currentTarget.value)}}/>
            <input type="password" value={inputPassword} onChange={(e)=>{setInputPassword(e.currentTarget.value)}}/>
            <div>
                <CountryDropdown
                    value={inputCountry.country}
                    onChange={(val) => selectCountry(val)} />
                <RegionDropdown
                    country={inputCountry.country}
                    value={inputRegion.region}
                    onChange={(val) => selectRegion(val)} />
            </div>
            <button>Отправвить</button>
        </div>
    )
}
