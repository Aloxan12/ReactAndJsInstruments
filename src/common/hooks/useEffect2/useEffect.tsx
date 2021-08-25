import React, {useState} from "react";
import s from './useEffect2.module.css'
import {FindButton} from "./findButton";
import {SearchUserType, Users} from "./Users";
import {Details} from "./details";

export const Github = () => {
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className={s.container}>
            <div>
                <FindButton
                    onSubmit={setSearchTerm}
                    value={selectedUser}/>
                <Users selectedUser={selectedUser}
                       setSelectedUser={setSelectedUser}
                       searchTerm={searchTerm}
                />
            </div>
            <div>
                <Details selectedUser={selectedUser}/>
            </div>
        </div>
    )
}
