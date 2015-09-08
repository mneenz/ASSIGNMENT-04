/* Nina's awesome Javascript file */

$( document ).ready(function() {

  //Changing link colour on click
  var customBackground = "light";

  $('a').click(function(){
    if (customBackground === "light") {
      $(this).css('color', '#333');
      customBackground = "dark";
    } else {
      $(this).css('color', '#999');
      customBackground = "light";
    }
  });

  $('.readmore').click(function(){
    event.preventDefault();
    $("#show-this-on-click").slideDown("slow"); //Show the hidden text
    $('.readmore a').hide(); //Hide the Read More link
    $('.readless a').show(); //Show the Read Less link
    $("html, body").animate({scrollTop: $("#show-this-on-click").offset().top}, 600); //Scroll to the downslided text
  });

  $('.readless').click(function(){
    event.preventDefault();
    $("#show-this-on-click").slideUp("slow"); //Hide the downslided text
    $('.readless a').hide(); //Hide the Read Less link
    $('.readmore a').show(); //Show the Read More link
    $("html, body").animate({scrollTop: $(".post p:first-of-type").offset().top}, 600); //Scroll to the top of the paragraph
  });

  $('.learnmore').click(function(){
    event.preventDefault();
    $('.learnmore').hide(); //Hide the Read More link
    $("#learnmoretext").slideDown("slow"); //Show the hidden text
    $("html, body").animate({scrollTop: $("#learnmoretext").offset().top-20}, 600); //Scroll to the top of the paragraph
  });

});
