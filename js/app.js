var loadPage = function(url) {
  var slider = document.getElementById("page-slide");
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function() {
    var html = this.responseText;
    slider.innerHTML = html;
  });
  oReq.open("GET", url);
  oReq.send();
};
