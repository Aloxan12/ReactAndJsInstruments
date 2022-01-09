import React from 'react';
import './App.css';
import {Onboarding} from "./common/mobx/Onboarding";
import { Provider } from 'mobx-react';
import {SortViewer} from "./common/Sort/Sort";


const App=()=> {
    return (
        <div className="App">

            <SortViewer />
            <Provider>
                <Onboarding />
            </Provider>
        </div>
    );
}

export default App;
