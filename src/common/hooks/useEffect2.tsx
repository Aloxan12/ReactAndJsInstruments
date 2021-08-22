import React, {useEffect, useState} from "react";
import s from './useEffect2.module.css'

export const Github = () => {
    console.log('log 1')
    const [selectedUser, setSelectedUser] = useState<string | null>(null)
    useEffect(()=>{
        console.log('log 2')
        if(selectedUser){
            console.log('log 4')
            document.title = selectedUser
        }
    },[selectedUser])
    console.log('log 3')
    return (
        <div className={s.container}>
            <div>
                <div>
                    <input placeholder={'search...'}/>
                    <button>Find</button>
                </div>
                <ul>
                    {['Dima', 'Artem']
                        .map((u, i) => <li key={i} className={selectedUser === u ? s.selected : ''}
                                      onClick={() => {
                                          setSelectedUser(u)
                                          //document.title = u
                                      }}>
                            {u}
                        </li>)}
                </ul>
            </div>
            <div>
                <h2>Username</h2>
                <div>Details</div>
            </div>
        </div>
    )
}