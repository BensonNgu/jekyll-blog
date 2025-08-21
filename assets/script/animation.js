import { animate, scroll, inView } from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

const bar = document.getElementById("scroll-indicator");
console.log("Scroll indicator element:", bar);

// Bind page scroll progress (0..1) to scaleX of the bar
scroll(
     animate(bar, { scaleX: [0, 1] }, { easing: "linear" }),
     { target: document.documentElement } // use the whole page scroll
);


animate(
     ".half-input", 
     { rotae: 90 }, 
     { type: "spring", repeat: Infinity, repeatDelay: 0.2 }
)