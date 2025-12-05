
console.log("script.js is loaded!");

// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("personForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload

    console.log("Form submit event triggered!");


    // Create the person object from form values
    const person = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      course: document.getElementById("course").value,
      section: document.getElementById("section").value,
      role: document.getElementById("role").value
    };

    //  Display as JavaScript object
    console.log("JavaScript Object:", person);

    // Display as JSON string
    console.log("JSON Format:", JSON.stringify(person));
    
  });
});
