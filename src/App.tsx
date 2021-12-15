import React from 'react';
import './App.css';
import {TableFlex} from "./common/components/Tables/TableFlex";
// import {Provider} from 'mobx-react'
// import stores from './common/mobx/stores/index'
// import Onboarding from "./common/mobx/Onboarding";

function App() {

    return (
        <div className="App">
            <TableFlex />

            {/*<Provider {...stores}>*/}
            {/*    <Onboarding onboardingStore={stores.onboardingStore}/>*/}
            {/*</Provider>*/}
        </div>
    );
}

export default App;
