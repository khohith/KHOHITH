function updateCountdown() {
    const now = new Date().getTime();
    const eventDate = now + (30 * 24 * 60 * 60 * 1000); // 30 days from now
    
    setInterval(() => {
        const currentTime = new Date().getTime();
        const timeLeft = eventDate - currentTime;
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById("countdown").innerHTML = "Event Started!";
        }
    }, 1000);
}
updateCountdown();
