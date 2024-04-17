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

const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('menu-toggle'),
    navClose = document.getElementById('nav-close');

    if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        })
    }

    if (navClose) {
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
    }
// Fetch and populate the recent messages table on page load
document.addEventListener("DOMContentLoaded", async function () {
  async function fetchMessage() {
try {
const response = await fetch("http://localhost:8000/api/v1/getall-contact-message", {
method: "GET"
});

if (!response.ok) {
throw new Error("Failed to fetch messages");
}
const data = await response.json();
console.log("Got Messages", data?.data);
populateRecentMessages(data);
} catch (error) {
console.error("Error fetching message:", error);
}}
 await fetchMessage();
});

// Function to fetch and populate the recent messages table
function populateRecentMessages(message) {
    const tableBody = document.querySelector(".table tbody");
    tableBody.innerHTML = "";
    message?.data?.reverse().forEach((message,index) => {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${message.fullName}</td>
        <td>${message.phoneNumber}</td>
        <td>${message.emailAddress}</td>
        <td>${message.subject}</td>
        <td>${message.message}</td>
        <td><button class="btn_warning" onclick="markMessage(${index})">Mark</button></td>
        <td><button class="btn_primary" onclick="deleteMessage(${index})">Delete</button></td>
      `;
    });
}
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
     const blogs =  fetch('http://localhost:8000/api/v1/getall-blog',{
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
  function countUsers() {
    fetch('http://localhost:8000/api/v1/users')
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then(data => {
        const countUsersElement = document.getElementById('countUsers');
        if (countUsersElement) {
          countUsersElement.textContent = `${data.data.length}`;
        } else {
          console.error("Element with ID 'countUsers' not found");
        }
        return data.data.length;
      })
      .catch(error => {
        console.error("Error in counting users:", error);
      });
  }
  
  // Call countUsers function when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", () => {
    countUsers();
  });
  
  function countMessages() {
    fetch('http://localhost:8000/api/v1/getall-contact-message')
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        return response.json();
      })
      .then(data => {
        const countMessagesElement = document.getElementById('countMessages');
        if (countMessagesElement) {
          countMessagesElement.textContent = `${data.data.length}`;
        } else {
          console.error("Element with ID 'countMessages' not found");
        }
        return data.data.length;
      })
      .catch(error => {
        console.error("Error in counting messages:", error);
      });
  }
  
  // Call countMessages function when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", () => {
    countMessages();
  });
  
  
  window.onload = countBlogs , countUsers, countMessages;
