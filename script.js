document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getDay()];

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = Date.now();
});
