const breakfastData = [
  {
    image:
      "https://images.unsplash.com/photo-1696721497997-ce4482097cc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Vmllbm5vaXNlcmllfGVufDB8fDB8fHww",
    title: "Viennoiserie",
    text: "Our 72-hour lamination process creates an unparalleled honeycomb structure.",
    alt: "Viennoiserie"
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q29mZmVlfGVufDB8fDB8fHww",
    title: "Specialty Brews",
    text: "Single-origin estate beans, precision-dialed for a structured cup.",
    alt: "Coffee"
  },
  {
    image:
      "https://images.unsplash.com/photo-1620921592619-652411a0d01a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291cmRvdWdofGVufDB8fDB8fHww",
    title: "Artisan Loaves",
    text: "Naturally leavened sourdough, fermented slowly for complex depth.",
    alt: "Sourdough"
  }
];

const breakfastCards = document.getElementById("breakfastCards");
function generateBreakfastCard() {
  breakfastData.forEach((breakfast) => {
    const breakfastCard = document.createElement("div");
    breakfastCard.classList.add("breakfast-card");
    breakfastCard.innerHTML = `
    <img src="${breakfast.image}" alt="${breakfast.alt}">
    <h2>${breakfast.title}</h2>
    <p>${breakfast.text}</p>
  `;
    breakfastCards.appendChild(breakfastCard);
  });
}

function breakfastCardsAnimation() {
  gsap.from(".breakfast-card", {
    scrollTrigger: { trigger: breakfastCards, start: "top 85%" },
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
  });
}
export { generateBreakfastCard, breakfastCardsAnimation };
