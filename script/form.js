// Example product array of objects
const products = [
    { id: 1, name: "Shoe" },
    { id: 2, name: "Bag" },
    { id: 3, name: "Laptop" },
    { id: 4, name: "Phone" }
];

// Function to populate the product select element with options
function populateDropdown() {
    const productSelect = document.getElementById('product-name');
    
    // Check if the dropdown exists
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id; // Use the product ID as the value
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    } else {
        console.error('Dropdown element not found');
    }
}

// Ensure the script runs after the page content is fully loaded
document.addEventListener('DOMContentLoaded', populateDropdown);
