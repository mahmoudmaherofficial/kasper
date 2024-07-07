let protfolioLis = document.querySelectorAll(".portfolio .shuffle li");

protfolioLis.forEach(function (ele) {
  ele.onclick = function () {
    protfolioLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});
