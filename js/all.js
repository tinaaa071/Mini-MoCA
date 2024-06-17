function goBack() {
  window.history.back();
}

// Overlay
const closeButton = document.getElementById('close-button');
const overlay = document.getElementById('overlay');

closeButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

// Hidden Text
const hiddenText = document.getElementById('hidden-text');

closeButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
    hiddenText.classList.remove('hidden');
});

// Second Overlay
const secondOverlay = document.getElementById('second-overlay');

closeButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
    hiddenText.classList.remove('hidden');

    setTimeout(() => {
        secondOverlay.classList.remove('hidden');
    }, 2000);
});

// Change Text
const changeTextButton = document.getElementById('change-text-button');
const thirdOverlay = document.getElementById('third-overlay');

closeButton.addEventListener('click', () => {
  overlay.classList.add('hidden');
  hiddenText.classList.remove('hidden');

  setTimeout(() => {
      secondOverlay.classList.remove('hidden');
  }, 2000);
});

changeTextButton.addEventListener('click', () => {
  hiddenText.innerHTML = '<h2 class="mb-2 text-gray-900">語音播放中</h2><p class="text-blue-500">剩餘次數：0</p>';
  secondOverlay.classList.add('hidden');

  setTimeout(() => {
    thirdOverlay.classList.remove('hidden');
    
    // Set a timeout to hide the third overlay after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        thirdOverlay.classList.add('hidden');
    }, 3000);
}, 2000);
});

