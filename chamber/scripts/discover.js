const msPerDay = 86400000;
const dayToday = new Date();
const lastVisit = localStorage.getItem('visitTracker');
const message =  document.getElementById('message');

if (!lastVisit) {
    message.textContent =
        'Welcome! Let us know if you have any questions.';
} else {
    const daysBetween = ( parseInt(lastVisit) - (dayToday)) / msPerDay;
    if (daysBetween < 1) {
        message.textContent =
            'Back so soon! Awesome!';
    } else {
        message.textContent = `You last visited ${Math.round(daysBetween) } day${
            daysBetween > 1 ? 's' : ''
        } ago.`;
    }
}
localStorage.setItem('visitTracker', Date.now());
