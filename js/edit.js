document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('edit').addEventListener('click', edit);
  document.getElementById('cancel').addEventListener('click', cancelEdit);
});

function edit() {
  // Change tab-content2 to tab-content1
  document.getElementById('basic-tabs-2').classList.add('hidden');
  document.getElementById('basic-tabs-1').classList.remove('hidden');

  // Show editGroup and hide nextPage
  document.getElementById('editGroup').classList.remove('hidden');
  document.getElementById('nextPage').classList.add('hidden');

  // Activate basic-tabs-item-1
  document.getElementById('basic-tabs-item-1').classList.add('active', 'font-semibold', 'border-amber-300', 'text-gray-900');
  document.getElementById('basic-tabs-item-1').classList.remove('text-gray-500', 'border-transparent', 'hover:text-amber-300', 'disabled:opacity-50', 'disabled:pointer-events-none');

  // Deactivate basic-tabs-item-2
  document.getElementById('basic-tabs-item-2').classList.remove('active', 'font-semibold', 'border-amber-300', 'text-gray-900');
  document.getElementById('basic-tabs-item-2').classList.add('text-gray-500', 'border-transparent', 'hover:text-amber-300', 'disabled:opacity-50', 'disabled:pointer-events-none');

  // Change title
  document.getElementById('title').textContent = '舊個案複檢';
}

function cancelEdit() {
  // Change tab-content1 to tab-content2
  document.getElementById('basic-tabs-1').classList.add('hidden');
  document.getElementById('basic-tabs-2').classList.remove('hidden');

  // Hide editGroup and show nextPage
  document.getElementById('editGroup').classList.add('hidden');
  document.getElementById('nextPage').classList.remove('hidden');

  // Activate basic-tabs-item-2
  document.getElementById('basic-tabs-item-2').classList.add('active', 'font-semibold', 'border-amber-300', 'text-gray-900');
  document.getElementById('basic-tabs-item-2').classList.remove('text-gray-500', 'border-transparent', 'hover:text-amber-300', 'disabled:opacity-50', 'disabled:pointer-events-none');

  // Deactivate basic-tabs-item-1
  document.getElementById('basic-tabs-item-1').classList.remove('active', 'font-semibold', 'border-amber-300', 'text-gray-900');
  document.getElementById('basic-tabs-item-1').classList.add('text-gray-500', 'border-transparent', 'hover:text-amber-300', 'disabled:opacity-50', 'disabled:pointer-events-none');

  // Change title
  document.getElementById('title').textContent = '歷史個案複檢';
}