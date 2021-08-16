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

// function callArr(arr: arrType) {
//     const result: any = []
//     const newArr = arr.map((obj, i)=>{
//         if(arr[i].id[0].name === "2"){
//             result.push(arr[i])
//         }
//     })
//     // const newArr = arr.map((obj, index) => {
//     //     const filteredObj = obj.id.filter((ar, i) => ar.name === '2'? obj : null)
//     //     return filteredObj
//     // })
//     return result
// }


// function callArr2(arr: arrType) {
//     const result:any = []
//     for (let i = 0; i < arr.length; i++) {
//         const filt = arr[i].id.filter(ob => ob.name === "2")
//         if(filt){
//             result.push(filt)
//         }
//     }
//     return result
// }
function callArr3(arr: arrType) {
    const result = arr.filter(obj=> obj.id.filter(ar=>ar.name === "2"))

    return result
}


console.log(callArr3(arr));
