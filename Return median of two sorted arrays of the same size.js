// Anonymous Fuction:

let findmedian = function(num1,num2){
    let nums = num1.concat(num2);
    nums.sort((a,b)=> a-b);
    let median = (nums[nums.length/2-1] + nums[nums.length/2])/2;
    console.log(median);
}
let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];

findmedian(num1,num2);

______________________________

// IIFE Function:

(function(num1,num2){
    let nums = num1.concat(num2);
    nums.sort((a,b)=> a-b);
    let median = (nums[nums.length/2-1] + nums[nums.length/2])/2;
    console.log(median);
})([1,2,3,4,5],[6,7,8,9,10]);

_______________________________

// Arrow Function:

let findmedian = (num1,num2) => {
    let nums = num1.concat(num2);
    nums.sort((a,b)=> a-b);
    let median = (nums[nums.length/2-1] + nums[nums.length/2])/2;
    console.log(median);
}
let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];

findmedian(num1,num2);