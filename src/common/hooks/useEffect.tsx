import React, {useEffect, useState} from "react";

export const Users=()=>{
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })
    console.log('Component render')

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(json => setData(json))
    }, [type])


    const mouseMoveHandler = (event: MouseEvent)=>{
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(()=>{
        console.log('ComponentDidMount')

        window.addEventListener('mousemove', mouseMoveHandler )

        return ()=>{
            window.removeEventListener('mousemove', mouseMoveHandler )
        }
    },[])


    useEffect(()=>{
        console.log('render')
    }, [])

    return(
        <div>
            <h1>Ресурс: {type}</h1>

            <button onClick={()=> setType('users')}>Пользователи</button>
            <button onClick={()=> setType('todos')}>Todos</button>
            <button onClick={()=> setType('posts')}>Посты</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}