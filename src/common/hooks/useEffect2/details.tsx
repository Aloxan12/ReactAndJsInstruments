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

export const Details: React.FC<DetailsType> = ({selectedUser}) => {
    const [userDetails, setUserDetails] = useState<UserType | null>(null)

    useEffect(() => {
        if (!!selectedUser) {
            axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => {
                    setUserDetails(res.data)
                })
        }
    }, [selectedUser])

    return (
        <>
            <h2>Username</h2>
            {userDetails && <div>
                <img src={userDetails.avatar_url} alt={'Avatar'}/>
                <br/>
                {userDetails.login}, followers:{userDetails.followers}
            </div>}
        </>
    )
}
