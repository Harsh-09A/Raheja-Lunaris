

// Popup Auto
$(window).ready(function () {
  setTimeout(function () {
    $("#popupModal").modal("show");
  }, 3000);
});


// amenities

$('.before-after-deck').slick({
  vertical: true,
  verticalScrolling: true,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  infinite: true,
  arrows: true,
  dots: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 801, settings: {
        slidesToShow: 4,
        vertical: false,
      }
    },
    {
      breakpoint: 641, settings: {
        slidesToShow: 1,
        vertical: false,
      }
    },
    {
      breakpoint: 481, settings: {
        slidesToShow: 1,
        vertical: false,
      }
    },
  ],
});


// gallery code

"use strict";
(function () {
  window.onmouseover = () => {
    const obj = document.querySelector("#gallery");
    const time = 10000;
    function animStart() {
      if (obj.classList.contains("active") == false) {
        obj.classList.add("active");
        setTimeout(() => {
          animEnd();
        }, time);
      }
    }
    function animEnd() {
      obj.classList.remove("active");
      obj.offsetWidth;
    }
    document.addEventListener("scroll", function () {
      // scroll or scrollend
      animStart();
    });
    window.addEventListener("resize", animStart);
    animStart();
  };
})();

// fancy Box
Fancybox.bind('[data-fancybox="gallery"]', {
  // Custom options for the first gallery
});


// Read More
function toggleContent(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More ...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}