import {useState} from "react";
//
// interface IStudents{
//     [key: string]: number
//     [keyof: string]: string
//     [keyof: string]: number
// }

const students = [
    {"id":1, "name": "Vika", "age": 24},
    {"id":2, "name": "Alex", "age": 26},
    {"id":3, "name": "Dima", "age": 19},
    {"id":4, "name": "Valera", "age": 21},
    {"id":5, "name": "Bob", "age": 20},
]

// const sortFunction =(items: IStudents[], params: string)=>{
//     const newArr = items[params].
//     return newArr
// }

export const SortViewerJs =()=>{
    const [sortArray, setSortArray] = useState(students)
    const [order, setOrder] = useState('ABC')

    const sortHandler =(col)=>{

        if(order === 'ABC'){
            const sorted = [...sortArray].sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            )
            setSortArray(sorted)
            setOrder('DSC')
        }
        if(order === 'DSC'){
            const sorted = [...sortArray].sort((a, b) =>
                a[col] < b[col] ? 1 : -1
            )
            setSortArray(sorted)
            setOrder('ABC')
        }
    }

    return(
        <div>
            <table>
                <thead>
                    <th onClick={()=>sortHandler('id')}>
                        <span>айди ⇅ </span>
                    </th>
                    <th onClick={()=>sortHandler('name')}>
                        <span>имя ⇅ </span>
                    </th>
                    <th onClick={()=>sortHandler('age')}>
                        <span>возраст ⇅ </span>
                    </th>
                </thead>
                <tbody>
                {sortArray.map(student=>{
                    return(
                        <tr>
                            <th>
                                <span>{student.id} </span>
                            </th>
                            <th>
                                <span>{student.name} </span>
                            </th>
                            <th>
                                <span>{student.age}</span>
                            </th>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}