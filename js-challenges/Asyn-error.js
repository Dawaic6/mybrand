let setStudentAgeApi = (student, age) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if(age < 0)
                reject("Bad Age"); // Reject the Promise if age is negative
            else
                resolve(student); // Resolve the Promise with the updated student object
        }, 500);
    });
 };
 
let student = { name: "Eric" };

setStudentAgeApi(student, 25)
    .then((updatedStudent) => {
        console.log("Student's age set successfully:", updatedStudent);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
    setStudentAgeApi(student, -5)
    .then((updatedStudent) => {
        console.log("Student's age set successfully:", updatedStudent);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
