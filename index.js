const coffeeDescriptions = {
 Espresso: "A strong and bold coffee brewed by forcing hot water through finely-ground coffee.",
 Latte: "A creamy coffee drink made with espresso and steamed milk.",
 Cappuccino: "A rich blend of espresso, steamed milk, and frothy milk foam.",
 Americano: "A simple coffee made by diluting espresso with hot water.",
 Macchiato: "An espresso coffee drink topped with a small amount of foamed milk.",
 Mocha: "A chocolate-flavored variant of a latte, combining espresso, steamed milk, and chocolate syrup.",
 "Flat White": "A coffee drink consisting of espresso and microfoam, characterized by a velvety texture.",
 Affogato: "A dessert made by pouring a shot of hot espresso over a scoop of vanilla ice cream.",
 "Cold Brew": "Coffee brewed with cold water for an extended period, resulting in a smooth flavor.",
 "Iced Coffee": "Regular brewed coffee cooled down and served over ice, often sweetened or flavored.",
 "Black Coffee": "Simple and pure, made by brewing coffee grounds without any added ingredients.",
 "Caramel Latte": "A delicious latte flavored with rich caramel syrup, creating a sweet and creamy drink.",
 "Hot Chocolate": "A warm and comforting drink made with melted chocolate and steamed milk.",
 "Chai Latte": "A spiced tea latte made with brewed chai tea, steamed milk, and spices.",
 "Matcha Latte": "A vibrant green tea latte made with finely ground matcha and steamed milk.",
 "Seasonal Brew": "A special blend of coffee offered during certain seasons, often with unique flavors.",
 "Svart Te": "A traditional black tea, known for its bold flavor and rich aroma.",
 Islatte: "A refreshing iced latte made with espresso and cold milk, served over ice.",
 "Islatte Mocha": "An iced mocha latte made with espresso, milk, chocolate syrup, and ice.",
 "Frapino Caramel": "A blended coffee drink with caramel flavor, served cold and topped with whipped cream.",
 "Frapino Mocka": "A chocolate-flavored blended coffee drink, served cold with a creamy texture.",
 Apelsinjuice: "Freshly squeezed orange juice, sweet and tangy.",
 "Frozen Lemonade": "A slushy drink made from lemonade, served frozen for a refreshing treat.",
 Lemonad: "A classic lemon drink made from fresh lemons, sugar, and water.",
}

// Function to fetch and display coffee items
function fetchCoffee(type) {
    const apiUrl = type === 'hot' 
        ? 'https://api.sampleapis.com/coffee/hot' 
        : 'https://api.sampleapis.com/coffee/iced';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayCoffeeMenu(data))
        .catch(error => console.error('Error fetching coffee data:', error));
}

// Function to display coffee items in cards
function displayCoffeeMenu(coffees) {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = ''; // Clear the previous results
    coffees.forEach(coffee => {
        const coffeeCard = `
            <div class="menu-item mb-3">
                <img src="${coffee.image}" class="coffee-image img-top" alt="${coffee.title}">
                <div class="card-body">
                    <h5 class="card-title">${coffee.title}</h5>
                    <p class="card-text">${coffee.description}</p>
                </div>
            </div>
        `
        menuContainer.innerHTML += coffeeCard;
    });
}

document.getElementById('hot-btn').addEventListener('click', () => {
    fetchCoffee('hot');
});

document.getElementById('iced-btn').addEventListener('click', () => {
    fetchCoffee('iced');
});

document.getElementById('search-btn').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const coffeeCards = document.querySelectorAll('.card');
    
    coffeeCards.forEach(card => {
        const title = card.querySelector('.card-title').innerText.toLowerCase();
        if (title.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

window.onload = () => {
    fetchCoffee('hot');
};
