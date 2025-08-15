const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");
const mainContent = document.getElementById("mainContent");

mainContent.addEventListener("scroll", () => {
  let current = "";
  let minDistance = Infinity;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const containerRect = mainContent.getBoundingClientRect();
    const distance = Math.abs(rect.top - containerRect.top);

    if (distance < minDistance) {
      minDistance = distance;
      current = section.id;
    }
  });

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.section === current);
  });
});

// navbar click to go to the page
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.dataset.section);
    document.getElementById(item.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* ================= skills  ================= */

const tabs = document.querySelectorAll(".s-navbar li");
const skill_content = document.querySelectorAll(".s-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and sections
    tabs.forEach((t) => t.classList.remove("active"));
    skill_content.forEach((s) => s.classList.remove("active"));

    // Add active class to clicked tab and corresponding section
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

/* ================= project  ================= */

const p_track = document.querySelector(".p-slider");
const p_items = document.querySelectorAll(".p-card");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const currentWidth = document.querySelector(".p-slider").clientWidth;
let currentIndex = 0;
console.log(currentWidth);

function updateCarousel() {
  p_track.style.transform = `translateX(-${currentIndex * currentWidth}px)`;
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % p_items.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + p_items.length) % p_items.length;
  updateCarousel();
});

/* ================= certificates  ================= */
const container = document.getElementById("carousel");
const items = Array.from(container.querySelectorAll(".carousel-item"));

// Highlight the item whose center is closest to the container's center
function updateActiveItem() {
  const cRect = container.getBoundingClientRect();
  const containerCenterY = cRect.top + container.clientHeight / 2;

  let closest = null;
  let minDist = Infinity;

  for (const item of items) {
    const r = item.getBoundingClientRect();
    const itemCenterY = r.top + r.height / 2;
    const d = Math.abs(containerCenterY - itemCenterY);
    if (d < minDist) {
      minDist = d;
      closest = item;
    }
  }

  for (const it of items) it.classList.remove("active");
  if (closest) closest.classList.add("active");
}

// Center a specific item index (0-based) without fighting scroll snap
function centerOnIndex(index) {
  index = Math.max(0, Math.min(items.length - 1, index));
  const target = items[index];

  // Temporarily disable snap so the jump doesn't get re-snapped mid-flight
  const prevInlineSnap = container.style.scrollSnapType;
  container.style.scrollSnapType = "none";

  // Compute delta using rects so we work in the same coordinate space
  const cRect = container.getBoundingClientRect();
  const tRect = target.getBoundingClientRect();
  const delta =
    tRect.top + tRect.height / 2 - (cRect.top + container.clientHeight / 2);

  container.scrollTop += delta;

  // Restore snap on the next frame and sync highlight
  requestAnimationFrame(() => {
    container.style.scrollSnapType = ""; // revert to CSS (y mandatory)
    updateActiveItem();
  });
}

// Throttle scroll handler with rAF for smoothness
let ticking = false;
container.addEventListener("scroll", () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(() => {
      updateActiveItem();
      ticking = false;
    });
  }
});

// Recompute on resize (layout changes)
window.addEventListener("resize", updateActiveItem);

// Start at Item 2 (index 1) after layout is stable
// Use load + a rAF to guarantee sizes are final
window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    centerOnIndex(1); // 0-based → Item 2
  });
});

// Initial highlight (in case there's no scroll yet)
updateActiveItem();
