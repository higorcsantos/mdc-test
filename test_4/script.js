const validateForm = (event) => {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.querySelectorAll(".error-message").forEach(element => element.remove());

    if (name === "") {
        showError("name", "Name is required.");
        return false;
    }

    if (email === "") {
        showError("email", "Email is required.");
        return false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError("email", "Please enter a valid email address.");
            return false;
        }
    }

    if (message === "") {
        showError("message", "Message is required.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

const showError = (fieldId, errorMessage) => {
    const errorSpan = document.createElement("span");
    errorSpan.className = "error-message";
    errorSpan.textContent = errorMessage;
    const field = document.getElementById(fieldId);
    field.parentNode.insertBefore(errorSpan, field.nextSibling);
}

document.getElementById("contactForm").addEventListener("submit", validateForm);