// Set the target date and time for the countdown
const targetDate = new Date('Aug 23, 2024 16:48:59'); 

// Function to update the countdown timer
function updateCountdown() {
  // Get the current date and time
  const currentTime = new Date();
  console.log(currentTime); // Log the current time for debugging purposes

  // Calculate the difference between the target date and the current date
  const difference = targetDate - currentTime;

  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Check if the countdown has finished
  if (difference < 0) {
    clearInterval(interval); // Stop the countdown from updating
    document.getElementById("timer").innerText = "The event has started!"; // Update the message
  }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
