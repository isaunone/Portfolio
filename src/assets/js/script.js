import $ from 'jquery'

$(document).ready(function () {
  const scrollLink = $('.scroll')

  scrollLink.click(function (e) {
    e.preventDefault()
    const url = $('body').find($(this).attr('href')).offset().top
    $('html, body').animate({
      scrollTop: url
    }, 700)
    $(this).parent().addClass('active')
    $(this).parent().siblings().removeClass('active')
    return false
  })
})

$(window).scroll(function () {
  var nav = $('.navbar')
  var top = 100
  if ($(window).scrollTop() >= top) {
    nav.addClass('toggleBg')
  } else {
    nav.removeClass('toggleBg')
  }
})
