// 提示按鈕
const toggleButton = document.getElementById('toggleButton');
const hiddenImage = document.getElementById('hiddenImage');
const toggleText = document.getElementById('toggleText');
const imageToShow = document.getElementById('imageToShow');
let clickCount = 0;

toggleButton.addEventListener('click', function() {
  clickCount++;

  if (clickCount === 1) {
    // First click: Show the image
    hiddenImage.classList.remove('hidden');
    toggleText.textContent = '提示二';
  } else if (clickCount === 2) {
    // Second click: Change to the second image
    imageToShow.src = '../img/clock2.png';
    toggleText.textContent = '提示三';
  } else if (clickCount === 3) {
    // Third click: Change to the third image and hide the button
    imageToShow.src = '../img/clock-g.png';
    toggleButton.classList.add('hidden');
    imageCaption.classList.remove('hidden');
  }
});