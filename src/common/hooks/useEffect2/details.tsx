import React, {useEffect, useState} from "react";
import axios from "axios";
import {SearchUserType} from "./Users";


export type UserType = {
    login: string
    id: number
    avatar_url: string
    followers: number
}
type DetailsType = {
    selectedUser: SearchUserType | null
}
const startTimerValue = 10

export const Details: React.FC<DetailsType> = ({selectedUser}) => {
    const [userDetails, setUserDetails] = useState<UserType | null>(null)
    const [seconds, setSeconds] = useState(startTimerValue)

    useEffect(() => {
        if (!!selectedUser) {
            axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => {
                    setSeconds(startTimerValue)
                    setUserDetails(res.data)
                })
        }
    }, [selectedUser])

    useEffect(()=>{
        if(seconds< 1){
            setUserDetails(null)
        }
    },[seconds])

    return (
        <>
            <h2>Username</h2>
            {userDetails && <div>
                <Timer seconds={seconds} onChange={setSeconds} timerKey={userDetails.id}/>
                <img src={userDetails.avatar_url} alt={'Avatar'}/>
                <br/>
                {userDetails.login}, followers:{userDetails.followers}
            </div>}
        </>
    )
}
type TimerType={
    seconds: number
    onChange:(value: number)=>void
    timerKey: number
}
export const Timer:React.FC<TimerType> =({seconds, onChange, timerKey})=>{
    const [second, setSecond] = useState(seconds)
    useEffect(()=>{
        setSecond(seconds);
    },[seconds])

    useEffect(()=>{
        onChange(second)
    },[second])

    useEffect(()=>{
        const setIntervalId = setInterval(()=>{
            setSecond((prev)=> prev - 1)
        },1000)
        return ()=> clearInterval(setIntervalId)
    },[timerKey])
    return (
        <div>{second}</div>
    )
}
