const testimonialData = [
  {
    text: "The kind of place that makes you want to stay for one more coffee.",
    author: "— A guest's note"
  },
  {
    text: "A masterclass in pastry. The most intentional bakery in the city.",
    author: "— The Culinary Review"
  },
  {
    text: "It feels like a slow Sunday morning, every day of the week.",
    author: "— Local Regular"
  }
];
gsap.registerPlugin(ScrollTrigger);

let curr = 0;
const testimonialEl = document.getElementById("testimonialText");
const authorEl = document.getElementById("testimonialAuthor");
function getTestimonials() {
  if (testimonialEl && authorEl) {
    setInterval(() => {
      gsap.to([testimonialEl, authorEl], {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          curr = (curr + 1) % testimonialData.length;
          testimonialEl.innerText = `"${testimonialData[curr].text}"`;
          authorEl.innerText = testimonialData[curr].author;
          gsap.to([testimonialEl, authorEl], { opacity: 1, duration: 1 });
        }
      });
    }, 6000);
  }
}

export { getTestimonials };
