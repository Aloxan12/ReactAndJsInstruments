import React from "react";
import s from './useEffect2.module.css'

export type SearchUserType = {
    login: string
    id: number
}
type UsersType = {
    users:SearchUserType[]
    selectedUser: SearchUserType | null
    setSelectedUser:(value: SearchUserType | null)=> void
}

export const Users:React.FC<UsersType> = ({users, selectedUser, setSelectedUser}) => {
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
