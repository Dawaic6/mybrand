async function addFamilyMemberDetails(families) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second

    for (let family of families) {
        // Calculate total number of family members
        family.totalNumberOfFamilyMembers = 2 + family.childrenNumber; // Assuming each family has 2 parents
        
        // Check if father's name is Yves (case insensitive)
        if (family.fatherName.toLowerCase() === 'yves') {
            throw new Error("Yves is not an allowed dad in 2022.");
        }
    }

    return families;
}

// Example usage:
// Define an async function to encapsulate the code that uses await
async function processFamilies() {
    const families = [
        { fatherName: "John", motherName: "Maria", childrenNumber: 2 },
        { fatherName: "kami", motherName: "Sophie", childrenNumber: 1 },
        { fatherName: "Peter", motherName: "Emily", childrenNumber: 3 }
    ];

    try {
        // Call the function that uses await inside this async function
        const updatedFamilies = await addFamilyMemberDetails(families);
        console.log(updatedFamilies);
    } catch (error) {
        console.error(error);
    }
}

// Call the async function from the top-level code
processFamilies();
