function activateTab1() {
    // Show tab-content1 and hide tab-content2
    document.getElementById('basic-tabs-1').classList.remove('hidden');
    document.getElementById('basic-tabs-2').classList.add('hidden');
  
    // Activate basic-tabs-item-1
    document.getElementById('basic-tabs-item-1').classList.add('hs-tab-active', 'font-semibold', 'border-amber-300', 'text-gray-900');
    document.getElementById('basic-tabs-item-1').classList.remove('text-gray-500', 'border-transparent', 'hover:text-amber-300', 'disabled:opacity-50', 'disabled:pointer-events-none');
  
    // Deactivate basic-tabs-item-2
    document.getElementById('basic-tabs-item-2').classList.remove('hs-tab-active', 'font-semibold', 'border-amber-300', 'text-gray-900');
    document.getElementById('basic-tabs-item-2').classList.add('text-gray-500', 'border-transparent', 'hover:text-amber-300', 'disabled:opacity-50', 'disabled:pointer-events-none');
  }
  
  function activateTab2() {
    // Show tab-content2 and hide tab-content1
    document.getElementById('basic-tabs-1').classList.add('hidden');
    document.getElementById('basic-tabs-2').classList.remove('hidden');
  
    // Activate basic-tabs-item-2
    document.getElementById('basic-tabs-item-2').classList.add('hs-tab-active', 'font-semibold', 'border-amber-300', 'text-gray-900');
    document.getElementById('basic-tabs-item-2').classList.remove('text-gray-500', 'border-transparent', 'hover:text-amber-300', 'disabled:opacity-50', 'disabled:pointer-events-none');
  
    // Deactivate basic-tabs-item-1
    document.getElementById('basic-tabs-item-1').classList.remove('hs-tab-active', 'font-semibold', 'border-amber-300', 'text-gray-900');
    document.getElementById('basic-tabs-item-1').classList.add('text-gray-500', 'border-transparent', 'hover:text-amber-300', 'disabled:opacity-50', 'disabled:pointer-events-none');
  }
