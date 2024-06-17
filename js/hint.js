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
    imageToShow.src = 'https://images.unsplash.com/photo-1718480419942-a21efc9b5409?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Change to the path of your second image
    toggleText.textContent = '提示三';
  } else if (clickCount === 3) {
    // Third click: Change to the third image and hide the button
    imageToShow.src = 'https://plus.unsplash.com/premium_photo-1671253984802-eaa9aa4adbf5?q=80&w=2750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Change to the path of your third image
    toggleButton.classList.add('hidden');
    imageCaption.classList.remove('hidden');
  }
});