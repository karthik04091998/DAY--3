// Anonymous Function:

const solution = function (A, K) {
    
    K = K % A.length;
    
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }

    console.log(A);
}
solution([1,2,3,4,5],4)

_________________________________________

// IIFE Function:

(function (A, K) {
    
    K = K % A.length;
    
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }

    console.log(A);
})([1,2,3,4,5],4)