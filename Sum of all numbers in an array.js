// Anonymous function:

const add = function(array){
  let sum = 0;
  for(let i = 0 ; i < array.length ; i++){
      sum = sum + array[i] ;
      console.log(sum);
  }
}
add([1,2,3,4,5]);

________________________________________________________

//  IIFE function:

(function(array){
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                     console.log(sum);
                  }
             })([1,2,3,4,5])

________________________________________________________             

// Arrow function:

const add = (array)=>{
  let sum = 0;
  for(let i = 0 ; i < array.length ; i++){
      sum = sum + array[i] ;
      console.log(sum);
  }
}
add([1,2,3,4,5]);