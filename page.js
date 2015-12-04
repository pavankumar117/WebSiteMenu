$(document).ready(function(){
  console.log('hello');
  $('#sidemenubutton1').click(function(){
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu4,#sidemenu5').hide(1000);
    } else {
        $('#sidemenu1').css('background','#800000');
        $('#sidemenu1').show(1000);
        $('#sidemenu2,#sidemenu3,#sidemenu4,#sidemenu5').hide();
      }
  $(this).data("clicks", !clicks);
  });

  $('#sidemenubutton2').click(function(){
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu4,#sidemenu5').hide(1000);
    } else {
        $('#sidemenu2').css('background','#4d4d4d');
        $('#sidemenu2').show(1000);
        $('#sidemenu1,#sidemenu3,#sidemenu4,#sidemenu5').hide();
      }
    $(this).data("clicks", !clicks);
  });

  $('#sidemenubutton3').click(function(){
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu4,#sidemenu5').hide(1000);
    } else {
        $('#sidemenu3').css('background','#4d4d4d');
        $('#sidemenu3').show(1000);
        $('#sidemenu1,#sidemenu2,#sidemenu4,#sidemenu5').hide();
      }
    $(this).data("clicks", !clicks);
  });

  $('#sidemenubutton4').click(function(){
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu4,#sidemenu5').hide(1000);
    } else {
        $('#sidemenu4').css('background','#4d4d4d');
        $('#sidemenu4').show(1000);
        $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu5').hide();

      }
    $(this).data("clicks", !clicks);
  });

  $('#sidemenubutton5').click(function(){
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu4,#sidemenu5').hide(1000);
    } else {
        $('#sidemenu5').css('background','#4d4d4d');
        $('#sidemenu5').show(1000);
        $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu4').hide();
      }
    $(this).data("clicks", !clicks);
  });

  $('#hidetoggle1').click(function(){
    $('#hidetoggle1').hide();
    $('#hidetoggle2').show();
    $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu4,#sidemenu5').hide(1000);
    $('#sidemenubutton1,#sidemenubutton2,#sidemenubutton3').hide(1000);
    $('#sidemenubutton4,#sidemenubutton5').hide(1000);
  });

  $('#hidetoggle2').click(function(){
    $('#hidetoggle1').show();
    $('#hidetoggle2').hide();
    $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu4,#sidemenu5').hide(1000);
    $('#sidemenubutton1,#sidemenubutton2,#sidemenubutton3').show(1000);
    $('#sidemenubutton4,#sidemenubutton5').show(1000);
  });
/*
  $('.menu').mouseleave(function(){
    $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu4,#sidemenu5').hide(1000);
  });

  $('.menu,#sidemenubutton1').mouseenter(function(){
    $('#sidemenu1').show(1000);
    $('#sidemenu2,#sidemenu3,#sidemenu4,#sidemenu5').hide(1000);
  });

  $('.menu,#sidemenubutton2').hover(function(){
    $('#sidemenu2').show(1000);
    $('#sidemenu1,#sidemenu3,#sidemenu4,#sidemenu5').hide(1000);
  });

  $('.menu,#sidemenubutton3').hover(function(){
    $('#sidemenu3').show(1000);
    $('#sidemenu1,#sidemenu2,#sidemenu4,#sidemenu5').hide(1000);
  });

  $('.menu,#sidemenubutton4').hover(function(){
    $('#sidemenu4').show(1000);
    $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu5').hide(1000);
  });

  $('.menu,#sidemenubutton5').hover(function(){
    $('#sidemenu5').show(1000);
    $('#sidemenu1,#sidemenu2,#sidemenu3,#sidemenu4').hide(1000);
  }); */

});
