//9. Write a function that takes a string as input and returns true if the string is a palindrome, and false otherwise.
//first method

// function checkPalindrome(str : string): boolean{
//     let start=0;
//     let end=str.length-1;

//     while(start<end){
//         if(str.charAt(start)!=str.charAt(end)){
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true;
// }

// console.log(checkPalindrome("asdfgfdsa"));



//second method 


function ispalindrome(str : string) : boolean{
    let reverse=str.split('').reverse().join('');
    return reverse===str;
}

console.log(ispalindrome("asdfghgfdsa"));
export{}