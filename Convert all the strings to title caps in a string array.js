                
// Anonymous Function:
 
const answer = function (str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    console.log(str.join(' '));
                  }                 
answer("ANsWER MY QuesTion")

________________________________________________________________________________________

// IIFE Function :

(function(str) {
    str=str.toLowerCase().split(' ');
    for (let i = 0 ; i < str.length ; i++){
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
})("ANsWER MY QuesTion")

__________________________________________________________________________________________

// Arrow Function:

const answer = (str) => {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    console.log(str.join(' '));
                  }                 
answer("ANsWER MY QuesTion")