
  
  async function storeContactUs(
    fullName,
    phoneNumber,
    emailAdress,
    subject,
    message
  ) {
    try {
      const response = await fetch(
        "https://mybrand-backend-bjy7.onrender.com/api/v1/post-contact-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: fullName,
            phoneNumber: phoneNumber,
            emailAddress: emailAdress,
            subject: subject,
            message: message,
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to save contact information");
      }
      const responseData = await response.json();
      alert("Contact information saved successfully!");
    } catch (error) {
      console.error("Error while storing contact information:", error.message);
      alert("Failed to save contact information. Please try again later.");
    }
  }
  
  function validateForm() {
     // Add your validation logic here
    return true; // Return true to allow form submission
  }
  
  function contactValidation() {
    const fullName = document.getElementById("fullname");
    const phoneNumber = document.getElementById("phonenumber");
    const emailAdress = document.getElementById("emailAdress");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
  
    // Check for form validation errors
    if (!validateForm()) {
      return ; // Prevent form submission if validation fails
    }
  
    storeContactUs(
      fullName.value,
      phoneNumber.value,
      emailAdress.value,
      subject.value,
      message.value
    );
  }
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
} 