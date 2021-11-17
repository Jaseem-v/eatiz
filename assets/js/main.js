/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector(".open-btn")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")

function mobileMenu() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
    overlay.classList.toggle("hidden")
    navContact.classList.toggle("hidden")
}

openBtn.addEventListener("click", mobileMenu)
overlay.addEventListener("click", mobileMenu)

///////////////////////////////////////
// Navbar scroll
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 400) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }
});


////////////////////////////////////////////////////
// portofolio-filter

const menuButtons = document.querySelector(".menu__buttons");
const menuBtn = document.querySelectorAll(".menu__buttons-item")
if (menuButtons) {
    menuButtons.addEventListener("click", (e) => {
        if (!e.target.classList.contains("menu__buttons-item")) return;

        if (menuBtn)
            menuBtn.forEach(el => el.classList.remove("active"))
        e.target.classList.add("active")

        let selector = e.target.dataset.filter

        $(".menu__items .row").isotope({
            filter: `${selector == "all" ? "*" : `.${selector}`}`
        });

    })
}


//////////////////////////////////////////////////////
// swiper


var swiper = new Swiper(".instagram__swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        990: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        }
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});



var swiper1 = new Swiper(".testimonial__swiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor: true,
});

///////////////////////////////////
// Date Picker

const reserveDate = document.getElementById("datepicker")
var date = new Date();
date.setDate(date.getDate());

$('#datepicker').datepicker({
    startDate: date
});

if (reserveDate) {
    reserveDate.addEventListener("keypress", (e) => {
        e.preventDefault();
    })

    reserveDate.attributes.placeholder.value = `${date.getDate()}/ ${date.getMonth() + 1} / ${date.getFullYear()}`
}

///////////////////////////////////////
//  Time Picker

$('#reserve-time').timepicker({
    interval: 60,
    minTime: '8:30am',
    maxTime: '10:00pm',
    defaultTime: '9pm',
    startTime: '8:30am',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});

//////////////////////////////////////////
// meanu item equal height

const menu_first = document.querySelector(".menu__single-item--first img")
const menu_items = document.querySelectorAll(".menu__item img");

if (menu_first && menu_items) {

    menu_items.forEach(el => {
        el.style.height = `${menu_first.getBoundingClientRect().height}px`
    })
}


//////////////////////////////////////////
// Blog item equal height

const blog_first = document.querySelector(".blog__single-item--first img")
const blog_items = document.querySelectorAll(".blog__img");

if (blog_first && blog_items) {

    blog_items.forEach(el => {
        el.style.height = `${blog_first.getBoundingClientRect().height}px`
    })
}


/////////////////////////////////////////////////////
// scroll

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});


////////////////////////////////////////////
// Aos

AOS.init({
    once: true,
    //  delay: 150
});

////////////////////////////////////////////
// Magnific popup

$(document).ready(function () {
    $('.instagram__magnific').magnificPopup({
        type: 'image',
        gallery: {
            enabled: false
        }
    });

});