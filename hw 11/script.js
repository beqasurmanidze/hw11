const products1 = [
  {
    title: "Gray T-Shirt",
    price: "$14.99",
    img: "GrayTShirt.png",
  },
  {
    title: "Black Jeans",
    price: "$34.99",
    img: "BlackJeans.png",
  },
  {
    title: "Green Jacket",
    price: "$59.95",
    img: "GreenJacket.png",
  },
  {
    title: "White Sneakers",
    price: "$49.95",
    img: "WhiteSneakers.png",
  },
];

const products2 = [
  {
    title: "Blue Sweatshirt",
    price: "$29.95 - $179.95",
    img: "BlueSweatshirt.png",
    colors: ["blue", "black"],
  },
  {
    title: "Red Hoodie",
    price: "$24.95 - $149.95",
    img: "RedHoodie.png",
    colors: ["red", "green"],
  },
  {
    title: "Yellow Pullover",
    price: "$19.95 - $129.95",
    img: "YellowPullover.png",
    colors: ["yellow", "orange"],
  },
  {
    title: "Purple Jacket",
    price: "$39.95 - $199.95",
    img: "PurpleJacket.png",
    colors: ["purple", "pink"],
  },
];

function ourproducts(product) {
  const container = document.getElementById("product");
  product.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = `images/${product.img}`;
    img.alt = product.title;
    img.classList.add("card_img");

    const title = document.createElement("h2");
    title.textContent = product.title;
    title.classList.add("card_title");

    const price = document.createElement("p");
    price.textContent = product.price;
    price.classList.add("card_price");
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);

    if (product.colors) {
      const colorContainer = document.createElement("div");

      product.colors.forEach((color) => {
        const colorDot = document.createElement("span");
        colorDot.style.backgroundColor = color;
        colorContainer.classList.add("color-container");

        colorContainer.appendChild(colorDot);
      });
      card.appendChild(colorContainer);
    }
    container.append(card);
  });
}

ourproducts(products1);
