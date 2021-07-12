import React from "react";


export const GeneratorAndSaga=()=>{

    const api = {
        getUsers(){
            const promise = new Promise(res => {
                setTimeout(()=>{
                    res('users from server')
                }, 2000)
            })
            return promise
        }
    }
    function* giveMeMoney(){
        yield api.getUsers();
        yield 400
        yield 300
        yield 200
        return 100
    }
    let generator = giveMeMoney();
    let result= generator.next();
    if(result.value.constructor.name === 'Promise'){
        // @ts-ignore
        result.value.then((data: string)=>{
            generator.next(data)
        })
    }
    console.log(result.value)
    result = generator.next();
    console.log(result.value)
    result = generator.next();
    console.log(result.value)
    result = generator.next();
    console.log(result)
    result = generator.next();
    console.log(result)

    return(
        <div>GeneratorAndSaga</div>
    )
}

