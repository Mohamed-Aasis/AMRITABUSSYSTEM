// script.js

function updateDateTime() {
    const dateTimeElement = document.querySelector('.nav-date-time');

    if (dateTimeElement) {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };

        const dateTimeString = now.toLocaleDateString(undefined, options);
        dateTimeElement.textContent = dateTimeString;
    }
}

// Update date, time, and day every second
setInterval(updateDateTime, 1000);

// Initial call to set the date, time, and day when the page loads
updateDateTime();
document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');

    changeColorBtn.addEventListener('click', function() {
        const colors = ['#ff6347', '#ffa500', '#4caf50', '#3498db', '#9b59b6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = `linear-gradient(45deg, ${randomColor}, #ffa500)`;
    });
});
