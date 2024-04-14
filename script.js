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
document.addEventListener("DOMContentLoaded", async function () {
    async function fetchMessage() {
        try {
            const response = await fetch("https://mybrand-backend-bjy7.onrender.com/api/v1/getall-contact-message", {
                method: "GET"
            });

            if (!response.ok) {
                throw new Error("Failed to fetch messages");
            }

            const data = await response.json();
            console.log("Got Messages", data?.data);
            populateRecentMessages(data);
            countMessages(data.data.length); // Call the countMessages function with the length of the messages array
        } catch (error) {
            console.error("Error fetching message:", error);
        }
    }

    await fetchMessage();

    function populateRecentMessages(messages) { // Changed the parameter name to avoid conflict with the function name
        const tableBody = document.querySelector(".table tbody");
        tableBody.innerHTML = "";
        messages?.reverse().forEach((message, index) => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${message?.fullName}</td>
                <td>${message?.phoneNumber}</td>
                <td>${message?.emailAddress}</td>
                <td>${message?.subject}</td>
                <td>${message?.message}</td>
                <td><button class="btn_warning" onclick="markMessage(${index})">Mark</button></td>
                <td><button class="btn_primary" onclick="deleteMessage(${index})">Delete</button></td>
            `;
        });
    }

    function countMessages(count) {
        const countMessagesElement = document.getElementById('countMessages');
        countMessagesElement.textContent = count;
    }
});
  
// Function to delete a message
function deleteMessage(index) {
    const token = localStorage.getItem('token');
    console.log('token');
    const url = `https://mybrand-backend-bjy7.onrender.com/api/v1/getone-contact-message/${index}`;
  
    fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        alert('message deleted successfully');
      } else {
        console.error('Failed to delete message.');
      }
    })
    .catch(error => {
      console.error('Error occurred while deleting message:', error);
    });
  }
  function removeAllFromLocalStorage() {
    localStorage.clear();
  }
// Function to mark a message as seen
function markMessage(index) {
    
    const token = localStorage.getItem('token');
  
    fetch(`https://mybrand-backend-bjy7.onrender.com/api/v1/update-blog/${index}`, {
      headers: { "Authorization": `Bearer ${token}` },
      method: 'PUT',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert(`Message ${index + 1} marked as seen`);
      } else {
        console.error('Failed to to read message.');
      }
    })
    .catch(error => {
      console.error('Error occurred :', error);
    });
  }
  

    
    
    document.addEventListener("DOMContentLoaded", populateRecentMessages);

    function countBlogs(){
       const blogs =  fetch('https://mybrand-backend-bjy7.onrender.com/api/v1/getall-blog',{
      }).then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then(data =>{
        const countBlogsElement = document.getElementById('countBlogs');
        countBlogsElement.textContent = `${data.data.length}`
          return data.data.length
      })
    
    }
    function countUsers(){
      const token= localStorage.getItem('token')
     const Users =  fetch('https://mybrand-backend-bjy7.onrender.com/api/v1/get-all-users',{
      headers:{"Authorization": `Bearer ${token}`}
    }).then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json();
    })
    .then(data =>{
      const countUsersElement = document.getElementById('countUsers');
      countUsersElement.textContent = `${data.data.length}`
        return data.data.length
    })
    
    }
    function countMessages(){
     const messages =  fetch('https://mybrand-backend-bjy7.onrender.com/api/v1/getall-contact-message',{
    }).then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }
      return response.json();
    })
    .then(data =>{
      const countMessagesElement = document.getElementById('countMessages');
      countMessagesElement.textContent = `${message.data.length}`
        return data.data.length
    })
    
    }
    
    window.onload = countBlogs , countUsers, countMessages;
