$(document).ready(function () {
    $('#header .main-nav .click-menu').click(function () {
        $(this).addClass ('show');
        $('#header .main-nav nav').addClass('show')
        $('#header .main-nav .cancel-menu').addClass('show')
        $('body').addClass('show');
    });
    $('#header .main-nav .cancel-menu').click(function () {
        $(this).removeClass ('show');
        $('#header .main-nav nav').removeClass('show')
        $('#header .main-nav .cancel-menu').removeClass('show')
        $('body').removeClass('show');
    });

    // sticky header
    if($(window).width () >= 991) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $('#header').addClass('show');
            }
            else {
                $('#header').removeClass('show');
            }
        });
    }

    // aos
    AOS.init({
        duration: 1000,
    })

});

// accordion
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        const content = item.querySelector(".accordion-content");

        // Close others
        document.querySelectorAll(".accordion-item").forEach(i => {
        if (i !== item) {
        i.classList.remove("open");
        i.querySelector(".accordion-content").style.maxHeight = null;
        i.querySelector(".accordion-header").classList.remove("active");
        }
        });

        // Toggle clicked one
    if (item.classList.contains("open")) {
        item.classList.remove("open");
        content.style.maxHeight = null;
        header.classList.remove("active");
        } else {
        item.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px"; // auto-adjust
        header.classList.add("active");
        }
    });
});

// experts-wrapper
const slider = document.querySelector('.experts-wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
});
