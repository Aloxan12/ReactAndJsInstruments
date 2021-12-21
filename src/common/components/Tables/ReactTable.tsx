import React, {ChangeEvent, MouseEvent, FormEvent, useState} from "react";
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
    id: number | null;
    fullName: string;
    address: string;
    phoneNumber: string;
    email: string;
}

const Table = () => {
    const [contacts, setContacts] = useState(data)
    const [addFormData, setAddFormData] = useState<IContactData>({
        id:0,
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
    })
    const [editFormData, setEditFormData] = useState<IContactData>({
        id:0,
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
    })
    const [editContactId, setEditContactId] = useState<number | null>(null)

    const handleAddFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const fieldName: string | null = e.target.getAttribute("name")
        const fieldValue = e.target.value

        const newFormData = {...addFormData}

        // @ts-ignore
        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
    }
    const handleEditFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const fieldName: string | null = e.currentTarget.getAttribute("name")
        const fieldValue = e.target.value

        const newFormData = {...editFormData}

            // @ts-ignore
        newFormData[fieldName]  = fieldValue
        setEditFormData(newFormData)
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
    const handleEditSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const editContact = {
            id:editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
        }
        const newContacts = [...contacts]
        const index = contacts.findIndex((contact) => contact.id === editContactId)
        // @ts-ignore
        newContacts[index] = editContact
        setContacts(newContacts)
        setEditContactId(null)
    }
    const handleEditClick =(e:MouseEvent<HTMLButtonElement>, contact: IContactData)=>{
        e.preventDefault()
        setEditContactId(contact.id)

        const formValues = {
            id:+v1(),
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        }
        setEditFormData(formValues)
    }
    const handleCancelClick =()=>{
        setEditContactId(null)
    }
    const handleDeleteClick =(contactId: number)=>{
        const filteredContacts = contacts.filter(contact => contact.id !== contactId)
        if(filteredContacts){
            setContacts(filteredContacts)
        }
    }
    const handleDeleteClick2 =(contactId: number)=>{
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact)=> contact.id === contactId)
        newContacts.splice(index, 1)

        setContacts(newContacts)
    }
    return (
        <div className="table-container">
            <form onSubmit={handleEditSubmit}>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map(contact => {
                        return (
                            <React.Fragment key={contact.id}>
                                {editContactId === contact.id
                                    ? <EditTableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
                                    : <TableRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />}
                            </React.Fragment>
                        )
                    })}
                    </tbody>
                </table>
            </form>
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

interface ITableRow {
    contact: IContactData
    handleEditClick: (e: MouseEvent<HTMLButtonElement>,contactId: IContactData)=> void
    handleDeleteClick: (id:number)=> void
}
const TableRow: React.FC<ITableRow> = ({contact, handleEditClick, handleDeleteClick})=>{
    return(
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button onClick={(e)=> handleEditClick(e, contact)}>Edit</button>
                <button onClick={(e)=> handleDeleteClick(contact.id!)}>Delete</button>
            </td>
        </tr>
    )
}
interface IEditTableRow {
    editFormData: IContactData
    handleEditFormChange:(e: ChangeEvent<HTMLInputElement>)=> void
    handleCancelClick:()=> void
}
const EditTableRow: React.FC<IEditTableRow> = ({editFormData, handleEditFormChange, handleCancelClick})=>{
    return(
        <tr>
            <td><input type="text" name="fullName" onChange={handleEditFormChange} value={editFormData.fullName} required placeholder="Enter a name"/></td>
            <td><input type="text" name="address" onChange={handleEditFormChange} value={editFormData.address} required placeholder="Enter an address"/></td>
            <td><input type="text" name="phoneNumber" onChange={handleEditFormChange} value={editFormData.phoneNumber} required placeholder="Enter a phone number"/></td>
            <td><input type="email" name="email" onChange={handleEditFormChange} value={editFormData.email} required placeholder="Enter a email"/></td>
            <td>
                <button type="submit">save</button>
                <button type="button" onClick={handleCancelClick}>cancel</button>
            </td>
        </tr>
    )
}