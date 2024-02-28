function isPrime(num) {
    if (num <= 1) return false;
    for(let i = 2; i < num; i++){
        if (num % i === 0 )
         return false;
    }
    return true;
}

function sortDescendingWithoutPrimes(arr) {
    // Filter out prime numbers
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }

    // Sort the remaining numbers in descending order
    for (let i = 0; i < filteredArray.length; i++) {
        for (let j = i + 1; j < filteredArray.length; j++) {
            if (filteredArray[i] < filteredArray[j]) {
                let temp = filteredArray[i];
                filteredArray[i] = filteredArray[j];
                filteredArray[j] = temp;
            }
        }
    }

    return filteredArray;
}

// Example
let numbers = [3, 6, 8, 2, 5, 11, 9, 4];
console.log(sortDescendingWithoutPrimes(numbers)); 
