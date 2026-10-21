gsap.registerPlugin(ScrollTrigger);

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
  }
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
// function generateServiceCard() {
//   serviceData.forEach((service) => {
//     const serviceCard = document.createElement("div");
//     serviceCard.classList.add("service-card");
//     serviceCard.innerHTML = `
//     <div class="serviceCard-top">
//         <div class="serviceId">${service.number}</div>
//         <div class="serviceTag">${service.tag}</div>
//     </div>
//     <div class="serviceCard-main">
//         <h3>${service.title}</h3>
//         <p>${service.description}</p>
//     </div>
//     <div class="serviceCard-bottom">
//         <div class="serviceCard-link">↘</div>
//     </div>
//     `;
//     sectionAside.appendChild(serviceCard);
//   });
// }
function generateServiceCard() {
  serviceData.forEach((service) => {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("service-card");
    serviceCard.innerHTML = `
        <div class="serviceCard-top">
            <span class="service-id">${service.number}</span>
            <span class="service-tag">${service.tag}</span>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-text">${service.description}</p>
    `;
    sectionAside.appendChild(serviceCard);
  });
}
function serviceAnimation() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    const serviceTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#service",
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true
      }
    });
    serviceTimeline
      .to(
        ".service-main",
        {
          left: "40%",
          width: "60%",
          duration: 1,
          ease: "power2.inOut"
        },
        0
      )
      .to(
        ".service-hero",
        {
          opacity: 0,
          duration: 0.5
        },
        0
      );
    serviceTimeline.to(
      ".service-cards",
      {
        yPercent: -66.666,
        duration: 3,
        ease: "none"
      },
      1
    );
    serviceTimeline
      .to(
        ".service-main",
        {
          left: "0%",
          width: "100%",
          duration: 1,
          ease: "power2.inOut"
        },
        4
      )
      .to(
        ".service-hero",
        {
          opacity: 1,
          duration: 0.5
        },
        4
      );
  });
}
export { generateServiceCard, serviceAnimation };
