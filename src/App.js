import './App.css';
import React, { useState } from 'react';

function App() {
    // const [email , setEmail] = useState('');
    const emailState = useState('');
    const email = emailState[0];
    const setEmail = emailState[1];

    function handleChange(e) {
        setEmail(e.target.value);
    }

    return (
        <div className="App">
            <input v alue={email} onChange={handleChange} />
            <p> Email : {email}</p>
        </div>
    );
}

export default App;
