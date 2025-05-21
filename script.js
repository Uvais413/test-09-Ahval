document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const googleSheetURL = 'https://script.google.com/macros/s/AKfycbwG8CUp69cILyaj_wuSbME8uQKss6oW9dXOL_4lOGSWxUHNFP899qyKtTOI1U3CE5a3/exec'; // Replace with your actual URL

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(feedbackForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch(googleSheetURL, {
                method: 'POST',
                mode: 'no-cors', // May be needed depending on your setup
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                console.log('Feedback submitted successfully!', response);
                feedbackMessage.textContent = 'Feedback submitted successfully!';
                feedbackForm.reset(); // Clear the form
            })
            .catch(error => {
                console.error('Error submitting feedback:', error);
                feedbackMessage.textContent = 'Error submitting feedback. Please try again later.';
                feedbackMessage.style.color = 'red';
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayers = document.querySelectorAll('.audio-player');

    audioPlayers.forEach(currentPlayer => {
        currentPlayer.addEventListener('play', function() {
            // Pause all other audio players
            audioPlayers.forEach(otherPlayer => {
                if (otherPlayer !== currentPlayer && !otherPlayer.paused) {
                    otherPlayer.pause();
                }
            });
        });
    });

    // --- (Rest of your existing script.js for feedback submission, if any) ---
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const googleSheetURL = 'YOUR_GOOGLE_SHEET_WEB_APP_URL_HERE'; // Replace with your actual URL

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(feedbackForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch(googleSheetURL, {
                method: 'POST',
                mode: 'no-cors', // May be needed depending on your setup
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                console.log('Feedback submitted successfully!', response);
                feedbackMessage.textContent = 'Feedback submitted successfully!';
                feedbackForm.reset(); // Clear the form
            })
            .catch(error => {
                console.error('Error submitting feedback:', error);
                feedbackMessage.textContent = 'Error submitting feedback. Please try again later.';
                feedbackMessage.style.color = 'red';
            });
        });
    }
});
    