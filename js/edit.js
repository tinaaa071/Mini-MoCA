document.querySelector('.change-content-button').addEventListener('click', function() {
    // Get the content element within basic-tabs-2
    const tabContentElement = document.getElementById('tab-content');
    
    // Create a new div element
    const newDiv = document.createElement('div');
    newDiv.className = 'new-content-div'; // Add any classes you want
    newDiv.innerHTML = `
      <h2 class="text-xl font-bold">New Content</h2>
      <p>This is the new content inside the new div.</p>
    `;
    
    // Replace the existing content with the new div
    tabContentElement.innerHTML = ''; // Clear the existing content
    tabContentElement.appendChild(newDiv); // Append the new div
  });

  // Function to show id="editGroup" and hide id="nextPage"
  function showEditGroup() {
    document.getElementById('editGroup').classList.remove('hidden');
    document.getElementById('nextPage').classList.add('hidden');
  }

  // Add event listener to the edit button to show id="editGroup" and hide id="nextPage"
  document.getElementById('edit').addEventListener('click', showEditGroup);