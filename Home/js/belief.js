const beliefs = [
  {
    num: "01 /",
    title: "Time",
    subtitle: "Never rushed.",
    description:
      "We give our dough the time it needs to develop complex flavors naturally, without commercial shortcuts or additives."
  },
  {
    num: "02 /",
    title: "Ingredients",
    subtitle: "Chosen with care.",
    description:
      "We source single-origin beans and local, unbleached flours. When you start with the best, you just have to let it shine."
  },
  {
    num: "03 /",
    title: "Craft",
    subtitle: "Made by hand.",
    description:
      "Every loaf is shaped by hand, every shot of espresso dialed in manually. We respect the delicate details in every batch."
  },
  {
    num: "04 /",
    title: "Everyday",
    subtitle: "Made to be shared.",
    description:
      "Good food shouldn't be reserved for special occasions. We exist to make your ordinary, everyday moments feel special."
  }
];
const beliefCards = document.querySelector(".beliefs-cards");
function generateBeliefCard() {
  beliefs.forEach((belief) => {
    const beliefCard = document.createElement("div");
    beliefCard.classList.add("belief-card");
    beliefCard.innerHTML = `
        <span class="belief-id">${belief.num}</span>
        <h3 class="belief-title">${belief.title}</h3>
        <div class="belief-desc">
            <p class="belief-subtitle">${belief.subtitle}</p>
            <p class="belief-text">${belief.description}</p>
        </div>
    `;
    beliefCards.appendChild(beliefCard);
  });
}

export { generateBeliefCard };
