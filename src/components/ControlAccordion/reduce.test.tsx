import {reduce, StateType, TOGGLE_CONSTANT} from "./reduce";

test('collapsed should be true', ()=>{
    //data(данные)
    const state:StateType ={
        collapsed: false
    }
    //action(действие)
    const newState = reduce(state, {type: TOGGLE_CONSTANT})
    //exception(ожидание)
     expect(newState.collapsed).toBe(true)
})
test('collapsed should be false', ()=>{
    //data(данные)
    const state:StateType ={
        collapsed: true
    }
    //action(действие)
    const newState = reduce(state, {type: TOGGLE_CONSTANT})
    //exception(ожидание)
    expect(newState.collapsed).toBe(false)
})
test('collapsed should be error', ()=>{
    //data(данные)
    const state:StateType ={
        collapsed: true
    }
    //exception(ожидание)
    expect(()=>{reduce(state, {type: 'TOTANT'})}).toThrowError()
})