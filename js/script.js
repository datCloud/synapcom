$('header .menu-toggle').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('menu-close');
  $('header .menu-toggle img').fadeToggle();
  $('header .menu-toggle i').fadeToggle();
	$('header .header-menu').fadeToggle();
});

$('.header-menu nav .nav-dropdown-link').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('active-dropdown');
});

$('.search-box button').on('click', function(e){
	e.preventDefault();
	if($(this).parent().hasClass('active') && $(this).prev().val() != ''){
		$(this).parent().submit();
		return;
	}
	$(this).parent().toggleClass('active');
});

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

  $('.solutions-tabs [data-tab]').on('click', function(){
    let currentTab = $(this);
    if($('.solutions-tabs--content .active-tab').attr('data-tab') != currentTab.attr('data-tab')){
      $('.solutions-tabs--content .active-tab').fadeOut(function(){
        $(this).removeClass('active-tab');
        $('.solutions-tabs .active-tab').removeClass('active-tab');
        currentTab.addClass('active-tab');
        $(`.solutions-tabs--content [data-tab=${currentTab.attr('data-tab')}]`).addClass('active-tab');
        $(`.solutions-tabs--content [data-tab=${currentTab.attr('data-tab')}]`).fadeIn();
      });
    }
  });
});

$(document).ready(function(){
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

  $('.carousel-blogsy').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
});

$('[data-fake]').fakeSelect();