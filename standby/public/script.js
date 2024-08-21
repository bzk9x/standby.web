function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    const hourDigit1 = Math.floor(hours / 10);
    const hourDigit2 = hours % 10;
    const minuteDigit1 = Math.floor(minutes / 10);
    const minuteDigit2 = minutes % 10;

    document.getElementById('hour-digit-1').textContent = hourDigit1;
    document.getElementById('hour-digit-2').textContent = hourDigit2;
    document.getElementById('minute-digit-1').textContent = minuteDigit1;
    document.getElementById('minute-digit-2').textContent = minuteDigit2;
}

setInterval(updateClock, 1000);

updateClock()