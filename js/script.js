// MENU TOGGLE
$('header .menu-toggle').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('menu-close');
  $('header .menu-toggle img').fadeToggle();
  $('header .menu-toggle i').fadeToggle();
	$('header .header-menu').fadeToggle();
});

// NAV MENU TOGGLE DORPDOWN
$('.header-menu nav .nav-dropdown-link').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('active-dropdown');
});

// SERACH BOX TOGGLE
$('.search-box button').on('click', function(e){
	e.preventDefault();
	if($(this).parent().hasClass('active') && $(this).prev().val() != ''){
		$(this).parent().submit();
		return;
	}
	$(this).parent().toggleClass('active');
});

// CIRCLE TABS
$('.circle-tabs').height($('.circle-tabs').innerWidth());
let circleAngle = 0;
let circleItems = 13
let radialDistance = 235;
let radialDistanceFirst = 170;
let firstElement = true;
if($(window).width() <= 1280){
  radialDistance = 215;
  radialDistanceFirst = 130;
}
$('.circle-tabs .circle-tabs--item').each(function(){
	$(this).css({
		'transform-origin' : `${($(this).width() / 2) + radialDistance}px`,
		'transform' : `translateX(-${(firstElement ? radialDistanceFirst : radialDistance)}px) rotate(${circleAngle}deg)`
	});
	firstElement = false;
	$(this).find('.circle-tabs--item-content').css({
		'transform' : `rotate(-${circleAngle}deg)`
	});
	circleAngle += 360 / circleItems;
});

$(document).ready(function(){
  // TABS
  // CIRCLE TABS
  $('.circle-tabs .circle-tabs--item:not(:first-of-type)').on('click', function(){
    let currentTab = $(this);
    if($('.services-content .active-tab').attr('data-tab') != currentTab.attr('data-tab')){
      $('.services-content .active-tab').fadeOut(function(){
        $(this).removeClass('active-tab');
        $('.circle-tabs .circle-tabs--item.active-tab').removeClass('active-tab');
        currentTab.addClass('active-tab');
        $(`.services-content [data-tab=${currentTab.attr('data-tab')}]`).addClass('active-tab');
        $(`.services-content [data-tab=${currentTab.attr('data-tab')}]`).fadeIn();
      });
    }
  });

  // SOLUTIONS TABS
  $('.solutions-tabs [data-tab]').on('click', function(){
    let currentTab = $(this);
    if($('.solutions-tabs--content .active-tab').attr('data-tab') != currentTab.attr('data-tab')){
      $('.solutions-tabs--content ,solutions-tabs--content').attr('data-active', currentTab.attr('data-tab'));
      $('.solutions-tabs--content .active-tab').fadeOut(function(){
        $(this).removeClass('active-tab');
        $('.solutions-tabs .active-tab').removeClass('active-tab');
        currentTab.addClass('active-tab');
        $(`.solutions-tabs--content [data-tab=${currentTab.attr('data-tab')}]`).addClass('active-tab');
        $(`.solutions-tabs--content [data-tab=${currentTab.attr('data-tab')}]`).fadeIn();
      });
    }
  });

  // CAROUSEL CLIENTS
  try{
    $('.carousel-clients').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<div class="slick-custom-prev"><i class="fa fa-angle-left"></i></div>',
      nextArrow: '<div class="slick-custom-next"><i class="fa fa-angle-right"></i></div>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // CAROUSEL BLOGSY
    $('.carousel-blogsy').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
  }
  catch{}
});

// INPUT FILE TRIGGER
$('.contact-us-form form .btn-file').on('click', function(){
  $(this).siblings('[type="file"]').trigger('click');
});

function blogsyPagination(){
  $('.paginationjs li:not(.disabled):not(.active)').on('click', function(){
    let selectedPage = $(this).attr('data-num');
    let currentPage = $('.blogsy--pages .blogsy--card.active-page');
    if(selectedPage == parseInt(currentPage.attr('data-page'))){
      return false;
    }
    $('.blogsy--pagination').addClass('wait');
    currentPage.fadeOut(function(){
      $(`.blogsy--pages .blogsy--card[data-page="${selectedPage}"]`).fadeIn(function(){
        $('.blogsy--pagination').removeClass('wait');
      });
      $(`.blogsy--pages .blogsy--card[data-page="${selectedPage}"]`).addClass('active-page');
      $(this).removeClass('active-page');
    });
  });
}

$('.our-clients .our-clients-case .our-clients-logo').on('mouseover', function(){
  let currentCard = $(this).attr('data-card');
  $(`.our-clients .our-clients-card[data-card="${currentCard}"]`).css('top', `${parseInt($(this).offset().top) + $(this).height() + 30}px`);
  $(`.our-clients .our-clients-card[data-card="${currentCard}"]`).fadeIn('fast');
});

$('.our-clients .our-clients-case .our-clients-logo').on('mouseout', function(){
  let currentCard = $(this).attr('data-card');
  $(`.our-clients .our-clients-card[data-card="${currentCard}"]`).fadeOut('fast');
});