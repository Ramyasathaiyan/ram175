


// Dog Care Products Data
const products = [
    { id: 1, name: "Mens Shirt", price: "$25", img: "./mensshirt.jpg" },
    { id: 2, name: "Womens Saree", price: "$45", img: "womenssaree.jpg" },
    { id: 3, name: "Girl Kids Frock", price: "$20", img: "frock.jpg" },
    { id: 4, name: "Boy Kids Shirt", price: "$15", img: "shirt.jpg" },
    { id: 5, name: "Rhodium Plated Jewellery Set White Austrian Diamond", price: "$65", img: "./jewellery.jpg" },
    { id: 6, name: "YouBella Set of 2 Silver-Toned & Gold-Toned Stone-Studded Bangles", price: "$55", img: "./bangle.jpg" },
    { id: 7, name: "PANASH Silver-Toned Dome Shaped Oxidized Jhumka Earrings", price: "$24", img: "./earing.jpg" },
    { id: 8, name: "Rubans 24K Gold Plated Handcrafted Ruby Stone & Gold Pearls Studded Choker Set", price: "$30" , img:"./chokker.jpg"}
];

// Display Products
function displayProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";
    products.forEach(product => {
        const card = `
            <div class="col-md-3 mb-4">
                <div class="card shadow">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <button class="btn btn-custom" onclick="buyItem('${product.name}')">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function buyItem(itemName) {
    alert(`Thank you for buying ${itemName}! 🎉`);
}

// Show Thank You Alert & Reset Form
function showThankYou(event) {
    event.preventDefault();
    alert("Thank you for contacting us! 😊");
    document.querySelector("form").reset();
}

// Show Sections Dynamically
function showSection(section) {
    ["landing", "products", "about", "contact"].forEach(id => document.getElementById(id).classList.add("d-none"));
    document.getElementById(section).classList.remove("d-none");
    if (section === "products") displayProducts();
}

document.addEventListener("DOMContentLoaded", () => showSection('landing'));
