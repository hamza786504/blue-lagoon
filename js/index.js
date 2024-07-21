const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
  menu.classList.add("hidden");
});

const overlay = document.getElementById("overlay");
const closeOverlay = document.getElementById("close-overlay");

// Show the overlay
overlay.classList.remove("hidden");

// Close the overlay when the close button is clicked
closeOverlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

// tailwind config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add Inter to the sans font family
      },
      colors: {
        clifford: "#da373d",
      },
      aspectRatio: {
        "9/10": "9/10",
      },
    },
  },
};

// convert to german


document.addEventListener("DOMContentLoaded", function () {
  // English button click event
  document
    .getElementById("language-btn")
    .addEventListener("click", function () {
      document.getElementById("language-dropdown").classList.toggle("hidden");
    });

  // German button click event
  document.getElementById("german-btn").addEventListener("click", function () {
    // Replace content with German version
    replaceContentWithGerman();
    // Close dropdown
    document.getElementById("language-dropdown").classList.add("hidden");
  });
});

function replaceContentWithGerman() {
  // Replace specific content with German text
  document.querySelector("h1").textContent = "Unser Glaube";
  document.querySelectorAll(".content-text").forEach(function (p) {
    switch (p.textContent.trim()) {
      case "At Blue Lagoon, we believe in the power of genuine connections. In a world where endless swiping often leads to fleeting encounters, we stand firm in our commitment to fostering meaningful relationships based on shared intentions.":
        p.textContent =
          "Bei Blue Lagoon glauben wir an die Kraft echter Verbindungen. In einer Welt, in der endloses Wischen oft zu flüchtigen Begegnungen führt, stehen wir zu unserem Engagement, bedeutungsvolle Beziehungen auf der Grundlage gemeinsamer Absichten zu fördern.";
        break;
      // Add more cases for other paragraphs as needed
    }
  });
}
