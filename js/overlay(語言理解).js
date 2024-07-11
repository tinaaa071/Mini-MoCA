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

// 重新錄音
document.getElementById('show-overlay-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
  });

  document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
  });

// 變更文字＆按鈕顏色
document.getElementById('complete').addEventListener('click', function() {
    // Get the seconds element
    const secondsElement = document.getElementById('seconds');
    const statusElement = document.getElementById('status');
    
    // Change the text to 0
    secondsElement.textContent = '0 秒';
    statusElement.textContent = '完成錄音！';
    
    // Change the text color to red
    secondsElement.classList.add('text-red-500');
    statusElement.classList.add('text-green-500');

    // Get the complete button
    const completeButton = document.getElementById('complete');
    
    // Change the background color to bg-green-300
    completeButton.classList.remove('bg-green-500','border-green-500');
    completeButton.classList.add('bg-green-300','border-green-300');
    
    // Add the cursor-default class
    completeButton.classList.add('cursor-default');
  });