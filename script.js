// Countdown logic
function updateCountdown() {
    const targetDate = new Date("2025-03-24T00:00:00"); // Target date and time
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference < 0) {
        document.getElementById("countdown").innerText = "¡El momento ha llegado!";
        return;
    }

    // Convert difference to days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();
