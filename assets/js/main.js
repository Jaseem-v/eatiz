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
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }
});


// portofolio-filter

// $(document).ready(function () {


// 	let $btns = $('.portfolio .button-group button');


// 	$btns.click(function (e) {

// 		$('.portfolio .button-group button').removeClass('active');
// 		e.target.classList.add('active');

// 		let selector = $(e.target).attr('data-filter');
// 		$('.portfolio .row').isotope({
// 			filter: selector
// 		});

// 		return false;
// 	})
// });
