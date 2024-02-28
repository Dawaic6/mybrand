function organizePeopleData(peopleArray) {
    let females = [];
    let males = [];

    // Iterate through each person's identity
    for (let person of peopleArray) {
        // Split the identity into parts: name, age, gender
        let [fullName, age, gender] = person.split(", ");
        let [firstName, secondName] = fullName.split(" ");

        // Create an object with required information
        let personInfo = {
            "second-name": secondName,
            "age": parseInt(age)
        };

        // Check gender and add to respective array
        if (gender === "female") {
            females.push({ [firstName]: personInfo });
        } else if (gender === "male") {
            males.push({ [firstName]: personInfo });
        }
    }

    // Construct the nested object
    let result = {
        females: females,
        males: males
    };

    return result;
}

// Example usage:
let formattedArray = ["Patrick wyne, 30, male", "lil wyne, 32, male", "Eric mimi, 21, female", "Dodos deck, 21, male", "Alian Dwine, 22, male", "Patrick wyne, 33, male", "Patrick wyne, 10, male", "Patrick wyne, 40, male"];

console.log(organizePeopleData(formattedArray));
