const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success doesn’t come overnight. Keep going."
];

document.getElementById("quoteBtn").addEventListener("click", newQuote);

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
