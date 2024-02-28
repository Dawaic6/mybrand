function hasMajorityElement(arr) {
    let candidate = null;
    let count = 0;

    // Find the potential candidate for the majority element
    for (let num of arr) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (candidate === num) {
            count++;
        } else {
            count--;
        }
    }

    // Check if the candidate is the majority element
    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    return count > arr.length / 2;
}

// Example
console.log(hasMajorityElement([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3])); 
console.log(hasMajorityElement([3, 1, 3, 4, 4])); 
