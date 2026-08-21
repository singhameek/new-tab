function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`

}

updateClock();
setInterval(updateClock, 1000);

const searchInput = document.getElementById('input');

searchInput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query != ''){
            window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
});

function updateGreeting() {
    const hours = new Date().getHours();
    let greeting = "";
    if (hours < 12) greeting = "Good morning"
    else if (hours < 18) greeting = "Good afternoon"
    else greeting = "Good evening";

    document.getElementById(`greeting`).innerText = greeting;
}

updateGreeting()

function generateCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" 
    ]

    document.getElementById('month_year').innerText = `${monthNames[month]} ${year}`;
    const daysContainer = document.getElementById('calendar_days');
    daysContainer.innerHTML = "";

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const today = now.getDate();

    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDiv = document.createElement('div');
        daysContainer.appendChild(emptyDiv);
    }

    for (let day = 1; day <= totalDays; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerText = day;
        dayDiv.classList.add('calendar_day');

        if(day === today) {
            dayDiv.classList.add('current_day');
        }

        daysContainer.appendChild(dayDiv);
    }
}

generateCalendar()