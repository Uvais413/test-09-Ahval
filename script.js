document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const voiceId = this.dataset.voice;
            const paragraphText = this.previousElementSibling.textContent;

            // Implement your voice playback logic here
            // You can use the Web Speech API or handle pre-recorded audio

            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(paragraphText);
                // You can set the language of the utterance here if needed
                // utterance.lang = 'en-US'; // Example for English
                speechSynthesis.speak(utterance);
            } else {
                alert('Text-to-speech not supported in this browser.');
            }

            console.log('Playing voice for:', voiceId, 'Text:', paragraphText); // For debugging
        });
    });
});