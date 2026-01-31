document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const echoButton = document.getElementById('echoButton');
    const outputSection = document.getElementById('outputSection');
    const responseBox = document.getElementById('responseBox');
    const timestamp = document.getElementById('timestamp');

    echoButton.addEventListener('click', async () => {
        const message = messageInput.value.trim();
        
        if (!message) {
            alert('Please enter a message to echo!');
            return;
        }

        try {
            const response = await fetch('/api/echo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();
            
            // Show the output section
            outputSection.classList.add('visible');
            
            // Display the echoed message
            responseBox.innerHTML = `<p>${escapeHtml(data.echo)}</p>`;
            
            // Display the timestamp
            const date = new Date(data.timestamp);
            timestamp.textContent = `Echoed at: ${date.toLocaleString()}`;
            
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to echo message. Please try again.');
        }
    });

    // Allow Enter key to submit (with Shift+Enter for new line)
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            echoButton.click();
        }
    });

    // Helper function to escape HTML and prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
