import React, {useEffect, useState} from "react";

export const HooksUseEffect =()=>{
    const [selectedUser, setSelectedUser] = useState(null)
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get(`https://api.github.com/search/users?q=it`)
            .then(res=>{
                setUsers(res.data.items)
            })
    },[])

    return(
        <div>

        </div>
    )
}