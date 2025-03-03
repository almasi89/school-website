function learnMore() {
    alert("Thank you for your interest in My School! Visit our About Us section to learn more.");
}


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert("Please fill out all fields.");
        return false; 
    }

    alert("Form submitted successfully!");
    return true;
}