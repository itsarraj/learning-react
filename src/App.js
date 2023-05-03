import './App.css';
import React, { useState } from 'react';

function App() {
    const email = '213';
    const setEmail = '213';

    function handleChange(e) {
        setEmail(e.target.value);
    }
    return (
        <div className="App">
            <input value={email} onChange={handleChange} />
            <p> Email : {email}</p>
        </div>
    );
}

export default App;
