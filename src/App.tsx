import React from 'react';
import './App.css';
// import {Provider} from 'mobx-react'
// import stores from './common/mobx/stores/index'
// import Onboarding from "./common/mobx/Onboarding";
import {Questionnaire} from "./common/Valid/Questionnaire";
import {Widget} from "./common/components/Widget/Widget";
import {Clock} from "./common/components/Clock/Clock";

function App() {

    return (
        <div className="App">
            {/*<Questionnaire />*/}
            <Widget title="Часы" content={<Clock mode='analog' />} />

            {/*<Provider {...stores}>*/}
            {/*    <Onboarding onboardingStore={stores.onboardingStore}/>*/}
            {/*</Provider>*/}
        </div>
    );
}

export default App;
