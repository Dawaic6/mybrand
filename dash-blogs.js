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


    
function validateBlogForm() {
    const imageInput = document.getElementById("blogimage");
    const dateInput = document.getElementById("blogdate");
    const titleInput = document.getElementById("blogtitle");
    const descriptionInput = document.getElementById("blogdescription");
  
    // Validation logic for image, date, title, and description
    // Collect validation messages
    const errors = [];
  
    if (!imageInput || imageInput.files.length === 0) {
      errors.push("Image is required");
    }
  
    if (!dateInput || dateInput.value.trim() === "") {
      errors.push("Date is required");
    }
  
    if (!titleInput || titleInput.value.trim() === "") {
      errors.push("Title is required");
    }
  
    if (!descriptionInput || descriptionInput.value.trim() === "") {
      errors.push("Description is required");
    }
  
    // Display all validation messages at once
    document.getElementById("imageError").textContent = errors.includes(
      "Image is required"
    )
      ? "Image is required"
      : "";
    document.getElementById("dateError").textContent = errors.includes(
      "Date is required"
    )
      ? "Date is required"
      : "";
    document.getElementById("blogTitleError").textContent = errors.includes(
      "Title is required"
    )
      ? "Title is required"
      : "";
    document.getElementById("descriptionError").textContent = errors.includes(
      "Description is required"
    )
      ? "Description is required"
      : "";
  
    // If there are any validation errors, return early
    if (errors.length > 0) {
      return;
    }
  
    // Read the image file using FileReader
    const reader = new FileReader();
    reader.onload = function (e) {
      // e.target.result contains the base64-encoded image data
      const imageData = e.target.result;
  
      // If all fields are valid, proceed to store data in local storage
      storeBlogData(
        imageData,
        dateInput.value,
        titleInput.value,
        descriptionInput.value
      );
  
      // Close the modal after successful validation and storage
      closeModal();
    };
  
    // Read the image file asDataURL
    reader.readAsDataURL(imageInput.files[0]);
  }
  
  // Declare imageInput, dateInput, blogTitleInput, and descriptionInput globally
  const imageInput = document.getElementById("blogimage");
  const dateInput = document.getElementById("blogdate");
  const blogTitleInput = document.getElementById("blogtitle");
  const descriptionInput = document.getElementById("blogdescription");
  
  // Add input event listeners to clear errors when typing starts
  imageInput.addEventListener("input", () => clearError("imageError"));
  dateInput.addEventListener("input", () => clearError("dateError"));
  blogTitleInput.addEventListener("input", () => clearError("blogTitleError"));
  descriptionInput.addEventListener("input", () =>
    clearError("descriptionError")
  );
  
  // Function to clear errors
  function clearError(errorId) {
    document.getElementById(errorId).textContent = "";
  }
  
  // Function to store blog data in local storage
  function storeBlogData(image, date, title, description) {
    const blogData = {
      image: image,
      date: date,
      title: title,
      description: description
    };
  
    // Retrieve existing blog data from local storage
    let existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
  
    // Add new blog data to the existing list only if it doesn't already exist
    const isDuplicate = existingBlogs.some(
      (blog) =>
        blog.image === image &&
        blog.date === date &&
        blog.title === title &&
        blog.description === description
    );
  
    if (!isDuplicate) {
      existingBlogs.push(blogData);
  
      // Store the updated list back in local storage
      localStorage.setItem("blogs", JSON.stringify(existingBlogs));
  
      // Fetch and populate the table with the updated data
      fetchAndPopulateTable();
    }
  }
  
  // Function to fetch and populate the table with blog data
  function fetchAndPopulateTable() {
    // Retrieve blog data from local storage
    const blogData = JSON.parse(localStorage.getItem("blogs")) || [];
  
    // Get the table body
    const tableBody = document.querySelector(".tbl tbody");
  
    // Clear existing rows in the table
    tableBody.innerHTML = "";
  
    // Iterate through blog data and append rows to the table
    blogData.forEach((blog, index) => {
      const row = tableBody.insertRow();
      row.innerHTML = `
     <td data-table="Blog Id">${index + 1}</td>
     <td data-table="Blog Title">${blog.title}</td>
     <td data-table="Image"><img src="${blog.image}" alt="blog Image"></td>
     <td data-table="Description">${blog.description}</td>
     <td data-table="Date Created">${blog.date}</td>
     <td>
     <button class="btn_edit" data-table="Edit" onclick="editBlog(${index})">Edit</button>
      <button class="btn_trash" data-table="Delete" onclick="deleteBlog(${index})">Delete</button>
     </td>
    `;
    });
  }
  
  // Add an event listener to fetch and populate the table on page load
  document.addEventListener("DOMContentLoaded", fetchAndPopulateTable);
  
  function deleteBlog(index) {
    let existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    existingBlogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(existingBlogs));
    fetchAndPopulateTable();
  }
  function editBlog(index) {
    // Retrieve existing blog data from local storage
    let existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Get the blog data based on the clicked row
    const blogToEdit = existingBlogs[index];

    // Populate the form with the data for editing
    imageInput.value = ""; 
    dateInput.value = blogToEdit.date;
    blogTitleInput.value = blogToEdit.title;
    descriptionInput.value = blogToEdit.description;

    // Set the index of the blog being edited
    document.getElementById("editedBlogIndex").value = index;

    // Change the button text to "Update"
    document.getElementById("submit").textContent = "Update";

    // Open the modal for editing
    openBlogModal();
  }

  // Function to update or add blog data in local storage
  function validateBlogForm() {
    const index = document.getElementById("editedBlogIndex").value;

    // If the index is present, it means we are editing
    if (index !== "") {
      updateBlogData(index);
    } else {
      // Otherwise, it's a new blog
      addBlogData();
    }
  }

  // Function to update blog data in local storage
  function updateBlogData(index) {
    // Retrieve existing blog data from local storage
    let existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Read the image file using FileReader
    const reader = new FileReader();

    reader.onload = function (e) {
      // e.target.result contains the base64-encoded image data
      const imageData = e.target.result;

      // Update the blog data at the specified index
      existingBlogs[index] = {
        image: imageData, // Use the base64-encoded image data
        date: dateInput.value,
        title: blogTitleInput.value,
        description: descriptionInput.value,
      };

      // Store the updated list back in local storage
      localStorage.setItem("blogs", JSON.stringify(existingBlogs));

      // Fetch and populate the table with the updated data
      fetchAndPopulateTable();

      // Reset the form
      resetForm();
    };

    // Read the image file asDataURL
    reader.readAsDataURL(imageInput.files[0]);
  }

  // Function to add new blog data in local storage
  function addBlogData() {
    // Read the image file using FileReader
    const reader = new FileReader();

    reader.onload = function (e) {
      // e.target.result contains the base64-encoded image data
      const imageData = e.target.result;

      // If all fields are valid, proceed to store data in local storage
      storeBlogData(
        imageData,
        dateInput.value,
        blogTitleInput.value,
        descriptionInput.value
      );

      // Close the modal after successful validation and storage
      closeModal();
    };

    // Read the image file asDataURL
    reader.readAsDataURL(imageInput.files[0]);
  }

  // Function to reset the form after adding or updating
  function resetForm() {
    // Clear the editedBlogIndex and change button text back to "+add"
    document.getElementById("editedBlogIndex").value = "";
    document.getElementById("submit").textContent = "+add";

    // Clear the form fields
    imageInput.value = "";
    dateInput.value = "";
    blogTitleInput.value = "";
    descriptionInput.value = "";

    // Clear any previous errors
    clearError("imageError");
    clearError("dateError");
    clearError("blogTitleError");
    clearError("descriptionError");
  }
  // Add an event listener to fetch and populate the table on page load
  document.addEventListener("DOMContentLoaded", fetchAndPopulateTable);
  