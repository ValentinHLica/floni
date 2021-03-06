// Header Drawer
const drawerButtonOpen = document.querySelector(".header__dropdown__button");
const drawerButtonClose = document.querySelector(".drawer__close_button");
const drawerBackgound = document.querySelector(".drawer__backgound");
const drawer = document.querySelector(".drawer");

let drawerState = false;

const drawerHandler = () => {
    drawer.className = `drawer drawer--${!drawerState ? "open" : "close"}`;
    drawerBackgound.className = `drawer__backgound drawer__backgound--${
        !drawerState ? "open" : "close"
    }`;
    drawerState = !drawerState;
};

drawerButtonOpen.addEventListener("click", drawerHandler);
drawerButtonClose.addEventListener("click", drawerHandler);
drawerBackgound.addEventListener("click", drawerHandler);

// Header Component
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const y = window.scrollY;

    if (y > 1) {
        header.classList.add("header--scroll");
    } else {
        header.classList.remove("header--scroll");
    }
});

// Slick Slider
// Services
$(document).ready(function () {
    $(".homepage__services .services__slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

// Products
$(document).ready(function () {
    $(".homepage__products .products__slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

// Leaflet
var mymap = L.map("location__map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
