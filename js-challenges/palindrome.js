function Palindrome(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    if( formattedStr === formattedStr.split('').reverse().join('')){
        return "The string is palindrome";
    }
    else{
    return "The string is not palindrome";
}
}
// Example 
console.log(Palindrome("cat")); 
console.log(Palindrome("racecar")); 
console.log(Palindrome("wow"));
