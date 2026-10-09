

// Wait until the HTML page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select all filter buttons and product cards
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");
    
    filterButtons.forEach(button => {
    button.addEventListener("click", function () {
    
    // 1. Remove the 'active' highlight from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));
    
    // 2. Highlight the button that was just clicked
    this.classList.add("active");
    
    // 3. Get the text of the selected button
    const selectedCategory = this.textContent.trim();
    
    // 4. Show or hide product cards based on category
    productCards.forEach(card => {
    const cardCategory = card.querySelector(".category-tag").textContent.trim();
    
    if (selectedCategory === "All Items" || cardCategory === selectedCategory) {
    card.style.display = "flex"; // Show card
    } else {
    card.style.display = "none"; // Hide card
    }
    });
    });
    });
    
    console.log("Abisola Glow Hub scripts loaded successfully! 🛍️");
    });