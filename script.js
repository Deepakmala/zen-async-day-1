// script.js

// Function to display countdown and message
const displayCountdown = () => {
  let count = 10;

  // Countdown function
  const countdown = (callback) => {
    setTimeout(() => {
      if (count >= 1) {
        document.body.innerHTML = `<p>${count}</p>`;
        count--;
        countdown(callback);
      } else {
        document.body.innerHTML = ""; // Clear the display
        setTimeout(callback, 1000);
      }
    }, 1000);
  };

  // Final message function
  const displayMessage = () => {
    document.body.innerHTML = "<p>Happy Independence Day</p>";
  };

  // Start the countdown
  countdown(displayMessage);
};

// Call the main function
displayCountdown();
