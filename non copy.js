document.addEventListener('DOMContentLoaded', function() {
    // ... (Your existing audio player and feedback form logic) ...

    const noCopyElements = document.querySelectorAll('.no-copy-js');

    noCopyElements.forEach(element => {
        // Disable text selection (redundant if using CSS, but good for completeness)
        element.style.webkitUserSelect = 'none';
        element.style.mozUserSelect = 'none';
        element.style.msUserSelect = 'none';
        element.style.userSelect = 'none';

        // Prevent copying using Ctrl+C/Cmd+C and right-click copy
        element.addEventListener('copy', function(e) {
            e.preventDefault(); // Stop the default copy action
            console.log("Copying is disabled for this element.");
            // Optionally, you could show a message to the user
            // alert("Copying is not allowed for this content.");
        });

        // Optional: Prevent right-click context menu (which often has a "Copy" option)
        element.addEventListener('contextmenu', function(e) {
            e.preventDefault(); // Stop the default right-click menu
            console.log("Right-click is disabled for this element.");
        });
    });
});