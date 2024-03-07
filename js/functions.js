// myMenu = () => {
//   var btn = document.getElementById("mobile-menu");
//   var btn2 = document.getElementById("mobile-menu-container");

//   if (btn.style.display == "block" && btn2.style.display == "block") {
//     btn.style.display = "none";
//     btn2.style.display = "none";
//   } else {
//     btn.style.display = "block";
//     btn2.style.display = "block";
//   }
// };

myMenu = () => {
  var btn = document.querySelector("#mobile-menu");
  if (btn.style.display == "block") {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
};

const menuBtn = document.querySelector(".menu-button");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
