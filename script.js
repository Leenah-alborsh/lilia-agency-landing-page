/*  PRELOADER  */
/* Handles the loading screen and initial animations */
document.body.classList.add("loading");
const preloaderTime = 1800;

window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");

  setTimeout(() => {
    loader.style.opacity = "0";
  }, preloaderTime - 600);

  setTimeout(() => {
    loader.style.display = "none";
    document.body.classList.remove("loading");

    document.querySelector(".left-side").classList.add("animate-left");
    document.querySelector(".right-side img").classList.add("animate-bottom");
  }, preloaderTime);
});


/*  HEADER ON SCROLL  */
/* Adds a class to header when scrolling down */
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) header.classList.add("scroll-active");
  else header.classList.remove("scroll-active");
});


/*  NAV CLICK → SMOOTH SCROLL  */
/* Smoothly scrolls to section when navbar item is clicked */
document.querySelectorAll(".navbar li").forEach(li => {
  li.addEventListener("click", () => {
    const target = li.getAttribute("data-link");
    const section = document.getElementById(target);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }

    document.querySelector(".navbar").classList.remove("active");
  });
});


/*  BACK TO TOP BUTTON  */
/* Controls display of the scroll-to-top button */
const scrollBtn = document.getElementById("scrollTop");

const heroSection = document.querySelector(".hero");
const featuresSection = document.querySelector(".container");

let hideButton = false;

/* Shows or hides the button based on scroll position */
function updateButtonVisibility() {
  if (hideButton) {
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.style.display = "flex";
  }
}

/* Observes hero section */
const heroObserver = new IntersectionObserver(
  (entries) => {
    hideButton = entries[0].isIntersecting;
    updateButtonVisibility();
  },
  { threshold: 0.5 }
);
heroObserver.observe(heroSection);

/* Observes features section */
const featuresObserver = new IntersectionObserver(
  (entries) => {
    hideButton = entries[0].isIntersecting;
    updateButtonVisibility();
  },
  { threshold: 0.5 }
);
featuresObserver.observe(featuresSection);

/* Scrolls smoothly to top when button is clicked */
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


/*  NAV ACTIVE ON SCROLL  */
/* Highlights current section in navbar */
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".navbar li");

/* Observes each section to update active navbar item */
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let currentId = entry.target.getAttribute("id");

        navItems.forEach((li) => li.classList.remove("active"));

        navItems.forEach((li) => {
          if (li.getAttribute("data-link") === currentId) {
            li.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

/* Mobile menu toggle */
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* Start observing all sections */
sections.forEach((sec) => navObserver.observe(sec));


/*  BACKGROUND SHAPES FADE  */
/* Fades background shapes when scrolling */
window.addEventListener("scroll", function () {
  const shapes = document.querySelectorAll(".bg-shape");
  shapes.forEach((shape) => {
    shape.style.opacity = window.scrollY > 150 ? "0" : "0.5";
  });
});


/*  ABOUT SECTION ANIMATION  */
/* Triggers the about section animation when entering view */
const aboutSec = document.querySelector(".about-section");

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutSec.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);
aboutObserver.observe(aboutSec);


/*  COUNTER SECTION  */
/* Animated counters that increase when stats section appears */
let counters = document.querySelectorAll(".counter");
let section = document.querySelector("#stats");
let hasRun = false;

/* Starts counting animation */
function startCounting() {
  counters.forEach((counter) => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let speed = target / 120;

    let update = setInterval(() => {
      count += speed;
      counter.textContent = Math.floor(count);

      if (count >= target) {
        counter.textContent = target;
        clearInterval(update);
      }
    }, 20);
  });
}

/* Observes stats section and runs counters once */
const counterObserve = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasRun) {
        startCounting();
        hasRun = true;
      }
    });
  },
  { threshold: 0.4 }
);
counterObserve.observe(section);


/*  SERVICES HOVER INTERACTION  */
/* Interactive hover effect between service cards and steps */
const cards = document.querySelectorAll(".service-card");
const steps = document.querySelectorAll(".step");

/* Hovering over card highlights corresponding step */
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    let stepNumber = card.getAttribute("data-step");

    steps.forEach((step) => step.classList.remove("active-step"));
    document.querySelector(".step" + stepNumber).classList.add("active-step");

    card.classList.add("hovering");
  });

  card.addEventListener("mouseleave", () => {
    steps.forEach((step) => step.classList.remove("active-step"));
    card.classList.remove("hovering");
  });
});

/* Hovering over step highlights corresponding card */
steps.forEach((step) => {
  step.addEventListener("mouseenter", () => {
    let number = step.textContent.trim();
    const card = document.querySelector(`.service-card[data-step="${number}"]`);

    steps.forEach((s) => s.classList.remove("active-step"));
    step.classList.add("active-step");

    cards.forEach((c) => c.classList.remove("hovering"));
    card.classList.add("hovering");
  });

  step.addEventListener("mouseleave", () => {
    steps.forEach((s) => s.classList.remove("active-step"));
    cards.forEach((c) => c.classList.remove("hovering"));
  });
});


/*  PORTFOLIO FILTER  */
/* Filters portfolio items with animation */
const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    let delay = 0;

    items.forEach((item) => {
      item.classList.remove("show");
      item.classList.add("hide");

      if (filter === "all" || item.classList.contains(filter)) {
        setTimeout(() => {
          item.classList.remove("hide");
          item.classList.add("show");
        }, delay);

        delay += 90;
      }
    });
  });
});

/* Shows portfolio items on page load with staggered animation */
window.addEventListener("load", () => {
  let delay = 0;

  items.forEach((item) => {
    setTimeout(() => {
      item.classList.add("show");
      item.classList.remove("hide");
    }, delay);

    delay += 90;
  });
});


/*  TEAM SECTION  */
/* Team cards animation triggered when section enters view */
const teamSection = document.querySelector(".team-section");
const teamCards = document.querySelectorAll(".team-card");

const teamObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        teamCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 250);
        });

        teamObserver.unobserve(teamSection);
      }
    });
  },
  { threshold: 0.3 }
);
teamObserver.observe(teamSection);


/*  PRICING CARDS  */
/* Shows pricing cards with staggered animation */
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".price-card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 250);
  });
});


/*  FEEDBACK SLIDER (DESKTOP)  */
/* Handles slider movement & animation for feedback section */
let slider2 = document.querySelector(".slider");
let dots2 = document.querySelectorAll(".dot");
let pages = document.querySelectorAll(".feedback-page");
let current = 0;

/* Updates slider position and animations */
function updateFeedbackSlider() {
  slider2.style.transform = `translateX(-${current * 50}%)`;

  dots2.forEach((dot) => dot.classList.remove("active"));
  dots2[current].classList.add("active");

  pages[current].querySelectorAll(".feedback-card").forEach((card, i) => {
    setTimeout(() => card.classList.add("show"), i * 200);
  });
}

/* Click to change slider */
dots2.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    current = i;
    updateFeedbackSlider();
  });
});

/* Auto slide every 5 seconds */
setInterval(() => {
  current = (current + 1) % 2;
  updateFeedbackSlider();
}, 5000);

/* Initial run */
updateFeedbackSlider();


