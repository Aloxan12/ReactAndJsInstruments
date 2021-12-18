import React, {ChangeEvent, FormEvent, useState} from "react";
import './ReactTable.scss'
import data from './MockData.json'
import {v1} from "uuid";

export const AppTable = () => {
    return (
        <div>
            <Table/>
        </div>
    )
}

interface IContactData {
    fullName: string;
    address: string;
    phoneNumber: string;
    email: string;
}

const Table = () => {
    const [contacts, setContacts] = useState(data)
    const [addFormData, setAddFormData] = useState<IContactData>({
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
    })

    const handleAddFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const fieldName: string | null = e.target.getAttribute("name")
        const fieldValue = e.target.value

        const newFormData = {...addFormData}

        // @ts-ignore
        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
    }
    const handleAddSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const newContact = {
            id:+v1(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,
        }
        const newContacts = [...contacts, newContact]
        setContacts(newContacts)
    }
    return (
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
                {contacts.map(contact => {
                    return (
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
            <h2>Add a new contact</h2>
            <form onSubmit={(e)=>handleAddSubmit(e)}>
                <input type="text" name="fullName" required placeholder="Enter a name" onChange={handleAddFormChange}/>
                <input type="text" name="address" required placeholder="Enter an address" onChange={handleAddFormChange}/>
                <input type="text" name="phoneNumber" required placeholder="Enter a phone number" onChange={handleAddFormChange}/>
                <input type="email" name="email" required placeholder="Enter a email" onChange={handleAddFormChange}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}