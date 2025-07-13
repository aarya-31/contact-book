import React, { useState } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
    const [selectedContact, setSelectedContact] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleSave = () => {
        setSelectedContact(null); // clear selection
        setRefreshKey((oldKey) => oldKey + 1); // trigger refresh
    };

    return ( <
        div className = "App" >
        <
        h1 > My Contact Book < /h1> <
        ContactForm selectedContact = { selectedContact }
        onSave = { handleSave }
        /> <
        ContactList key = { refreshKey }
        onEdit = { setSelectedContact }
        /> < /
        div >
    );
}

export default App;