var loadPage = function(url) {
  var received = function() {
    var slider = document.getElementById("page-slide");
    slider.innerHTML = oReq.response;
    slider.classList.add("shown");
  };
  slider.classList.remove("shown");
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", received);
  oReq.open("GET", url);
  oReq.send();
};
