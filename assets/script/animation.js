import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

const bar = document.getElementById("scroll-indicator");
console.log("Scroll indicator element:", bar);

// Bind page scroll progress (0..1) to scaleX of the bar
scroll(
     animate(bar, { scaleX: [0, 1] }, { easing: "linear" }),
     { target: document.documentElement } // use the whole page scroll
);