// Canvas settings
const canvas = document.getElementById("clockCanvas");
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;

let hourAngle = 0; // Initial angles for hands
let minuteAngle = 0;

// Draw the clock face and hands
function drawClock() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw clock face
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw numbers
    for (let i = 1; i <= 12; i++) {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = centerX + (radius - 20) * Math.cos(angle);
        const y = centerY + (radius - 20) * Math.sin(angle);
        ctx.font = "14px Arial";
        ctx.fillText(i, x - 5, y + 5);
    }

    // Draw hour hand
    drawHand(hourAngle, 60, "blue", 6);

    // Draw minute hand
    drawHand(minuteAngle, 90, "red", 4);
}

// Draw a clock hand
function drawHand(angle, length, color, width) {
    const radian = (angle - 90) * (Math.PI / 180);
    const x = centerX + length * Math.cos(radian);
    const y = centerY + length * Math.sin(radian);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
}

// Move hour hand clockwise
function moveHour() {
    hourAngle = (hourAngle + 30) % 360;
    drawClock();
}

// Move minute hand clockwise
function moveMinute() {
    minuteAngle = (minuteAngle + 6) % 360;
    drawClock();
}

// Submit the current hand angles
function submitTime() {
    const userHour = Math.floor((hourAngle % 360) / 30) || 12;
    const userMinute = Math.floor((minuteAngle % 360) / 6);

    document.getElementById("user_hour").value = userHour;
    document.getElementById("user_minute").value = userMinute;

    document.getElementById("time-form").submit();
}

// Initial draw
drawClock();
