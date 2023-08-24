// search icon
let searchIcon = document.querySelector(".search-icon");
let searchSec = document.querySelector(".search-js");
let searchClose = document.querySelector(".search-js span");

searchIcon.onclick = function () {
  searchSec.classList.add("open");
};
searchClose.onclick = function () {
  searchSec.classList.remove("open");
};
//  owl carsol >>
$(".brand .owl-carousel").owlCarousel({
  loop: true,
  dots: false,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 5,
      nav: true,
      loop: true,
    },
  },
});
$(".suggest .owl-carousel").owlCarousel({
  loop: true,
  dots: false,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 6000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 5,
      nav: true,
      loop: true,
    },
  },
});
$(".most .owl-carousel").owlCarousel({
  loop: true,
  dots: false,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 6000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
      loop: true,
    },
  },
});
$(".best .owl-carousel").owlCarousel({
  loop: true,
  dots: false,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
      nav: true,
      loop: true,
    },
  },
});
$(".event .owl-carousel").owlCarousel({
  loop: true,
  dots: false,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 6000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
      loop: true,
    },
  },
});

$(".landing .owl-carousel").owlCarousel({
  loop: true,
  dots: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 5000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      loop: true,
    },
  },
});
// filter items >>
let lis = document.querySelectorAll(".product-menu ul li");
let allBoxs = document.querySelectorAll(".product-item .item");

lis.forEach((li) => {
  li.addEventListener("click", removeactive);
  li.addEventListener("click", boxManage);
});
function removeactive() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function boxManage() {
  allBoxs.forEach((box) => {
    box.style.display = "none";
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
      el.style.display = "block";
    });
  });
}
// end filter >>>>>>>>>>
// start img product
let mainImage = document.querySelector(".product .big-img img");
let smallImages = document.querySelectorAll(".product .small-img img");

smallImages.forEach((img) => {
  img.onclick = function () {
    mainImage.src = img.src;
  };
});
// end img product
// start scroll to top
let up = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 800) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// end scroll to top
