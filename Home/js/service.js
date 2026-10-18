const serviceData = [
  {
    id: 1,
    number: "01",
    title: "Artisan Coffee",
    description:
      "Thoughtfully sourced beans, carefully brewed, and served just the way you like it.",
    tag: "BREWED WITH CARE"
  },
  {
    id: 2,
    number: "02",
    title: "Fresh From The Oven",
    description:
      "Small-batch pastries, buttery croissants, and seasonal treats made for the everyday indulgence.",
    tag: "BAKED DAILY"
  },
  {
    id: 3,
    number: "03",
    title: "Your Little Escape",
    description:
      "Warm corners, familiar faces, and a space that makes staying a little longer feel right.",
    tag: "STAY A WHILE"
  },
//   {
//     id: 4,
//     number: "04",
//     title: "Gather Around",
//     description:
//       "Intimate catch-ups, creative sessions, and meaningful celebrations over something good.",
//     tag: "MADE TOGETHER"
//   }
];
const sectionAside = document.querySelector("#service-aside");
function generateServiceCard() {
  serviceData.forEach((service) => {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("service-card");
    serviceCard.innerHTML = `
    <div class="serviceCard-top">
        <div class="serviceId">${service.number}</div>
        <div class="serviceTag">${service.tag}</div>
    </div>
    <div class="serviceCard-main">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    </div>
    <div class="serviceCard-bottom">
        <div class="serviceCard-link">↘</div>
    </div>
    `;
    sectionAside.appendChild(serviceCard);
  });
}

export { generateServiceCard };
