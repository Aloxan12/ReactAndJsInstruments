
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
            {(()=>sortFunction(students).map(student=>{
                return(
                    <div>
                        <span>{student.id}</span>
                        <span>{student.name}</span>
                        <span>{student.age}</span>
                    </div>
                )
            }))()}
        </div>
    )
}