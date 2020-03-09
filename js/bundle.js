/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var count = 1;
  var price = $(".buy-holder-price").text();
  var totalPrice = price * count;
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/') + 1);
  setCurrentPage();

  function setCurrentPage() {
    $(".menu-list li").each(function (i, el) {
      var menuItemLink = $(el).find('a').attr('href');

      if (filename === menuItemLink) {
        $(el).addClass("active");
      }
    });
  }

  function plus() {
    count += 1;
    $(".amount").text(count);
    console.log(count);
  }

  function minus() {
    count -= 1;

    if (count <= 0) {
      count = 1;
    }

    $(".amount").text(count);
    console.log(count);
  }

  function calcTotalPrice() {
    totalPrice = price * count;
    $(".buy-holder-total-price-result").text(totalPrice);
  }

  function menuClick() {
    $(".menu-main").addClass("menu-opened");
    $(".overlay").addClass("menu-opened");
  }

  function closeMenuClick() {
    $(".menu-main").removeClass("menu-opened");
    $(".overlay").removeClass("menu-opened");
  }

  function getWindowLocation() {
    console.log(window.location.href);
  } // function cost() {
  //  var price = 200;
  //  var total = price *
  // }


  $(".plus").on('click', function (e) {
    plus();
    calcTotalPrice();
  });
  $(".minus").on('click', function (e) {
    minus();
    calcTotalPrice();
  });
  $(".menu-exc").on('click', function (e) {
    menuClick();
  });
  $(".menu-cross").on('click', function (e) {
    closeMenuClick();
  });
  $(".overlay").on('click', function (e) {
    closeMenuClick();
  });
});

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    // autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    }, {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  var rev = $('.slider2');
  rev.on('init', function (event, slick, currentSlide) {
    var cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
  }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    next = cur.next(), prev = cur.prev();
    prev.prev();
    prev.next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
  });
  rev.slick({
    speed: 1000,
    arrows: true,
    dots: false,
    focusOnSelect: true,

    /*  prevArrow: '<button> prev</button>',
      nextArrow: '<button> next</button>',*/
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    customPaging: function customPaging(slider2, i) {
      return '';
    }
    /*infinite: false,*/

  }); //    // On swipe event
  // $('.slider').on('swipe', function(event, slick, direction){
  // console.log(direction);
  // // left
  // });
  //
  // // On edge hit
  // $('.slider').on('edge', function(event, slick, direction){
  // console.log('edge was hit')
  // });
  //
  // // On before slide change
  // $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  // console.log(nextSlide);
  // });
  //
  // // Add a slide
  // $('.slider').slick('slickAdd',"<div></div>");
  //
  // // Get the current slide
  // var currentSlide = $('.slider').slick('slickCurrentSlide');
  //
  // $('.slider').slick('setPosition');
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************************************!*\
  !*** multi ./src/js/index.js ./src/js/script.js ./src/js/slider.js ./src/scss/style.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
__webpack_require__(/*! ./src/js/script.js */"./src/js/script.js");
__webpack_require__(/*! ./src/js/slider.js */"./src/js/slider.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map