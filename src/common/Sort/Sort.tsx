
interface IStudents{
    id: number
    name: string
    age: number
}

const students: IStudents[] = [
    {id:1, name: 'Vika', age: 24},
    {id:2, name: 'Alex', age: 26},
    {id:3, name: 'Dima', age: 19},
    {id:4, name: 'Valera', age: 21},
    {id:5, name: 'Bob', age: 20},
]

const sortFunction =(arr: IStudents[])=>{
    return arr
}

export const SortViewer =()=>{
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
                {(()=>sortFunction(students).map(student=>{
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
                }))()}
                </tbody>
            </table>
        </div>
    )
}