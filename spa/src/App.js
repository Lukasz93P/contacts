import React from 'react';
import './App.css';
import {ToastContainer} from 'react-toastify';

import ContactsMain from './components/ContactsMain';

function App() {
    return (
        <div className="App p-3">
            <ContactsMain/>
            <ToastContainer/>
        </div>
    );
}

export default App;
