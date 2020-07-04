$(document).ready(function(){
  var count = 1;
  var price = $(".buy-holder-price").text();

  var totalPrice = price * count;

  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);

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
    $("body").addClass("menu-opened");
    // $(".menu-main").addClass("menu-opened");
    // $(".overlay").addClass("menu-opened");
  }

  function closeMenuClick() {
    $("body").removeClass("menu-opened");
    // $(".menu-main").removeClass("menu-opened");
    // $(".overlay").removeClass("menu-opened");
  }

  function getWindowLocation() {
    console.log(window.location.href);
  }

  // function hoverLike(element) {
  //   element.setAttribute('src', 'images/liked.svg');
  // }
  //
  // function unhoverLike(element) {
  //   element.setAttribute('src', 'images/like.svg');
  // }
  //
  // function hoverShare(element) {
  //   element.setAttribute('src', 'images/shared.svg');
  // }
  //
  // function unhoverShare(element) {
  //   element.setAttribute('src', 'images/shareIndex.svg');
  // }

  $(".like-button").on("mouseover", function (element) {
    $(".like-button").attr("src","images/liked.svg");
});

$(".like-button").on("mouseout", function (element) {
  $(".like-button").attr("src","images/like.svg");
});

$(".share-button").on("mouseover", function (element) {
  $(".share-button").attr("src","images/shared.svg");
});

$(".share-button").on("mouseout", function (element) {
  $(".share-button").attr("src","images/shareIndex.svg");
});

$(".like-button-mp").on("mouseover", function (element) {
  $(".like-button-mp").attr("src","images/liked.svg");
});

$(".like-button-mp").on("mouseout", function (element) {
$(".like-button-mp").attr("src","images/like-mp.svg");
});

$(".share-button-mp").on("mouseover", function (element) {
$(".share-button-mp").attr("src","images/shared.svg");
});

$(".share-button-mp").on("mouseout", function (element) {
$(".share-button-mp").attr("src","images/share-mp.svg");
});

$(".like-min-slider").on("mouseover", function (element) {
$(event.target).attr("src","images/liked-white.svg");
});

$(".like-min-slider").on("mouseout", function (event) {
  $(event.target).attr("src","images/like.svg");
});

  // function cost() {
  //  var price = 200;
  //  var total = price *
  // }

  $(".plus").on('click', function(e) {
    plus();
    calcTotalPrice();
  });

  $(".minus").on('click', function(e) {
    minus();
    calcTotalPrice();
  });

  $(".menu-exc").on('click', function(e) {
    menuClick();
  });

  $(".menu-cross").on('click', function(e) {
    closeMenuClick();
  });

  $(".overlay").on('click', function(e) {
    closeMenuClick();
  });

  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

// var sidebar = new StickySidebar('.buy-excursion', {minWidth: 426});

  // $('.buy-excursion').stickySidebar({
  //   topSpacing: 60,
  //   bottomSpacing: 60,
  //   innerWrapperSelector: '.basic-placeholder-spc',
  //   minwidth: 470
  // });

  activateSidebar();

  $(window).resize(function () {
    activateSidebar();
  });

  function activateSidebar() {
    if ( window.innerWidth <= 425 ) {
    }
    else {
      stickySidebar = $('.buy-excursion').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 60,
        innerWrapperSelector: '.basic-placeholder-spc'
      });
   }
 }



// if (window.innerWidth < 425) {
// $(window).resize(function () {
//   $('.buy-excursion').stickySidebar({
//     topSpacing: 60,
//     bottomSpacing: 60,
//     innerWrapperSelector: '.basic-placeholder-spc',
//     minwidth: 470
//   });
//  });
// };


  // $('.buy-excursion').stickySidebar({
  //   topSpacing: 60,
  //   bottomSpacing: 60,
  //   innerWrapperSelector: '.basic-placeholder-spc',
  //   minwidth: 470
  //
  // });
});
