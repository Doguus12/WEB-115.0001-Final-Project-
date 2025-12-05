
// JavaScript code for form validation
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  const inputValue = inputField.value;

  // Regular expression pattern for alphanumeric input
    // ^ = start of string
    // [a-zA-Z0-9] = any letter (upper/lowercase) or number
    // + = one or more characters
    // $ = end of string
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    const isValid = alphanumericPattern.test(inputValue);

    if (isValid) {
      // Valid input: display confirmation and submit the form
      alert('✓ Success! Your input is valid and the form has been submitted.');


      form.reset();

    }else  {

      if (inputValue.trim() === '') {
            alert('⚠ Error: Please enter a value. The field cannot be empty.');
        } else {
            alert('⚠ Error: Invalid input! Please enter only letters and numbers (no spaces or special characters).');
        }

        inputField.style.borderColor = 'red';
        inputField.focus(); // Put cursor back in the field

        // Reset border color after user starts typing again
        inputField.addEventListener('input', function() {
            inputField.style.borderColor = '#ccc';
        }, { once: true }); // Remove listener after first input
    }
});
