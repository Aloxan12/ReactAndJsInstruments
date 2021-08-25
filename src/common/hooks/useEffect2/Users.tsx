import React, {useEffect, useState} from "react";
import s from './useEffect2.module.css'
import axios from "axios";

export type SearchUserType = {
    login: string
    id: number
}
type UsersType = {
    selectedUser: SearchUserType | null
    setSelectedUser:(value: SearchUserType | null)=> void
    searchTerm: string
}
type SearchResult = {
    items: SearchUserType[]
}

export const Users:React.FC<UsersType> = ({selectedUser, setSelectedUser, searchTerm}) => {
    const [users, setUsersGH] = useState<SearchUserType[]>([])
    useEffect(() => {
        axios.get<SearchResult>(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(res => {
                setUsersGH(res.data.items)
            })
    }, [searchTerm])

    return (
        <ul>
            {users
                ?.map((u) => <li key={u.id}
                                 className={selectedUser === u ? s.selected : ''}
                                 onClick={() => {
                                     setSelectedUser(u)
                                 }}>
                    {u.login}
                </li>)}
        </ul>
    )
}
