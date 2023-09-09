document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function updateDateTime() {
        const currentDate = new Date();
        const currentDay = daysOfWeek[currentDate.getDay()];

        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = Date.now();
    }

    // Initial call to update the date and time
    updateDateTime();

    // Set interval updates the time every second (1000 milliseconds thats every 1seconds)
    setInterval(updateDateTime, 1000);
});
