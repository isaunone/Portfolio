import $ from 'jquery'

$(document).ready(function () {
  const scrollLink = $('.scroll')

  // smooth scrolling -----------------------
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
