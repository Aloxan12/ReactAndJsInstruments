import React, {useEffect, useState} from "react";
import s from './useEffect2.module.css'
import axios from 'axios'

type SearchUserType = {
    login: string
    id: number
}
type SearchResult = {
    items: SearchUserType[]
}
type UserType = {
    login: string
    id: number
    avatar_url: string
    followers: number
}

export const Github = () => {
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [userDetails, setUserDetails] = useState<UserType | null>(null)
    const [usersGH, setUsersGH] = useState<SearchUserType[]>([])
    const [tempSearch, setTempSearch] = useState('it-kamasutra')
    const [searchTerm, setSearchTerm] = useState('it')

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
                <ul>
                    {usersGH
                        ?.map((u) => <li key={u.id}
                            className={selectedUser === u ? s.selected : ''}
                            onClick={() => {
                                setSelectedUser(u)
                            }}>
                            {u.login}
                        </li>)}
                </ul>
            </div>
            <div>
                <h2>Username</h2>
                {userDetails && <div>
                    <img src={userDetails.avatar_url} alt={'Avatar'}/>
                    <br/>
                    {userDetails.login}, followers:{userDetails.followers}
                </div>}
            </div>
        </div>
    )
}
