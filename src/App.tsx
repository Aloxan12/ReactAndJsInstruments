import React from 'react';
import './App.css';
import {Clock} from "./components/Clock/Clock";
import {Counter} from "./components/Localstorage/counter";



function App() {

    return (
        <div className="App">
            <Counter />
        </div>
    );
}

export default App;
