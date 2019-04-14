$(function() {
    var timeout;
  
    $(".icon")
      .on("mousedown touchstart", function() {
        timeout = setTimeout(function() {
          $(".iphone").addClass("wiggle");
        }, 1000);
      })
      .on("mouseup touchend", function() {
        clearTimeout(timeout);
      });
  
    $(".home").click(function() {
      $(".iphone").removeClass("wiggle");
    });
  });