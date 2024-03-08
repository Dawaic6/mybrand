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

function editRow(element) {
    const row = element.parentNode;
    const cells = row.querySelectorAll('td');

    const userName = cells[0].textContent;
    const password = cells[1].textContent;
    const date = cells[2].textContent;

    // Perform edit operation, for example, display a form with current data pre-filled for editing
    console.log('Edit clicked for:', userName, password, date);
}

function deleteRow(element) {
    const row = element.parentNode;
    row.parentNode.removeChild(row);
    // Perform delete operation, for example, send an AJAX request to delete the record from the server
}
document.addEventListener("DOMContentLoaded", function () {
    fetchAndPopulateTable();
    attachClickEventToButtons();
  });
function fetchAndPopulateTable() {
    // Retrieve message data from local storage
    const messageData = JSON.parse(localStorage.getItem("messages")) || [];
  
    // Get the table body
    const tableBody = document.querySelector('.recent_order table tbody');
  
    // Iterate through message data and append rows to the table
    messageData.forEach((message, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
        <td data-table="user id">${index + 1}</td>
        <td data-table="UserName">${message.username}</td>
        <td data-table="UserEmail>${message.email}</td>
        <td data-table="message">${message.message}</td>
        <td>
            <button class="warning" onclick="markMessage(${index})">Mark</button>
            <button class="primary" onclick="deleteMessage(${index})">Delete</button>
        </td>
        `;
        recent_order.appendChild(row);
    });
}











/*
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const UserName = document.getElementById('Username').value;
    const password = document.getElementById('password').value;
    const table = document.getElementById('user-table');
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        table.deleteRow(row.rowIndex);
    });
    cell1.textContent = Username;
    cell2.textContent = password;
    cell3.appendChild(deleteButton);
    document.getElementById('Username').value = '';
    document.getElementById('password').value = '';
});*/