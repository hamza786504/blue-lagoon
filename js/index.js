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
