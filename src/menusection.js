import sandwichImg from "../images/sandwich.jpeg";
import burgerImg from "../images/burger.jpg";
import pastaImg from "../images/pasta.jpeg";
import "./menu.css";

function MenuPage() {
  const content = document.querySelector("#content");

  // Clear the previous page's content
  content.innerHTML = "";

  // Menu heading
  const heading = document.createElement("h1");
  heading.classList.add("menu-heading");
  heading.textContent = "Our Menu";

  const subtitle = document.createElement("p");
  subtitle.classList.add("menu-subtitle");
  subtitle.textContent =
    "Fresh ingredients, bold flavors, and something for everyone.";

  content.appendChild(heading);
  content.appendChild(subtitle);

  // Menu items
  const menuItems = [
    {
      name: "Classic Sandwich",
      description:
        "Toasted artisan bread filled with fresh vegetables, grilled chicken, and our signature sauce.",
      price: "Rs. 650",
      image: sandwichImg,
      category: "FRESH & LIGHT",
    },
    {
      name: "House Special Burger",
      description:
        "A juicy grilled beef patty topped with melted cheese, crisp lettuce, tomatoes, and house sauce.",
      price: "Rs. 850",
      image: burgerImg,
      category: "CUSTOMER FAVORITE",
    },
    {
      name: "Creamy Alfredo Pasta",
      description:
        "Perfectly cooked pasta tossed in a rich, creamy Alfredo sauce with herbs and parmesan.",
      price: "Rs. 950",
      image: pastaImg,
      category: "COMFORT FOOD",
    },
  ];

  // Menu grid
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  menuItems.forEach((item) => {
    const card = document.createElement("article");
    card.classList.add("menu-card");

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    image.classList.add("menu-image");

    const details = document.createElement("div");
    details.classList.add("menu-details");

    const category = document.createElement("span");
    category.classList.add("menu-category");
    category.textContent = item.category;

    const name = document.createElement("h2");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.classList.add("menu-description");
    description.textContent = item.description;

    const footer = document.createElement("div");
    footer.classList.add("menu-footer");

    const price = document.createElement("span");
    price.classList.add("menu-price");
    price.textContent = item.price;

    const orderButton = document.createElement("button");
    orderButton.classList.add("order-button");
    orderButton.textContent = "Explore";

    footer.appendChild(price);
    footer.appendChild(orderButton);

    details.appendChild(category);
    details.appendChild(name);
    details.appendChild(description);
    details.appendChild(footer);

    card.appendChild(image);
    card.appendChild(details);

    menuGrid.appendChild(card);
  });

  content.appendChild(menuGrid);

  // Footer
  const footer = document.createElement("footer");
  footer.classList.add("menu-page-footer");
  footer.textContent = "Made with passion. Served with love.";

  content.appendChild(footer);
}

export { MenuPage };
