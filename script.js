function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = document.getElementById("toolsDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function showContent(id) {
  const sections = document.querySelectorAll(".tool-section");
  sections.forEach(section => section.style.display = "none");

  const selected = document.getElementById(id);
  if (selected) selected.style.display = "block";
}

// Typing Animation
const typedText = document.getElementById("typedText");
const phrases = ["Frontend Developer", "UI/UX Enthusiast", "Creative Coder"];
let index = 0;
let charIndex = 0;

function type() {
  if (index >= phrases.length) index = 0;
  const current = phrases[index];

  if (charIndex <= current.length) {
    typedText.innerText = current.slice(0, charIndex++);
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      charIndex = 0;
      index++;
      type();
    }, 1500);
  }
}

// Scroll Reveal Animation
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".about-left, .about-right, .about-card");
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
});

// Optional: Dark Mode Toggle
const toggle = document.getElementById("darkToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
  const taglines = [
    "Creative Thinker",
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Code Artist ",
    "React ",
    "Responsive Design Champ "
  ];

  const tagElement = document.getElementById("animatedTag");
  const typedText = document.getElementById("typedText");

  if (tagElement && typedText) {
    let tagIndex = 0;

    // Function to update animated tag
    function rotateTags() {
      tagElement.textContent = taglines[tagIndex];
      tagIndex = (tagIndex + 1) % taglines.length;
    }

    // Initial values
    tagElement.textContent = taglines[0];
    typedText.textContent = "Let’s build something amazing together.";

    // Rotate tag every 2.5 seconds
    setInterval(rotateTags, 1500);
  } else {
    console.warn("Animated tag or typed text element not found.");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const heroPhrases = [
    "Clean Code. Creative Interfaces. Better Web.",
    "Design First. Code Smart. Iterate Fast.",
    "From Vision to Pixel Perfection.",
    "User-Friendly Meets Developer-Friendly."
  ];

  const tagline = document.getElementById("heroTagline");
  let i = 0;

  function rotateTaglines() {
    tagline.textContent = heroPhrases[i];
    i = (i + 1) % heroPhrases.length;
  }

  // Set first line immediately
  tagline.textContent = heroPhrases[0];

  // Change every 3.5 seconds
  setInterval(rotateTaglines, 1500);
});

const sourceButtons = document.querySelectorAll('.source-btn');
const codeSnippets = [
  {
    html: `<pre><code>&lt;div class="product"&gt;Yoga Website&lt;/div&gt;</code></pre>`,
    css: `<pre><code>.product { color: blue; }</code></pre>`,
    js: `<pre><code>console.log("Yoga-Web loaded");</code></pre>`
  },
  {
    html: `<pre><code>&lt;div class="weather"&gt;Weather App&lt;/div&gt;</code></pre>`,
    css: `<pre><code>.weather { color: gray; }</code></pre>`,
    js: `<pre><code>console.log("Weather app initialized");</code></pre>`
  },
  {
    html: `<pre><code>&lt;div class="food"&gt;Food Page&lt;/div&gt;</code></pre>`,
    css: `<pre><code>.food { color: green; }</code></pre>`,
    js: `<pre><code>console.log("food page ");</code></pre>`
  },
  {
    html: `<pre><code>&lt;div class="Health"&gt;Health Challenge Tracker&lt;/div&gt;</code></pre>`,
    css: `<pre><code>.Health { color: purple; }</code></pre>`,
    js: `<pre><code>console.log("Tracker loaded");</code></pre>`
  }
];

sourceButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const outputDiv = btn.closest('.project-card').querySelector('.project-output');

    // Toggle visibility
    if (outputDiv.style.display === 'block') {
      outputDiv.style.display = 'none';
      outputDiv.innerHTML = '';
    } else {
      outputDiv.style.display = 'block';
      outputDiv.innerHTML = `
        <h3>HTML</h3>${codeSnippets[index].html}
        <h3>CSS</h3>${codeSnippets[index].css}
        <h3>JavaScript</h3>${codeSnippets[index].js}
      `;
    }
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const contact = document.getElementById("contact");
  contact.style.opacity = "0";

  setTimeout(() => {
    contact.style.opacity = "1";
    contact.style.transition = "opacity 2s ease-in-out";
  }, 300);
});





