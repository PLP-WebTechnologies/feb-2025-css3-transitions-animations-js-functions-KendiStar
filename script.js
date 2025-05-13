// Animate the box
function animateBox() {
    const box = document.getElementById("box");
    box.classList.toggle("animate");
  }
  
  // Save selected color to localStorage
  function saveColor() {
    const color = document.getElementById("colorPicker").value;
    localStorage.setItem("bgColor", color);
    document.body.style.backgroundColor = color;
  }
  
  // Load saved color when page loads
  window.onload = function () {
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      document.getElementById("colorPicker").value = savedColor;
    }
  };
  