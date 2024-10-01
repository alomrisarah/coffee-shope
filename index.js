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

async function fetchCoffeeMenu() {
 try {
  const response = await fetch("https://api.sampleapis.com/coffee/hot")

  if (!response.ok) {
   throw new Error("Network response was not ok " + response.statusText)
  }

  const coffeeData = await response.json()
  renderCoffeeMenu(coffeeData)
 } catch (error) {
  console.error("There was a problem with the fetch operation:", error)
 }
}

function renderCoffeeMenu(coffees) {
 const menuContainer = document.querySelector(".menu-container")
 menuContainer.innerHTML = ""

 coffees.forEach((coffee) => {
  const menuItem = document.createElement("div")
  menuItem.classList.add("menu-item", "card", "m-3")
  menuItem.setAttribute("data-category", coffee.title.toLowerCase()) // Store category for filtering

  const description = coffeeDescriptions[coffee.title] || "No description available for this coffee."

  menuItem.innerHTML = `
              <img src="${coffee.image}" class="coffee-image img-fluid card-img-top" />
              <div class="card-body">
                  <h3 class="card-title">${coffee.title}</h3>
                  <p class="card-text">${description}</p>
                  <span class="price">$${(Math.random() * (5 - 2) + 2).toFixed(2)}</span>
                  <a href="#contact" class="btn btn-primary">Order Now</a>
              </div>
          `
  menuContainer.appendChild(menuItem)
 })

 setupSearch()
}

function myFunction() {
 var x = document.getElementById("myTopnav")
 if (x.className === "topnav") {
  x.className += " responsive"
 } else {
  x.className = "topnav"
 }
}

function setupSearch() {
 const searchInput = document.getElementById("search-input")
 const searchBtn = document.getElementById("search-btn")
 const menuItems = document.querySelectorAll(".menu-item")

 // Search functionality
 searchBtn.addEventListener("click", function () {
  const query = searchInput.value.toLowerCase()
  menuItems.forEach((item) => {
   const title = item.querySelector(".card-title").textContent.toLowerCase()
   if (title.includes(query)) {
    item.style.display = ""
   } else {
    item.style.display = "none"
   }
  })
 })
}

document.addEventListener("DOMContentLoaded", function () {
 fetchCoffeeMenu()
})
