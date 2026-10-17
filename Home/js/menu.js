const menuData = [
  {
    "menu-category": "Coffee",
    items: [
      { name: "Double espresso", price: 2.75 },
      { name: "Americano", price: 4.25 },
      { name: "Cortado", price: 4.0 },
      { name: "Cappuccino", price: 5.0 },
      { name: "Latte", price: 6.75 },
      { name: "Mocha", price: 7.25 },
      { name: "Cold brew", price: 6.75 }
    ]
  },
  {
    "menu-category": "Milk Options",
    items: [
      { name: "Pistachio milk", price: 0.5 },
      { name: "Speciality oat milk", price: 0.5 },
      { name: "Speciality almond milk", price: 0.5 },
      { name: "Oat milk", price: 0.0 },
      { name: "Almond milk", price: 0.0 },
      { name: "Whole milk", price: 0.0 },
      { name: "Coconut Whip", price: 0.75 },
      { name: "Tru Whip", price: 0.75 }
    ]
  },
  {
    "menu-category": "Tea",
    items: [
      { name: "Chai", price: 7.25 },
      {
        name: "Matcha",
        description: "Nami & Matcha Freak ceremonial grade matcha",
        price: 7.5
      },
      {
        name: "Syrups",
        description: [
          "Vanilla",
          "Caramel",
          "Lavender",
          "Strawberry",
          "Cinnamon Roll",
          "Banana Bread",
          "Pistachio"
        ],
        price: 0.75
      }
    ]
  },
  {
    "menu-category": "Fall Specials",
    items: [
      { name: "Pumpkin Spice Latte", price: 8.25 },
      { name: "Brown Sugar Matcha", price: 8.25 },
      { name: "Apple Spice Chai", price: 8.0 },
      { name: "Apple Crisp Olipop Dirty Soda", price: 7.0 }
    ]
  }
];

const menuMain = document.querySelector(".menu-main");
function createMenuCard() {
  menuData.forEach((category) => {
    console.log(category["menu-category"]);
    const menuCard = document.createElement("div");
    const menuCategory = document.createElement("div");
    menuCategory.classList.add("menu-category");
    menuCategory.innerHTML = `<h4>${category["menu-category"]}</h4>`;
    menuCard.classList.add("menu-card");
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");
    category.items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-item");
      menuItem.innerHTML = `
        <h6 class="item-name">${item.name}</h6>
        <h6 class="item-price">$${item.price}</h6>
      `;
      menuItems.appendChild(menuItem);
    });
    menuCard.append(menuCategory, menuItems);
    menuMain.appendChild(menuCard);
  });
}

const menuImages = [
  {
    name: "Coffee Portrait",
    url: "https://images.unsplash.com/photo-1783949247747-210d1403da8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    name: "Premium Cafe",
    url: "https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    name: "Coffee Shop",
    url: "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    name: "Cafe Lifestyle",
    url: "https://images.unsplash.com/photo-1769114474398-a7aef0625ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    name: "Coffee Aesthetic",
    url: "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    name: "Cozy Cafe",
    url: "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  }
];

function menuImageCover() {
  const menuImage = document.getElementById("menuImage");
  let idx = 0;
  setInterval(() => {
    menuImage.src = menuImages[idx].url;
    idx = (idx + 1) % menuImages.length;
  }, 1500);
}

export { createMenuCard, menuImageCover };
