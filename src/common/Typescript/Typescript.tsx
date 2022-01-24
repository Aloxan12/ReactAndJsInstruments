import React from "react";


interface IComponent {
    title: string
}

type ComponentType = {
    title: string
}


type ArrayType = {
    name: string
    data: {
        body: string
        header: number
    }
    age: number
}



//Реализовать функцию Array.push на уровне системы типов.

type PushType<T extends unknown[], M> = [...T, M]
type Result = PushType<[1, 2, 3], '5'>
//==========================================================
// Реализовать вспомогательный тип If. Он принимает условие C и типы T и F. Если условие C правдивое, верните тип T, иначе - F.

type If<C extends boolean, A, B> = C extends true ? A : B

type A = If<true, 'a', 'b'> // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
//==========================================================

//Реализовать встроенный Pick<T, K> не используя его.
// Этот тип возвращает новый тип, в котором перечисляются только те свойства из T, которые указаны в K.

interface Todo1 {
    title: string
    description: string
    completed: boolean
}
type MyPick<T, K extends keyof T> = {[P in K]: T[P]}
type TodoPreview = MyPick<Todo1, 'title' | 'completed'>

const todo1: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
//=================================================
//Реализовать встроенный Readonly<T> не используя его. Этот тип создает новый объект с неизменяемыми свойствами из объекта T.
interface Todo {
    title: string
    description: string
}
type MyReadonly<T> = { readonly [K in keyof T]: T[K] }
const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

//====================================================
//Реализовать TupleToUnion<T> который переводит элементы кортежа в их объединение.
type Arr = ['1', '2', '3']
type TupleToUnion<T extends unknown[]> = T[number]
let value: TupleToUnion<Arr> // expected to be '1' | '2' | '3'

//======================================================
//Реализовать Absolute тип. Он принимает string, number или bigint.
// Результатом должно быть положительное число в виде строки. Например:

type Test = -100;
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer N}`
    ? N
    : `${T}`
type Result22 = Absolute<Test>; // expected to be "100"





const valueArr = {
    name: 'all',
    age:23,
    data: {body: 'll', header: 1}
}
type valueArrType = {
    name: string,
    age:number,
    data: {body: string, header: number}
}


type ValueArrType<T> = { [P in keyof T]: T[P] }



export const Component: React.FC<ComponentType> = ({title}) =>{
    return (
        <div>
            <span>{title}</span>
        </div>
    )
}