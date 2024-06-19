const texts = [
  '再加一份 7 塊錢的油豆腐，還剩多少錢？（直接寫下答案）',
  '再加一顆 7 塊錢的滷蛋，還剩多少錢？（直接寫下答案）',
  '再加一塊 7 塊錢的豆皮，還剩多少錢？（直接寫下答案）',
  '再加一塊 7 塊錢的豬血糕，還剩多少錢？（直接寫下答案）',
  '太棒了，你買完囉！'
];

let currentIndex = 0; // Initialize index to track current text
const contentElement = document.getElementById('content');
const nextDishElement = document.getElementById('nextDish');
const hiddenImageElement = document.getElementById('hiddenImage');
const nextButtonElement = document.getElementById('next');

nextButtonElement.addEventListener('click', function() {
  // Set the text content to the current index in the texts array
  contentElement.textContent = texts[currentIndex];

  // Increment the index
  currentIndex++;
  
  // After the fourth click, change the button text to "完成"
  if (currentIndex === 4) {
    nextButtonElement.textContent = '完成';
  }
  
  // After the fifth click, hide the nextDish div and show the hidden image
  if (currentIndex === 5) {
    nextDishElement.classList.add('hidden');
    hiddenImageElement.classList.remove('hidden');
  }
});