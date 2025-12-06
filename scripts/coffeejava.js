// DOM Elements
const changeTextBtn = document.getElementById("changeTextBtn");
const dynamicText = document.getElementById("dynamic-text");

const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");
const newItemInput = document.getElementById("newItem");

// Event: Change Text
if (changeTextBtn) {
    changeTextBtn.addEventListener("click", () => {
        dynamicText.textContent = "You clicked the button! " + new Date().toLocaleTimeString();
    });
}

// Event: Add Item to List and Save to localStorage
if (addItemBtn) {
    const savedItems = JSON.parse(localStorage.getItem("items")) || [];

    // Load saved items
    savedItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
    });

    addItemBtn.addEventListener("click", () => {
        const value = newItemInput.value.trim();
        if (value) {
            const li = document.createElement("li");
            li.textContent = value;
            itemList.appendChild(li);

            savedItems.push(value);
            localStorage.setItem("items", JSON.stringify(savedItems));

            newItemInput.value = "";
        }
    });
}

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            formResponse.textContent = `Thank you, ${name}! Your message has been received.`;
            contactForm.reset();
        } else {
            formResponse.textContent = "Please fill in all fields.";
        }
    });
}

// Lazy load images (optional enhancement)
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener("load", () => {
            img.style.opacity = "1"; // fade-in effect
        });
        img.style.opacity = "0";
        img.style.transition = "opacity 0.5s ease-in";
    });
});
