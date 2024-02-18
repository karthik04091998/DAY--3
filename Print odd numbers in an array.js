// Print odd numbers in an array

//  A.) Anonymous function:
let odd = function(arr){
    for (let i = 0; i < arr.length ; i++){
    if(arr[i] % 2 != 0){
    console.log(arr[i]);
      }
    }
}
odd([1,2,3,4,5,6,7,8,9])

________________________________________________________

// IIFE funtion:
(function(arr){
    for (let i = 0; i < arr.length ; i++){
    if(arr[i] % 2 != 0){
    console.log(arr[i]);
      }
    }
})([1,2,3,4,5,6,7,8,9])

_________________________________________________________

// Arrow functions:

let odd = (arr) => {
    for (let i = 0; i < arr.length ; i++){
    if(arr[i] % 2 != 0){
    console.log(arr[i]);
      }
    }
}
odd([1,2,3,4,5,6,7,8,9])



