$(document).ready(function () {
  if ($(".burger").length > 0) {
    let menu = $(".header .menu");
    let burger = $(".burger");
    let body = $("body");

    burger.on("click", function () {
      if (menu.hasClass("opened")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    function openMenu() {
      burger.addClass("opened");
      menu.addClass("opened").stop().slideDown();
      body.addClass("hidden");
    }

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened").stop().slideUp();
      body.removeClass("hidden");
    }
  }

  if ($("nav").length > 0) {
    $("nav a").on("click", function (event) {
      event.preventDefault();
      menuAnhor($(this).attr("href"));
    });

    function menuAnhor(target) {
      if ($(".burger").hasClass("opened")) {
        $(".burger").removeClass("opened");
        $(".menu").removeClass("opened");
        $("body").removeClass("hidden");
        $(".menu").stop().slideUp();
      }

      $("html, body").animate({ scrollTop: $(target).offset().top - 100 }, 150);
    }
  }

  if ($(".reviews-slider").length > 0) {
    const swiper = new Swiper(".reviews-slider", {
      slidesPerView: 3,
      spaceBetween: 32,
      watchSlidesProgress: true,
      loop: false,
      navigation: {
        prevEl: ".reviews__conrtrols .swiperBtnPrev",
        nextEl: ".reviews__conrtrols .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1.8,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });
  }

  if ($(".cases-slider").length > 0) {
    const swiper = new Swiper(".cases-slider", {
      slidesPerView: 1,
      spaceBetween: 32,
      watchSlidesProgress: true,
      loop: true,
      navigation: {
        // prevEl: ".reviews__conrtrols .swiperBtnPrev",
        nextEl: ".cases__bottom .site-link",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      },
    });
  }

  if ($(".design__tabs").length > 0) {
    $(".design__tabs .tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
      controls: {
        prev: ".design__prev",
        next: ".design__next",
      },
    });
  }

  if ($(".faq").length > 0) {
    $(".faq__head").on("click", function () {
      $(this)
        .toggleClass("opened")
        .parents(".faq__item")
        .find(".faq__body")
        .stop()
        .slideToggle();
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($("[data-aos]").length > 0) {
    AOS.init({
      delay: 0,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      onShow: () => {
        $("body").addClass("modal-open");
      },
      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => {
        e.preventDefault();
        $("body").addClass("modal-open");
      });
    });

    $("[data-micromodal-close]").map(function () {
      $(this).click((e) => {
        // e.preventDefault();
        if ($(this).attr("data-modal")) {
          setTimeout(() => {
            $("body").addClass("modal-open");
          }, 0.1);
        }
      });
    });
  }
});
