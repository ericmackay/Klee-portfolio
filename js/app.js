$("._show-menu")
  .on("touchstart", function() {
    $(this).addClass("activate");
  })
  .on("touchend", function() {
    $(this).removeClass("activate");
  });


  var loadPage = function(url) {
    var received = function() {
      var slider = document.getElementById("page-slide");
      slider.innerHTML = oReq.response;
      slider.classList.add("shown");
    }
  
    slider.classList.remove("shown")
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", received);
    oReq.open("GET", url);
    oReq.send();
  }
  
  ------------------
  
  <a onclick="loadPage('/about.html')">About</a>
  <a onclick="loadPage('/contact.html')">Contact</a>
  
  ------------------
  
  #slider {
    opacity : 0;
    transform : translate3d(100%, 0, 0);
    transition: all 0.5s;
  }
  
  #slider.shown {
    transform : translate3d(0,0,0);
    opacity : 1;
  }