document.querySelector('.copyemail').addEventListener('click', function () {
  // Get the email text from the span
  const email = document.querySelector('.myemail').textContent;

  // Create a temporary textarea element to hold the email
  const tempInput = document.createElement('textarea');
  tempInput.value = email;

  // Append the textarea to the body
  document.body.appendChild(tempInput);

  // Select and copy the content
  tempInput.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempInput);

  // Change the button text to "Copied"
  const copyButton = document.querySelector('.copyemail');
  copyButton.textContent = 'Copied';

  // Optional: Reset the text after a delay
  setTimeout(() => {
      copyButton.textContent = 'Copy';
  }, 2000); // Reset after 2 seconds
});