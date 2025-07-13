import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactForm({ selectedContact, onSave }) {
    const [form, setForm] = useState({ name: '', email: '', phone: '' });

    // Fill the form when editing
    useEffect(() => {
        if (selectedContact) {
            setForm({
                name: selectedContact.name,
                email: selectedContact.email,
                phone: selectedContact.phone
            });
        } else {
            setForm({ name: '', email: '', phone: '' });
        }
    }, [selectedContact]);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if (selectedContact) {
                // update
                await axios.put(`http://localhost:5000/api/contacts/${selectedContact._id}`, form);
            } else {
                // create
                await axios.post('http://localhost:5000/api/contacts', form);
            }
            onSave(); // tell parent to refresh list
            setForm({ name: '', email: '', phone: '' }); // clear form
        } catch (err) {
            console.error('Error saving contact:', err);
        }
    };

    return ( < div >
        <
        h2 > { selectedContact ? 'Edit Contact' : 'Add Contact' } < /h2> <
        form onSubmit = { handleSubmit } >
        <
        input name = "name"
        placeholder = "Name"
        value = { form.name }
        onChange = { handleChange }
        required /
        >
        <
        br / >
        <
        input name = "email"
        placeholder = "Email"
        value = { form.email }
        onChange = { handleChange }
        required /
        >
        <
        br / >
        <
        input name = "phone"
        placeholder = "Phone"
        value = { form.phone }
        onChange = { handleChange }
        required /
        >
        <
        br / >
        <
        button type = "submit" > { selectedContact ? 'Update' : 'Add' } < /button> < /
        form > <
        /div>
    );
}

export default ContactForm;