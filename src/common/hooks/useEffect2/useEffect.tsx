import React, {useEffect, useState} from "react";
import s from './useEffect2.module.css'
import axios from 'axios'
import {FindButton} from "./findButton";
import {SearchUserType, Users} from "./Users";
import {Details, UserType} from "./details";

type SearchResult = {
    items: SearchUserType[]
}

export const Github = () => {
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [userDetails, setUserDetails] = useState<UserType | null>(null)
    const [usersGH, setUsersGH] = useState<SearchUserType[]>([])
    const [tempSearch, setTempSearch] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])
    useEffect(() => {
        axios.get<SearchResult>(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(res => {
                setUsersGH(res.data.items)
            })
    }, [searchTerm])
    useEffect(() => {
        if (!!selectedUser) {
            axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => {
                    setUserDetails(res.data)
                })
        }
    }, [selectedUser])


    return (
        <div className={s.container}>
            <div>
                <FindButton tempSearch={tempSearch} setTempSearch={setTempSearch} setSearchTerm={setSearchTerm}/>
                <Users users={usersGH} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            </div>
            <div>
                <Details userDetails={userDetails} />
            </div>
        </div>
    )
}
