$('.header-right a').click(function(){
  $('.hamburger-menu').fadeIn()

  $('.hamburger-menu').addClass('active')
})

$('.close').click(function(){
  $('.hamburger-menu').fadeOut()

  $('.hamburger-menu').removeClass('active')
})
