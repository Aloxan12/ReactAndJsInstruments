import React from 'react';
import './App.css';
import {TableFlex} from "./common/components/Tables/TableFlex";
import {AppTable} from "./common/components/Tables/ReactTable";
import {UploadFile} from "./common/DragAndDrop/UploadFile";
import {Test} from "./common/DragAndDrop/Test";
// import {Provider} from 'mobx-react'
// import stores from './common/mobx/stores/index'
// import Onboarding from "./common/mobx/Onboarding";

function App() {

    return (
        <div className="App">
            <Test />

            {/*<Provider {...stores}>*/}
            {/*    <Onboarding onboardingStore={stores.onboardingStore}/>*/}
            {/*</Provider>*/}
        </div>
    );
}

export default App;
