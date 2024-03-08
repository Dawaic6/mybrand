// SHOW MENU
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