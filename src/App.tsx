import React from 'react';
import './App.css';
import {Onboarding} from "./common/mobx/Onboarding";
import { Provider } from 'mobx-react';


const App=()=> {
    return (
        <div className="App">
            <Provider>
                <Onboarding />
            </Provider>
        </div>
    );
}

export default App;
