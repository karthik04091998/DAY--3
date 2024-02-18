// Anonymous Function :
 
const Duplicate = function(array){
    let dup =[...new Set(array)];
    console.log(dup);
}
Duplicate([1,2,3,4,5,5,4,3,2,1])

____________________________________
          
// IIFE  Function :   

(function(array){
    let dup =[...new Set(array)];
    console.log(dup);
})([1,2,3,4,5,5,4,3,2,1])