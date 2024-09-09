const quotes = [
 "The only way to do great work is to love what you do. – Steve Jobs",
  
"The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",

"In the middle of every difficulty lies opportunity. – Albert Einstein",

"Believe you can and you're halfway there. – Theodore Roosevelt"
,
"The best way to predict the future is to invent it. – Alan Kay",
  
"You don't have to be great to start, but you have to start to be great. – Zig Ziglar"
,
"The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",

"Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",

"Opportunities don't happen. You create them. – Chris Grosser"
];

const quoteText = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote');

// Function to display a random quote
function displayQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}

// Add click event listener to button
newQuoteBtn.addEventListener('click', displayQuote);
