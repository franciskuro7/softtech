// Get a reference to the form element
const userForm = document.getElementById("userForm");

// Add an event listener to the form's submit event
userForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Collect user data from input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Now you can work with the user data, e.g., display it
    console.log("Name: " + name);
    console.log("Email: " + email);

    // You can also send this data to a server or perform other actions here
});


// document.getElementById("userForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from actually submitting
  
//     // Collect form data
//     const formData = new FormData(event.target);
  
//     // Access form values
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const message = formData.get("message");
  
//     // Do something with the collected data (e.g., send it to a server or display it)
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Message:", message);
  
//     // You can also send the data to a server using AJAX or fetch here
//   });
  