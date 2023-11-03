function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
}
// slick_slider

$('.slick-slids').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplayspeed: 2000,
    arrow: true,
    prevArrow: ".slick_circle_back",
    nextArrow: ".slick_circle_next",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            }
        }


    ]
});
// footer_button
let mybutton = document.getElementById("footer_btn")

window.onscroll = function () { scrollfunction() };

function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none"
    }
}
function topfunction() {
    document.documentElement.scrollTop = 0;
}
