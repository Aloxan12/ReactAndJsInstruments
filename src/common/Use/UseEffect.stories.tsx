import {useEffect, useState} from "react";

export default {
    title: 'UseEffect'
}

export const CounterExample = () => {
    const [counter, setCounter] = useState(0)

    console.log('Component rendered with' + counter)
    useEffect(() => {
        console.log('Effect occurred: ' + counter)
        return () => {
            console.log('Reset effect' + counter)
        }
    }, [counter])
    function increase() {
        setCounter(counter + 1)
    }
    return (
        <div>
            Hello: {counter}
            <button onClick={increase}> increase</button>
        </div>
    )
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)

    useEffect(() => {

        const setTimeoutId = setTimeout(() => {
            console.log('timeout expired')
            setText('3sec passed')
        }, 3000)

        return () => {
            clearTimeout(setTimeoutId)
        }
    }, [text])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}
