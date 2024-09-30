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
 const menuContainer = document.getElementById("menu")

 menuContainer.innerHTML = ""

 coffees.forEach((coffee) => {
  const menuItem = document.createElement("div")
  menuItem.classList.add("menu-item")

  menuItem.innerHTML = `
            <img src="${coffee.image}" alt="${coffee.title}" class="coffee-image" />
            <h3>${coffee.title}</h3>
            <p>${coffee.description}</p>
            <span class="price">$${(Math.random() * (5 - 2) + 2).toFixed(2)}</span>
            <a href="#contact" class="btn btn-primary">Order Now</a>
        `

  menuContainer.appendChild(menuItem)
 })
}

window.onload = fetchCoffeeMenu
