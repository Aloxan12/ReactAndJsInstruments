import React from 'react';
import './App.css';
import {Clock} from "./components/Clock/Clock";
import {Counter} from "./components/Localstorage/counter";
import {CounterWithRedux} from "./components/Localstorage/counterWithRedux";



function App() {

    return (
        <div className="App">
            <CounterWithRedux />
        </div>
    );
}

export default App;
