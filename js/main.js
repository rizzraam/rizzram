document.addEventListener('DOMContentLoaded', function() {
    // Set animation delays for buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach((button, index) => {
        button.style.setProperty('--i', index);
    });
    
    // Set animation delays for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index);
    });
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const header = document.querySelector('.header');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            header.classList.toggle('menu-open');
            
            // Animate the hamburger icon
            const bars = this.querySelectorAll('.bar');
            if (this.classList.contains('active')) {
                bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                bars[0].style.transform = '';
                bars[1].style.opacity = '';
                bars[2].style.transform = '';
            }
        });
    }
    
    // Parallax effect for background
    window.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        const bg = document.querySelector('.background-image');
        
        if (bg) {
            bg.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
        }
    });
    
    // Add ripple effect to buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
    
    // Dynamic background for subpages
    if (document.body.classList.contains('subpage')) {
        const backgrounds = {
            'makeamovie': 'url("../atcl/bg1.jpg")',
            'software': 'url("https://source.unsplash.com/random/1920x1080/?code")',
            'tools': 'url("https://source.unsplash.com/random/1920x1080/?tools")',
            'mods': 'url("https://source.unsplash.com/random/1920x1080/?modification")',
            'products': 'url("https://source.unsplash.com/random/1920x1080/?gadgets")',
            'countdown': 'url("https://source.unsplash.com/random/1920x1080/?future")',
            'socials': 'url("https://source.unsplash.com/random/1920x1080/?social")'
        };
        
        const path = window.location.pathname.split('/').pop().split('.')[0];
        if (backgrounds[path]) {
            document.querySelector('.background-image').style.backgroundImage = backgrounds[path];
        }
    }
});