import {InferActionsTypes} from "./store";


const initialState ={
    value: 0
}
export const actions = {
    incCount: ()=>({type:'INC_COUNTER'}),
}

export const counterReducer=(state:InitialStateType = initialState, action: ActionsType ): InitialStateType =>{
    switch (action.type) {
        case "INC_COUNTER":
            return {...state, value: state.value + 1}
        default:
            return state
    }
}

type ActionsType = InferActionsTypes<typeof actions>
type InitialStateType = typeof initialState