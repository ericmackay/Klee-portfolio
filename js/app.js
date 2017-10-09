var loadPage = function(url) {
  var slider = document.getElementById("page-slide");

  slider.classList.add("shown");
  slider.classList.remove("shown");

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", url);
  oReq.open("GET", url);
  oReq.send();
  slider.innerHTML = oReq.response;
};
