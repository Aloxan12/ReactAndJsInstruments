import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "./localstorage";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer,loadState(), applyMiddleware(thunk), )

store.subscribe(()=>{
    saveState({
        counter: store.getState().counter
    });
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})


export type AppRootStateType = ReturnType<typeof rootReducer>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type AppStoreType = typeof store