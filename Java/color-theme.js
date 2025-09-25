// color-theme.js

// Apply the saved background color on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('bgColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;

    const preview = document.getElementById('preview');
    if (preview) {
      preview.style.backgroundColor = savedColor;
    }

    const colorPicker = document.getElementById('colorPicker');
    if (colorPicker) {
      colorPicker.value = savedColor;
    }
  }
});

// Save and apply new background color
function setBackgroundColor(color) {
  localStorage.setItem('bgColor', color);
  document.body.style.backgroundColor = color;
}
