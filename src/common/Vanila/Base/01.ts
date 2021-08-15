import React from "react";

type miniArrType = {
    name: string
}

type objType = {
    id: miniArrType[]; num: string;
}
type arrType = Array<objType>


const arr: Array<objType> = [
    {id: [{name: "1"}, {name: "2"}], num: "1"},
    {id: [{name: "0"}], num: "2"},
    {id: [{name: "1"}], num: "3"},
    {id: [{name: "1"}, {name: "2"}], num: "4"},
    {id: [{name: "1"}, {name: "2"}], num: "5"}
];

function callArr(arr: arrType) {
    const newArr = arr.map((obj, i)=>{
        if(arr[i].id){

        }
    })
    // const newArr = arr.map((obj, index) => {
    //     const filteredObj = obj.id.filter((ar, i) => ar.name === '2'? obj : null)
    //     return filteredObj
    // })
    return
}

console.log(callArr(arr));
