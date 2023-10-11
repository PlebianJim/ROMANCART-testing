//------------------------------- RIPPLE EFFECT ON MOUSEOVER -------------------------------//
// Create a div to hold the ripple effect
const ripple = document.createElement("div");
ripple.classList.add("ripple");

// Add event listener for mouseover
document.addEventListener("mousemove", (event) => {
  // Get mouse position
  const x = event.clientX;
  const y = event.clientY;

  // Add ripple and animate it
  const ripple = document.createElement("div");
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add("ripple");
  document.body.appendChild(ripple);

  // Remove ripple after delay
  setTimeout(() => {
    ripple.remove();
  }, 500);
});

//------------------------------- SOME OTHER FUNCTION -------------------------------//