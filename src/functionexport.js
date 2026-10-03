import imgsrc from "../images/restaurantimg.jpg";
function InitialPageLoad() {
  let head = document.querySelector("header");

  if (!head) {
    head = document.createElement("header");

    const navi = document.createElement("nav");

    const bt1 = document.createElement("button");
    bt1.textContent = "Home";
    bt1.id = "home";

    const bt2 = document.createElement("button");
    bt2.textContent = "Menu";
    bt2.id = "menu";

    const bt3 = document.createElement("button");
    bt3.textContent = "About";
    bt3.id = "about";

    navi.appendChild(bt1);
    navi.appendChild(bt2);
    navi.appendChild(bt3);

    head.appendChild(navi);
    document.body.appendChild(head);
  }
  //Content Section
  let content = document.querySelector("#content");
  if (!content) {
    content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);
  }
  content.innerHTML = "";
  const img = document.createElement("img");
  img.src = imgsrc;
  content.appendChild(img);
  const headline = document.createElement("h3");
  headline.textContent = "A Variety of Cuisines!";
  const addtext = document.createElement("p");
  addtext.textContent =
    "Make sure to stop by and try out the various cuisines with your family, friends and loved ones.";
  content.appendChild(headline);
  content.appendChild(addtext);
}

export { InitialPageLoad };
