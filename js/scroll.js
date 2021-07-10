var eleFadein = document.querySelectorAll(".invisible");

function fadeIn() {
  for (var i = 0; i < eleFadein.length; i += 1) {
    if (window.scrollY + (window.screen.height / 2) >= eleFadein[i].offsetTop) {
      console.log(eleFadein[i]);

      eleFadein[i].classList.add("show");
      eleFadein[i].classList.remove("invisible");
    }
  }
}

window.addEventListener("scroll", fadeIn);
