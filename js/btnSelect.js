document.addEventListener('DOMContentLoaded', () => {
    const buttonGroups = document.querySelectorAll('.flex.items-center.gap-12');

    buttonGroups.forEach(group => {
        const buttons = group.querySelectorAll('button');

        buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove btn-selected class from all buttons in the group
            buttons.forEach(btn => btn.classList.remove('btn-selected'));

            // Add btn-selected class to the clicked button
            button.classList.add('btn-selected');
        });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
// Function to add click event listeners to button groups
function addButtonGroupClickListener(groupClass, buttonClass) {
    const buttonGroups = document.querySelectorAll(groupClass);

    buttonGroups.forEach(group => {
    const buttons = group.querySelectorAll(buttonClass);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
        // Remove btn-selected class from all buttons in the group
        buttons.forEach(btn => btn.classList.remove('btn-selected'));

        // Add btn-selected class to the clicked button
        button.classList.add('btn-selected');
        });
    });
    });
}

// Add event listeners to different button groups
addButtonGroupClickListener('.gender-group', '.gender-btn');
addButtonGroupClickListener('.education-group', '.education-btn');
});


  