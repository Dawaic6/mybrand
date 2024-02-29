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