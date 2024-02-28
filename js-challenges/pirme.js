function Prime(num) {
    if (num <= 1) return false;
    for(let i = 2; i < num; i++){
        if (num % i === 0 )
         return false;
    }
    return true;
}
function filter(arr) {
    let primeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Prime(arr[i])) {
            primeArray.push(arr[i]);
        }
    }

    return primeArray;
}
// Example 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,13,15,17];
console.log(filter(numbers)); 
