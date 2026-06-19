const features = [
  {
    title: "Cue list management",
    description: "Organize tracks in clear playback order so operators can move fast without confusion."
  },
  {
    title: "Transport controls",
    description: "Play, pause, and navigate cues with responsive controls designed for live timing."
  },
  {
    title: "Project-level fade settings",
    description: "Set global fade behavior that keeps transitions smooth across every cue in a show."
  },
  {
    title: "Practical import behavior",
    description: "Bring in audio quickly and keep prep friction low during busy rehearsal windows."
  },
  {
    title: "Focused macOS experience",
    description: "A streamlined interface tuned for reliability and speed in production environments."
  },
  {
    title: "Production-ready workflow",
    description: "From setup to live execution, CueLite keeps the operator path simple and dependable."
  }
];

const highlights = [
  "Polished cue list interactions",
  "Per-project preferences",
  "Faster playback operations",
  "Smoother fades between cues",
  "Cleaner setup flow",
  "Ongoing app refinement"
];

const featureGrid = document.getElementById("featureGrid");
const highlightGrid = document.getElementById("highlightGrid");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (featureGrid) {
  featureGrid.innerHTML = features
    .map(
      (feature) => `
        <article class="card">
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        </article>
      `
    )
    .join("");
}

if (highlightGrid) {
  highlightGrid.innerHTML = highlights
    .map((item) => `<span class="chip">${item}</span>`)
    .join("");
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
