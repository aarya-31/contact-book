import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ContactList({ onEdit }) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async() => {
        try {
            const res = await axios.get('http://localhost:5000/api/contacts');
            setContacts(res.data);
        } catch (err) {
            console.error('Error fetching contacts:', err);
        }
    };

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/api/contacts/${id}`);
            fetchContacts();
        } catch (err) {
            console.error('Error deleting contact:', err);
        }
    };

    return ( < div >
        <
        h2 > Contact List < /h2> {
        contacts.map((contact) => ( < div key = { contact._id }
            className = "contact-card" >

            <
            p > < strong > Name: < /strong>{contact.name}</p >
            <
            p > < strong > Email: < /strong>{contact.email}</p >
            <
            p > < strong > Phone: < /strong>{contact.phone}</p >
            <
            button onClick = {
                () => onEdit(contact)
            } > Edit < /button> <
            button onClick = {
                () => handleDelete(contact._id)
            } > Delete < /button> < /
            div >
        ))
    } < /div>
);
}

export default ContactList;