import React, {useState} from "react";
import './ReactTable.scss'
import data from './MockData.json'

export const AppTable =()=>{
    return(
        <div>
            <Table />
        </div>
    )
}

const Table =()=>{
    const [contacts, setContacts] = useState(data)
    return(
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone number</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact =>{
                    return(
                        <tr>
                            <td>{contact.fullName}</td>
                            <td>{contact.address}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.email}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}