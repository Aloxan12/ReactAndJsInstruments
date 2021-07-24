import React, {ChangeEvent, useEffect, useState} from "react";

export const CountGame = () => {
    const [countPlayer1, setCountPlayer1] = useState(0)
    const [countPlayer2, setCountPlayer2] = useState(0)
    return (
        <div>
            <div>
                <div>Alex</div>
                <div>{countPlayer1}</div>
                <button onClick={()=>setCountPlayer1((actual) => actual + 1)}>+</button>
            </div>
            <hr/>
            <div>
                <div>Bob</div>
                <div>{countPlayer2}</div>
                <button onClick={()=>setCountPlayer2((actual) => actual + 1)}>+</button>
            </div>
            <div>
                <button onClick={()=>{(
                    setCountPlayer1((actual) => actual - 1))
                    setCountPlayer2((actual) => actual - 1)}}>-</button>
                <button onClick={()=>{(
                    setCountPlayer1(0))
                    setCountPlayer2(0)}}>reset</button>
            </div>
        </div>
    )
}


type ProfileType = {
    name: string
    age: number
}
export const FormWithUseState = () => {
    const [profile, setProfile] = useState<ProfileType>({
        name:'Dima',
        age: 35
    })
    useEffect(()=>{
        const profileInLS = localStorage.getItem('profileValue')
        if(profileInLS){
            const newValueProfile = JSON.parse(profileInLS)
            setProfile({...newValueProfile})
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('profileValue', JSON.stringify(profile))
    },[profile])

    const onChangeNameHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setProfile({...profile, name: e.target.value})
    }
    const onChangeAgeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setProfile({...profile, age: +e.target.value})
    }
    const clearLocalStorage=()=>{
        localStorage.clear()
    }
    return (
        <div>
            <form>
                <input type='text' value={profile.name} onChange={onChangeNameHandler}/>
                <input type='text' value={profile.age} onChange={onChangeAgeHandler}/>
                <h2>Name:{profile.name} Age:{profile.age}</h2>
                <button onClick={clearLocalStorage}>Clear</button>
            </form>
        </div>
    )
}