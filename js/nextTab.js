function switchTab(nextTab) {
    // Hide all tab content
    document.querySelectorAll('[role="tabpanel"]').forEach((tabContent) => {
        tabContent.classList.add('hidden');
    });

    // Remove active state from all tabs
    document.querySelectorAll('[role="tab"]').forEach((tab) => {
        tab.classList.remove('active');
    });

    // Show the next tab content
    const nextTabContent = document.querySelector(`#segment-${nextTab}`);
    if (nextTabContent) {
        nextTabContent.classList.remove('hidden');
    }

    // Activate the next tab
    const nextTabButton = document.querySelector(`#segment-item-${nextTab}`);
    if (nextTabButton) {
        nextTabButton.classList.add('active');
        nextTabButton.classList.add('hs-tab-active:bg-amber-300', 'hs-tab-active:text-gray-900');
    }
}

// Add click event listeners to each tab button
document.querySelectorAll('[role="tab"]').forEach((tab) => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('aria-controls').replace('#segment-', '');
        switchTab(targetTab);
    });
});