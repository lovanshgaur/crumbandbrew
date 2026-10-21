import { headerAnimation } from "./js/header.js";
import { createMenuCard, menuImageCover } from "./js/menu.js";
import {
  generateBreakfastCard,
  breakfastCardsAnimation
} from "./js/breakfast.js";
import { generateServiceCard, serviceAnimation } from "./js/service.js";
import { generateBeliefCard } from "./js/belief.js";

headerAnimation();
createMenuCard();
menuImageCover();
generateBreakfastCard();
breakfastCardsAnimation();
generateServiceCard();
document.addEventListener("DOMContentLoaded", serviceAnimation);
generateBeliefCard();
