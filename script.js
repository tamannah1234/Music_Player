const audio = document.getElementById('audio-player');
        const fileInput = document.getElementById('audio-file');
        const playButton = document.getElementById('play-btn');
        const pauseButton = document.getElementById('pause-btn');
        const replayButton = document.getElementById('replay-btn');
        const statusDisplay = document.getElementById('status');

        // Utility function to update the status
        const updateStatus = (message) => {
            if (statusDisplay) {
                statusDisplay.textContent = message;
            }
        };

        // Handle file selection and load it into the audio player
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const fileURL = URL.createObjectURL(file);
                audio.src = fileURL;
                updateStatus(`Loaded: ${file.name}`);
                audio.load(); // Reload the audio element with the new source
            }
        });

        // Play Audio
        playButton.addEventListener('click', () => {
            if (audio && audio.src) {
                audio.play();
                updateStatus('Playing...');
            } else {
                updateStatus('Please load an audio file first.');
            }
        });

        // Pause Audio
        pauseButton.addEventListener('click', () => {
            if (audio && audio.src) {
                audio.pause();
                updateStatus('Paused');
            }
        });

        // Replay Audio
        replayButton.addEventListener('click', () => {
            if (audio && audio.src) {
                audio.currentTime = 0;
                audio.play();
                updateStatus('Replaying...');
            }
        });

        // Update status when audio ends
        audio.addEventListener('ended', () => {
            updateStatus('Audio ended.');
        });