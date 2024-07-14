// Get the button elements
const countButton = document.getElementById('btn');
const clearButton = document.getElementById('clear');

// Get the counter elements
const wordCountElement = document.getElementById('word-count');
const charCountElement = document.getElementById('char-count');
const paraCountElement = document.getElementById('para-count');
const numberCountElement = document.getElementById('number-count');
const specialCountElement = document.getElementById('special-count');

// Initialize counter values
let wordCount = 0;
let charCount = 0;
let paraCount = 0;
let numberCount = 0;
let specialCount = 0;

// Function to count words, characters, paragraphs, numbers, and special characters
function countText() {
  const text = document.getElementById('text-area').value;

  // Count words
  wordCount = text.trim().split(/\s+/).length;

  // Count characters
  charCount = text.length;

  // Count paragraphs
  paraCount = text.trim().split(/\n+/).length;

  // Count numbers
  numberCount = text.match(/\d+/g)?.length || 0;

  // Count special characters
  specialCount = text.replace(/[a-zA-Z0-9\s]/g, '').length;

  // Update the counter elements
  wordCountElement.textContent = wordCount;
  charCountElement.textContent = charCount;
  paraCountElement.textContent = paraCount;
  numberCountElement.textContent = numberCount;
  specialCountElement.textContent = specialCount;
}

// Add event listeners to the buttons
countButton.addEventListener('click', countText);
clearButton.addEventListener('click', () => {
  document.getElementById('text-area').value = '';
  countText();
});

// Initial count on page load
countText();