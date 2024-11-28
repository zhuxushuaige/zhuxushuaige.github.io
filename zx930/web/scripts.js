$(document).ready(function() {
    function initCarousel(festival) {
        let currentIndex = 0;
        const slides = festival.find('.carousel-slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.removeClass('active');
            if (index >= 0 && index < totalSlides) { 
                slides.eq(index).addClass('active');
            }
        }

        showSlide(currentIndex);

        setInterval(function() {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            showSlide(currentIndex);
        }, 3000); 
    }

   
    $('.festival').each(function() {
        initCarousel($(this));
    });
});