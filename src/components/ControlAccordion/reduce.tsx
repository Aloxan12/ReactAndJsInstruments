export const TOGGLE_CONSTANT = 'TOGGLE_CONSTANT'

export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}
export let reduce = (state: StateType, action: ActionType ):StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('Bad action type')
    }
    return state
}