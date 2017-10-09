$("._show-menu")
  .on("touchstart", function() {
    $(this).addClass("activate");
  })
  .on("touchend", function() {
    $(this).removeClass("activate");
  });
