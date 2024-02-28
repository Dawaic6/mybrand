function reverseArrayInPlace(arr) {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;

    while (firstIndex < lastIndex) {
        
        let temp = arr[firstIndex];
        arr[firstIndex] = arr[lastIndex];
        arr[lastIndex] = temp;

        firstIndex++;
        lastIndex--;
    }
}

// Example
let numbers =  [11, 12, 31, 42, 35];
reverseArrayInPlace(numbers);
console.log(numbers); 
