document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
document.addEventListener('DOMContentLoaded', function() {
    // Get all links
    const links = document.querySelectorAll('a[href]');
    const loadingSpinner = document.getElementById('loadingSpinner');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Show loading spinner
            loadingSpinner.classList.add('show');
        });
    });

    // Hide the loading spinner after the page loads
    window.addEventListener('load', function() {
        loadingSpinner.classList.remove('show');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Quotes array
    const quotes = [
        "“Education is the most powerful weapon you can use to change the world.” – Nelson Mandela",
        "“Self-belief and hard work will always earn you success.” – Virat Kohli",
        "“Failure will never overtake me if my determination to succeed is strong enough.” – Og Mandino"

    
    
    
    ];

    let currentQuoteIndex = 0;
    const quoteText = document.getElementById('quoteText');

    // Function to change the quote with a fade effect
    function changeQuote() {
        // Fade out the current quote
        quoteText.classList.add('quote-fade-out');

        // Wait for the fade-out effect to complete
        setTimeout(() => {
            // Change the text
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            quoteText.textContent = quotes[currentQuoteIndex];

            // Fade in the new quote
            quoteText.classList.remove('quote-fade-out');
            quoteText.classList.add('quote-fade-in');
        }, 5000); // 1 second matches the CSS transition duration
    }

    // Change quote every 3 seconds
    setInterval(changeQuote, 5000);
});