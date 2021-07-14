import React from 'react';
import './App.css';
import {GeneratorAndSaga} from "./GeneratorAndSaga/GeneratorAndSaga";
import {Modal, ModalView} from "./components/Modal/Modal";
import {MentorsStudents} from "./components/DragAndDrop/MentorsStudents";


function App() {

    return (
        <div className="App">
            <MentorsStudents />
        </div>
    );
}

export default App;
