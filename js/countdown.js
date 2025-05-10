document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to (example: June 1, 2024)
    const countDownDate = new Date("Jun 1, 2024 00:00:00").getTime();
    
    // Update the countdown every 1 second
    const countdownFunction = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
        
        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "NOVA X IS HERE!";
        }
    }, 1000);
    
    // Animate countdown numbers
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    
    function animateNumbers() {
        countdownNumbers.forEach(num => {
            num.style.transform = 'scale(1.1)';
            setTimeout(() => {
                num.style.transform = 'scale(1)';
            }, 300);
        });
    }
    
    setInterval(animateNumbers, 1000);
});