'use strict';
let arr = [];
for (let i = 20; i > 0; i -= 1) {
    arr.push(Math.floor(Math.random()*100));
}
console.log(arr);//генерация массива

function noobSort(arrToSort){
    let arrSorted = [];
    for (let i = arrToSort.length; i > 0; i -= 1){
        let x=arrToSort.pop();
        for (let j = 0; j < arrToSort.length; j+= 1) {
            if (x > arrToSort[j]) {
                let a = arrToSort[j];
                arrToSort[j] = x;
                x = a;
            } 
        }
    arrSorted.push(x);
    }
    return arrSorted;
}
console.log(noobSort(arr))
