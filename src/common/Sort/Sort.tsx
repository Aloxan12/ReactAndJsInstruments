import {useMemo, useState} from "react";


const students = [
    {"id":1, "name": "Vika", "age": 24},
    {"id":2, "name": "Alex", "age": 26},
    {"id":3, "name": "Dima", "age": 19},
    {"id":4, "name": "Valera", "age": 21},
    {"id":5, "name": "Bob", "age": 20},
]
type StudentsType = typeof students
// const sortFunction =(items: IStudents[], params: string)=>{
//     const newArr = items[params].
//     return newArr
// }

export const SortViewer =()=>{
    const [sortArray, setSortArray] = useState<StudentsType>(students)
    const [order, setOrder] = useState('ABC')

    const arrFilter = (params: {
        array: any[]
        query?: string
    }) => {
        const { array, query } = params
        const sortedRestaurants = useMemo(() => {
            if (!!query) {
                return array.sort((a, b) => a.name.localeCompare(b.name))
            }
            return array
        }, [query, array])

        const searchedAndFilterResult = useMemo(() => {
            if (!!sortedRestaurants) {
                return sortedRestaurants.filter((array) =>
                    array.name.toLowerCase().includes(query!.toLowerCase()),
                )
            }
            return array
        }, [query, sortedRestaurants])

        return searchedAndFilterResult
    }

    return(
        <div>
            <table>
                <thead>
                    <th>
                        <span>айди ⇅ </span>
                    </th>
                    <th>
                        <span>имя ⇅ </span>
                    </th>
                    <th>
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