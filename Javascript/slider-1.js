document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    let autoScrollInterval;
    const intervalTime = 5000; // 5 seconds
    
    
    // Initialize the slider
    function initSlider() {
        updateSlider();
        startAutoScroll();
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoScroll();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoScroll();
            }
        });
        
        // Dot navigation
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                currentIndex = parseInt(this.getAttribute('data-index'));
                updateSlider();
                resetAutoScroll();
            });
        });
    }
    
    // Update slider position and active dot
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }
    
    // Go to previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    // Start auto-scrolling
    function startAutoScroll() {
        autoScrollInterval = setInterval(nextSlide, intervalTime);
    }
    
    // Reset auto-scroll timer
    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        startAutoScroll();
    }
    
    
    // Initialize the slider
    initSlider();
});