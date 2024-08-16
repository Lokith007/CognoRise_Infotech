// Set your target date and time here (format: YYYY-MM-DDTHH:MM)
let targetDate = new Date("2025-01-25T23:59:59");

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference < 0) {
        document.getElementById("timer").innerHTML = "EXPIRED";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

function setTargetDate() {
    const dateInput = document.getElementById("target-date").value;
    if (dateInput) {
        targetDate = new Date(dateInput);
        document.getElementById("target-date").style.display = "none";
        updateCountdown();
    }
}

document.getElementById("set-target-btn").addEventListener("click", () => {
    document.getElementById("target-date").style.display = "inline";
    document.getElementById("target-date").focus();
});

setInterval(updateCountdown, 1000);
