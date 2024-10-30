document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".map-icon").forEach((button) => {
        button.addEventListener("click", (event) => {
            // Retrieve the location from the data attribute
            const location = event.target.closest(".map-icon").dataset.location;
            // Redirect to Google Maps with the location
            window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        });
    });

     // Form submission with local storage
     const userForm = document.getElementById("userForm");
     userForm.addEventListener("submit", function (event) {
         event.preventDefault();
         const userName = document.getElementById("userName").value;
         if (userName) {
             localStorage.setItem("userName", userName);
             alert(`Welcome, ${userName}!`);
         } else {
             alert("Please enter your name.");
         }
     });
 
     // Display user name if stored
     const storedUserName = localStorage.getItem("userName");
     if (storedUserName) {
         alert(`Welcome back, ${storedUserName}!`);
     }
});
