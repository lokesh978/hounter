var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

// window.addEventListener("scroll", function () {
//   var nav = document.querySelector(".navbar");
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   nav.classList.toggle("scrolled", scrollTop > nav.clientHeight);
// });

$(".demoCarousel").owlCarousel({
  loop: true,
  nav: false,
  margin: 40,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1.5,
      margin: 16,
    },
    400: {
      items: 1.5,
    },
    576: {
      items: 1.8,
      margin: 24,
    },
    768: {
      items: 2.5,

      margin: 24,
    },
    1000: {
      items: 3.5,
    },
    1200: {
      items: 4,
    },
  },
});
$(".demoCarousel2").owlCarousel({
  loop: true,
  center: true,
  nav: false,
  margin: 40,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      margin: 16,
    },
    576: {
      items: 1.8,
      margin: 24,
    },
    768: {
      items: 2,
      margin: 24,
    },
    991: {
      items: 2,
    },
    1106: {
      items: 2,
      margin: 56,
    },
    1200: {
      items: 2,
      margin: 56,
    },
  },
});
$(".demoCarousel3").owlCarousel({
  loop: true,
  nav: false,
  margin: 40,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsiveClass: true,
  items: 1.5,
  margin: 16,
});

var owl = $(".demoCarousel");
owl.owlCarousel();
$(".right-arrow").click(function () {
  owl.trigger("next.owl.carousel", [300]);
});
$(".left-arrow").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector(".navbar");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  nav.classList.toggle("scrolled", scrollTop > nav.clientHeight);
});

function checkMediaQuery() {
  var nav = document.querySelector(".navbar");

  if (window.innerWidth >= 991) {
    nav.classList.remove("scrolled");
  }
}

window.addEventListener("resize", checkMediaQuery);
checkMediaQuery();
