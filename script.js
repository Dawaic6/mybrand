const  sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');


const themeToggler = document.querySelector('.theme-toggler');



menuBtn.addEventListener('click',()=>{
       sideMenu.style.display = "block"
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none"
})

themeToggler.addEventListener('click',()=>{
     document.body.classList.toggle('dark-theme-variables')
     themeToggler.querySelector('span:nth-child(1').classList.toggle('active')
     themeToggler.querySelector('span:nth-child(2').classList.toggle('active')
})


// Fetch and populate the recent messages table on page load
document.addEventListener("DOMContentLoaded", populateRecentMessages);
// Function to fetch and populate the recent messages table
function populateRecentMessages() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    const tableBody = document.querySelector(".recent_message tbody");
    tableBody.innerHTML = "";
    messages.forEach((message, index) => {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${message.username}</td>
        <td>${message.email}</td>
        <td>${message.message}</td>
        <td><button class="btn_warning" onclick="markMessage(${index})">Mark</button></td>
        <td><button class="btn_primary" onclick="deleteMessage(${index})">Delete</button></td>
      `;
    });
}

// Function to add a new message
function addMessage(username, email, message) {
    // Retrieve existing messages from local storage or initialize as empty array
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
  
    // Add the new message
    messages.push({ username, email, message });
  
    // Save updated messages to local storage
    localStorage.setItem("messages", JSON.stringify(messages));
  
    // After storing the new message, populate the recent messages table
    populateRecentMessages();
}

// Function to delete a message
function deleteMessage(index) {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
  
    messages.splice(index, 1);
    localStorage.setItem("messages", JSON.stringify(messages));
    // Fetch and populate the recent messages table with the updated data
    populateRecentMessages();
}
// Function to mark a message as seen
function markMessage(index) {
    // Retrieve existing messages from local storage
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
  
    // Find the message at the specified index
    const messageToUpdate = messages[index];
  
    if (messageToUpdate) {
        messageToUpdate.seen = true;
        localStorage.setItem("messages", JSON.stringify(messages));
        populateRecentMessages();
  
        alert(`Message ${index + 1} marked as seen`);
    } else {
        alert(`Message ${index + 1} not found`);
    }
}

// Fetch and populate the recent messages table on page load
document.addEventListener("DOMContentLoaded", populateRecentMessages);
