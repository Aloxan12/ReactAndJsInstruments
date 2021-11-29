import React from 'react';
import './App.css';
import {Provider} from 'mobx-react'
import stores from './common/mobx/stores/index'
import Onboarding from "./common/mobx/Onboarding";

function App() {

    return (
        <div className="App">


            <Provider {...stores}>
                <Onboarding/>
            </Provider>
        </div>
    );
}

export default App;
