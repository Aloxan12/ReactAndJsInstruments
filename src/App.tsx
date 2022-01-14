import React from 'react';
import './App.css';
import {Onboarding} from "./common/mobx/Onboarding";
import { Provider } from 'mobx-react';
import {SortViewer} from "./common/Sort/Sort";
import {SortViewerJs} from "./common/Sort/SortJs";
import {LoaderComponent} from "./common/LoadingComponent/LoaderComponent";


const App=()=> {
    return (
        <div className="App">
            <LoaderComponent />
            {/*<SortViewerJs />*/}
            {/*<Provider>*/}
            {/*    <Onboarding />*/}
            {/*</Provider>*/}
        </div>
    );
}

export default App;
