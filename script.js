const defaultMenu = [
  { name: "Pancakes", price: 5.99, image: "images/pancake.jpg", description: "Fluffy pancakes with maple syrup." },
  { name: "Burger", price: 7.99, image: "images/Burger.jpg", description: "Juicy beef burger with fresh lettuce and cheese." },
  { name: "Pizza", price: 8.99, image: "images/pizza.jpg", description: "Cheesy margherita pizza with fresh basil." },
  { name: "Omelette", price: 4.99, image: "images/omlette.jpg", description: "Classic omelette with cheese and veggies." },
];


const allDishes = [
  ...defaultMenu,
  { name: "Grilled Chicken", price: 9.99, image: "images/grilled.jpg", description: "Delicious grilled chicken served with garlic sauce." },
  { name: "Ice Cream", price: 3.99, image: "images/icecream.jpg", description: "Vanilla ice cream served with chocolate syrup." },
  { name: "Noodles", price: 6.50, image: "images/noodles.jpg", description: "Spicy noodles with veggies and sauce." },
  { name: "Biryani", price: 10.99, image: "images/biryani.jpg", description: "Fragrant Indian biryani with tender meat and spices." },
  { name: "French Fries", price: 3.50, image: "images/fries.jpg", description: "Crispy golden french fries." },
  { name: "Caesar Salad", price: 6.75, image: "images/salad.jpg", description: "Fresh Caesar salad with crunchy croutons." },
];

let filteredItems = [...defaultMenu]; 

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function displayItems(items) {
  const foodList = document.getElementById("food-list");
  foodList.innerHTML = "";
  if(items.length === 0) {
    foodList.innerHTML = `<p style="color: #ffcc00; font-weight: bold;">No dishes found.</p>`;
    return;
  }
  items.forEach(item => {
    foodList.innerHTML += `
      <div class="food-item" data-aos="fade-up">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">${formatPrice(item.price)}</p>
      </div>
    `;
  });

}
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase().trim();

  if(query === "") {
    
    filteredItems = [...defaultMenu];
  } else {
    
    filteredItems = allDishes.filter(item => item.name.toLowerCase().includes(query));
  }
  applySortAndDisplay();
});


const sortPrice = document.getElementById("sortPrice");
sortPrice.addEventListener("change", () => {
  applySortAndDisplay();
});

function applySortAndDisplay() {
  let sortedItems = [...filteredItems];
  const sortValue = sortPrice.value;

  if(sortValue === "low") {
    sortedItems.sort((a,b) => a.price - b.price);
  } else if(sortValue === "high") {
    sortedItems.sort((a,b) => b.price - a.price);
  }
  displayItems(sortedItems);
}


displayItems(defaultMenu);

const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if(document.body.classList.contains("light-mode")){
    toggleThemeBtn.textContent = "🌙";
  } else {
    toggleThemeBtn.textContent = "☀️";
  }
});


AOS.init({
  duration: 800,
  once: false,
  mirror:true,
  easing: 'ease-in-out', 
  anchorPlacement: 'top-bottom',
});
