// Bubble Sort

// let arr = [10, 45, 39, 29, 65, 69];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//     for (j = 0; j < n - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr);


// Selection Sort 


// let arr = [10, 45, 39, 29, 65, 69];
// let n = arr.length ;

// for(let i = 0 ; i<=n-1 ; i++){
//     let min = i ;
//     for(let j = i+1 ; j<n ;j++){
//         if(arr[j]<arr[min]) min = j ;
//     }

//     if(min != i ){
//         let temp = arr[min]
//         arr[min] = arr[i]
//         arr[i] = temp

//     }
// }

// console.log(arr);




let arr = [10, 45, 39, 29, 65, 69];
let n = arr.length ;

for(let i =1 ; i<n ;i++){
    let key = arr[i]
    let j = i -1 
    while(j >=0 && arr[j] > key){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = key ;

}

console.log(arr);
