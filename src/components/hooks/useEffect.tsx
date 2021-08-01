import React, {useEffect, useState} from "react";

export const Users=()=>{
    const [type, setType] = useState('users')
    const [data, setData] = useState('users')
    console.log('Component render')

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(json => setData(json))
    }, [type])
    useEffect(()=>{
        console.log('render')
    }, [])

    return(
        <div>
            <h1>Ресурс: {type}</h1>

            <button onClick={()=> setType('users')}>Пользователи</button>
            <button onClick={()=> setType('todos')}>Todos</button>
            <button onClick={()=> setType('posts')}>Посты</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}