const menuMobile = document.getElementById('menu-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
menuMobile.addEventListener('click', toggleMenu);

function openFeatures() {
  var dropdownFeatures = document.getElementById("dropdownFeatures");
  var dropdownIcon = document.getElementById("dropdownIcon");

  dropdownFeatures.classList.toggle("show");

  var isOpen = dropdownFeatures.classList.contains("show");

  dropdownIcon.src = isOpen
    ? "./images/icon-arrow-up.svg"
    : "./images/icon-arrow-down.svg";
}

window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var dropdownFeatures = document.getElementById("dropdownFeatures");
    if (dropdownFeatures.classList.contains("show")) {
      dropdownFeatures.classList.remove("show");
    }
  }
};

function openCompany() {
    var dropdownCompany = document.getElementById("dropdownCompany");
    var dropdownIconCompany = document.getElementById("dropdownIconCompany");
  
    dropdownCompany.classList.toggle("show");
    var isOpen = dropdownCompany.classList.contains("show");
  
    dropdownIconCompany.src = isOpen
      ? "./images/icon-arrow-up.svg"
      : "./images/icon-arrow-down.svg";
  }
  
  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var dropdownCompany = document.getElementById("dropdownCompany");
      if (dropdownCompany.classList.contains("show")) {
        dropdownCompany.classList.remove("show");
      }
    }
  };
