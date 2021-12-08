// Example of swiper used and modified.

(function ($, Drupal) {
  const mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheelControl: true,
    slidesPerView: 1,
    mousewheelReleaseOnEdges: true,
    speed: 1000,
    centerMode: true,
    freeMode: false,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    renderCustom: function (swiper, current, total) {
      const names = [];
      $('.swiper-wrapper .swiper-slide').each(function (i) {
        names.push($(this).find('.title').text());
      });
      let text = '<ul>';
      for (let i = 1; i <= total; i++) {
        if (current == i) {
          text += `<li class="swiper-pagination-bullet sibu active">${names[i]}</li>`;
        } else {
          text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
        }
      }
      text += '</ul>';
      return text;
    },
  });

  // Custom function to detect if swiper slider container is within the range so that full screen can be achieved.

  $.fn.isInViewport = function () {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();
    const viewportTop = $(window).scrollTop() + 20;
    const viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // Scroll detector.

  let lastScrollTop = 0;
  $(window).scroll(function (event) {
    const st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $('.swiper-container').each(function (i, el) {
        if (
          $(this).isInViewport() &&
          mySwiper.activeIndex !== mySwiper.slides.length - 1
        ) {
          $('.page-wrap').addClass('apply-slider');
        } else {
          $('.page-wrap').removeClass('apply-slider');
        }
      });
    } else {
      // upscroll code

      $('.swiper-container').each(function (i, el) {
        if ($(this).isInViewport()) {
          if (mySwiper.activeIndex === 0) {
            $('.page-wrap').removeClass('apply-slider');
          } else {
            $('.page-wrap').addClass('apply-slider');
          }
        } else {
          $('.page-wrap').removeClass('apply-slider');
        }
      });
    }
    lastScrollTop = st;
  });
})(jQuery, Drupal);
