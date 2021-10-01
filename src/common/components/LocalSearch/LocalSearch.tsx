import React, {useState} from "react"

const students = [
    {name: 'Vanya', age: 25},
    {name: 'Alex', age: 45},
    {name: 'Bob', age: 55},
    {name: 'Anya', age: 44},
    {name: 'Nikol', age: 22},
]

const Search = ()=>{
    const [studentName, setStudentName] = useState('')

    const filteredStudents = students.filter(student => {
        return student.name.toLowerCase().includes(studentName.toLowerCase())
    })

    return (
        <div>
           <input value={studentName} onChange={(e)=>{setStudentName(e.currentTarget.value)}}/>
            {filteredStudents.map(student=> {
                return (
                    <div>
                        {student.name}
                    </div>

                )
            })}
        </div>
    )
}
