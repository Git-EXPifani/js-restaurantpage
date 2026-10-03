// import image from "../images/restaurantimg.jpg"
// const content = document.querySelector("#content");
// const img = document.createElement("")
import { InitialPageLoad } from "./functionexport.js";
import { MenuPage } from "./menusection.js";
InitialPageLoad();
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");

homeBtn.addEventListener("click", InitialPageLoad);
menuBtn.addEventListener("click", MenuPage);
