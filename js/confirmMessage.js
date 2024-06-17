const confirmButton = document.getElementById('confirm');
  const overlay = document.getElementById('overlay');

  confirmButton.addEventListener('click', function() {
    // Show the overlay
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');

    // Hide the overlay after 2 seconds
    setTimeout(function() {
      overlay.classList.add('hidden');
      overlay.classList.remove('flex');
    }, 1000);
  });