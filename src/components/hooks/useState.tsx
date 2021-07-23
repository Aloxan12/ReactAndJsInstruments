import React, {useState} from "react";

export const CountGame = () => {
    const [countPlayer1, setCountPlayer1] = useState(0)
    const [countPlayer2, setCountPlayer2] = useState(0)
    return (
        <div>
            <div>
                <div>Alex</div>
                <div>{countPlayer1}</div>
                <button onClick={()=>setCountPlayer1((actual) => actual + 1)}>+</button>
            </div>
            <hr/>
            <div>
                <div>Bob</div>
                <div>{countPlayer2}</div>
                <button onClick={()=>setCountPlayer2((actual) => actual + 1)}>+</button>
            </div>
            <div>
                <button onClick={()=>{(
                    setCountPlayer1((actual) => actual - 1))
                    setCountPlayer2((actual) => actual - 1)}}>-</button>
                <button onClick={()=>{(
                    setCountPlayer1(0))
                    setCountPlayer2(0)}}>reset</button>
            </div>
        </div>
    )
}