import React from 'react';
import './App.css';
import {Onboarding} from "./common/mobx/Onboarding";
import { Provider } from 'mobx-react';
import {SortViewer} from "./common/Sort/Sort";
import {SortViewerJs} from "./common/Sort/SortJs";
import {LoaderComponent} from "./common/LoadingComponent/LoaderSVG/LoaderComponent";
import {LoaderCircle} from "./common/LoadingComponent/LoaderCircle/LoaderCircle";
import {TooltipViewer} from "./common/components/Tooltip/TooltipViewer";
import {TooltipRefViewer} from "./common/components/TooltipRefViewer/TooltipRefViewer";


const App=()=> {
    return (
        <div className="App">
            <TooltipRefViewer />
            {/*<SortViewerJs />*/}
            {/*<Provider>*/}
            {/*    <Onboarding />*/}
            {/*</Provider>*/}
        </div>
    );
}

export default App;
