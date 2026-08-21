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
