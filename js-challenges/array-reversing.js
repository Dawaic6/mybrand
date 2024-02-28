function reverseArray(arr) {
    let reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);// reversedArray +=arr[i];
    }

    return reversedArray;
}

// Example 
let numbers = [11, 12, 31, 42, 35];
console.log(reverseArray(numbers)); // Output: [5, 4, 3, 2, 1]
