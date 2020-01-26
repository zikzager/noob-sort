'use strict';
let arr = [];

for (let i=20;i>0;--i){
    arr.push(Math.floor(Math.random()*100));
}  console.log(arr);//генерация массива

function noobSort(arrToSort){
let arrSorted = [];
let x;
let a;
for (let i=arrToSort.length; i>0; --i){
    x=arrToSort.pop();
    for (let j=0; j<20;++j){
        if (x>arrToSort[j]){
            let a=arrToSort[j];
            arrToSort[j]=x;
            x=a;
        } }
    arrSorted.push(x);
}
console.log(arrSorted);
}
noobSort(arr)