const openBtn=document.querySelector(".open-btn"),nav_list=document.querySelector(".navigation__list"),overlay=document.querySelector(".overlay"),navContact=document.querySelector(".nav-contact");function mobileMenu(){openBtn.classList.toggle("active"),nav_list.classList.toggle("active"),overlay.classList.toggle("hidden"),navContact.classList.toggle("hidden")}openBtn.addEventListener("click",mobileMenu),overlay.addEventListener("click",mobileMenu);const logo=document.querySelector(".navigation__logo img");$(window).on("scroll",(function(){$(window).scrollTop()>400?$("#navbar").addClass("sticky"):$("#navbar").removeClass("sticky")})),$(window).on("scroll",(function(){$(window).scrollTop()>400&&logo.closest(".navigation").classList.contains("sticky")?logo.src="assets/img/logo-2.svg":logo.src="assets/img/logo.svg"}));const menuButtons=document.querySelector(".menu__buttons"),menuBtn=document.querySelectorAll(".menu__buttons-item");menuButtons&&menuButtons.addEventListener("click",(e=>{if(!e.target.classList.contains("menu__buttons-item"))return;menuBtn&&menuBtn.forEach((e=>e.classList.remove("active"))),e.target.classList.add("active");let t=e.target.dataset.filter;$(".menu__items .row").isotope({filter:""+("all"==t?"*":`.${t}`)})}));const insta_swiper=document.querySelector(".instagram__swiper"),testimonial_swiper=document.querySelector(".testimonial__swiper");if(insta_swiper)var swiper=new Swiper(".instagram__swiper",{slidesPerView:2,spaceBetween:10,breakpoints:{640:{slidesPerView:2},768:{slidesPerView:3},990:{slidesPerView:4},1400:{slidesPerView:5}},autoplay:{delay:2500,disableOnInteraction:!1},loop:!0});if(testimonial_swiper)var swiper1=new Swiper(".testimonial__swiper",{slidesPerView:1,spaceBetween:50,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3500,disableOnInteraction:!1},loop:!0,grabCursor:!0});const reserveDate=document.getElementById("datepicker");var date=new Date;date.setDate(date.getDate()),reserveDate&&$("#datepicker").datepicker({startDate:date}),reserveDate&&(reserveDate.addEventListener("keypress",(e=>{e.preventDefault()})),reserveDate.attributes.placeholder.value=`${date.getDate()}/ ${date.getMonth()+1} / ${date.getFullYear()}`);const reserveTime=document.getElementById("reserve-time");reserveTime&&$("#reserve-time").timepicker({interval:60,minTime:"8:30am",maxTime:"10:00pm",defaultTime:"9pm",startTime:"8:30am",dynamic:!1,dropdown:!0,scrollbar:!0});const menu_first=document.querySelector(".menu__single-item--first img"),menu_items=document.querySelectorAll(".menu__item img"),blog_first=document.querySelector(".blog__single-item--first img"),blog_items=document.querySelectorAll(".blog__img");$(document).ready((function(){menu_first&&menu_items&&menu_items.forEach((e=>{e.style.height=`${menu_first.getBoundingClientRect().height}px`})),blog_first&&blog_items&&blog_items.forEach((e=>{e.style.height=`${blog_first.getBoundingClientRect().height}px`}))})),$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>100?$("#scroll").fadeIn():$("#scroll").fadeOut()})),$("#scroll").click((function(){return $("html, body").animate({scrollTop:0},600),!1}))}));const aos_fade_up=document.querySelector('[data-aos="fade-up"]');aos_fade_up&&AOS.init({once:!0});const instagram__magnific=document.querySelector(".instagram__magnific");instagram__magnific&&$(document).ready((function(){$(".instagram__magnific").magnificPopup({type:"image",gallery:{enabled:!1}})}));