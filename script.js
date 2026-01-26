const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const container = document.querySelector('.container');

const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success.", author: "Unknown" },
    { text: "If you are working on something exciting that you really care about, you don't have to be pushed.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" }
];

let currentQuoteIndex = -1;

function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = newIndex;
    return quotes[currentQuoteIndex];
}

function animateQuoteChange() {
    // Add shake effect to container
    container.style.animation = 'shake 0.5s ease-in-out';
    
    // Fade out current quote
    quoteElement.style.opacity = '0';
    authorElement.style.opacity = '0';
    
    setTimeout(() => {
        const newQuote = getRandomQuote();
        quoteElement.textContent = `"${newQuote.text}"`;
        authorElement.textContent = `— ${newQuote.author}`;
        
        // Fade in new quote
        quoteElement.style.opacity = '1';
        authorElement.style.opacity = '1';
        
        // Remove shake animation
        container.style.animation = '';
    }, 250);
}

newQuoteButton.addEventListener('click', () => {
    // Button pulse effect
    newQuoteButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        newQuoteButton.style.transform = 'scale(1)';
    }, 100);
    
    animateQuoteChange();
});

// Load initial quote
window.addEventListener('load', () => {
    const initialQuote = getRandomQuote();
    quoteElement.textContent = `"${initialQuote.text}"`;
    authorElement.textContent = `— ${initialQuote.author}`;
});

// Add click effect to container
container.addEventListener('click', (e) => {
    if (e.target !== newQuoteButton) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        container.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});