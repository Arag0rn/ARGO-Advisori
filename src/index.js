// gamburger

document.getElementById("openNav").addEventListener("click", () => {
    document.getElementById("mainSideNav").style.width = "100%";
  })

  document.getElementById("closeNav").addEventListener("click", () => {
    document.getElementById("mainSideNav").style.width = "0";
  })

  document.getElementById("navbar-link-about").addEventListener("click", () => {
    document.getElementById("mainSideNav").style.width = "0";
  })

  document.getElementById("navbar-link-services").addEventListener("click", () => {
    document.getElementById("mainSideNav").style.width = "0";
  })

  document.getElementById("copyright").innerHTML = "&copy; " + new Date().getFullYear() + " Argo-Advisory";