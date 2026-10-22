import { headerAnimation } from "./js/header.js";
import { createMenuCard, menuImageCover } from "./js/menu.js";
import {
  generateBreakfastCard,
  breakfastCardsAnimation
} from "./js/breakfast.js";
import { generateServiceCard, serviceAnimation } from "./js/service.js";
import { generateBeliefCard } from "./js/belief.js";
import { getTestimonials } from "./js/testimonial.js";

document.addEventListener("DOMContentLoaded", () => {
  headerAnimation();
  createMenuCard();
  menuImageCover();
  generateBreakfastCard();
  breakfastCardsAnimation();
  generateServiceCard();
  serviceAnimation();
  generateBeliefCard();
  getTestimonials();
});
