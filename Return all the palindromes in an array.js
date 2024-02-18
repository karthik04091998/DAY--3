// Anonymous Function:

const findpalindromes = function (words){
    let palindromes=[];
    
    for(let word of words){
        if(word===word.split('').reverse().join('')){
            palindromes.push(word);
        }
    }
     console.log(palindromes);
}
findpalindromes(['mom','dad','me','pro'])

________________________________________________________

// IIFE Function:

(function(words){
    let palindromes=[];
    
    for(let word of words){
        if(word===word.split('').reverse().join('')){
            palindromes.push(word);
        }
    }
     console.log(palindromes);
})(['mom','dad','me','pro'])

__________________________________________________________

// Arrow function:

const findpalindromes = (words) => {
    let palindromes=[];
    
    for(let word of words){
        if(word===word.split('').reverse().join('')){
            palindromes.push(word);
        }
    }
     console.log(palindromes);
}
findpalindromes(['mom','dad','me','pro'])