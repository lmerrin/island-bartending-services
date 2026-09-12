const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const year = document.querySelector("[data-year]");

year.textContent = new Date().getFullYear();
document.querySelector('input[name="eventDate"]').min = new Date()
  .toISOString()
  .split("T")[0];
window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 40),
  { passive: true },
);

function setMenu(open, returnFocus = false) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.querySelector(".sr-only").textContent = open
    ? "Close navigation"
    : "Open navigation";
  menuButton.classList.toggle("active", open);
  nav.classList.toggle("open", open);
  document.body.style.overflow = open ? "hidden" : "";
  if (open) nav.querySelector("a").focus();
  if (!open && returnFocus) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    setMenu(false);
  }),
);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false, true);
  }
  if (
    event.key === "Tab" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    const focusable = [...nav.querySelectorAll("a"), menuButton];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

window.addEventListener("resize", () => {
  if (
    window.innerWidth > 800 &&
    menuButton.getAttribute("aria-expanded") === "true"
  )
    setMenu(false);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

document.getElementById("quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `Event inquiry: ${data.get("eventType")} on ${data.get("eventDate")}`;
  const body = [
    `Name: ${data.get("firstName")} ${data.get("lastName")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone") || "Not provided"}`,
    `Event type: ${data.get("eventType")}`,
    `Event date: ${data.get("eventDate")}`,
    `Estimated guest count: ${data.get("guestCount")}`,
    `Event setting: ${data.get("setting")}`,
    `Location: ${data.get("location")}`,
    `Event timing: ${data.get("eventTime") || "Not provided"}`,
    "",
    "Event details:",
    data.get("details"),
  ].join("\n");
  document.getElementById("form-status").textContent =
    "Opening your email app with the inquiry details…";
  window.location.href = `mailto:islandbartendingservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
