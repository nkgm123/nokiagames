document.addEventListener('keydown', function(event) {
            // Check if the pressed key is 'k' (case-insensitive)
            if (event.key === 'k' || event.key === 'K') {
                // Open the new URL in a new tab
                window.open('https://drive.google.com/', '_blank');
            }
        });