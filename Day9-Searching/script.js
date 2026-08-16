//Linear Search 


let prompt = require('prompt-sync')();

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let t = Number(prompt("Enter the number to search: "));
// let index = -1;

// for(let i = 0 ; i<arr.length ;i++){
//     if(arr[i] == t){
//         index = i;
//         break;
//     }
// }

// console.log(index == -1 ? "Element not found" : `Element found at index ${index}`);


// Binaray Search ..

let arr = [ 2 , 5 , 8 ,19 , 45 ,67 ,78 ,88 , 94 ];

let target = Number(prompt("Enter the number : "));
let start = 0 , end = arr.length-1 ; index = -1 ;

while(start <= end){
    let mid = Math.floor((start + end)/2);
    if(arr[mid]== target){
        index = mid;
        break ;
    }
    else if(arr[mid]<target){
        start = mid + 1  ;
    }
    else end = mid - 1 ;
}

if(index == -1 ) console.log("Not found 😓 ");
else console.log(" Element found at : " + index + " index");


