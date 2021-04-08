
var goToForm = document.querySelector(".go-to-form");
var contactForm = document.querySelector(".contact-form");
var closeIcon = document.querySelector(
  ".contact-form .right .btn .btn-wrapper"
);
closeIcon.addEventListener("click", () => {
  contactForm.style.display = "none";
});
goToForm.addEventListener("click", () => {
  // console.log("clocjk")
  contactForm.style.display = "grid";
});

var whatsappBtn = document.querySelector(".right .discription .whatsapp");
// console.log(whatsappBtn)

whatsappBtn.addEventListener("click", () => {
  location.replace("https://wa.me/message/FNSMY5ERARQGF1");
});

var showAllProductBtn = document.querySelector(
  ".best-sellers .product-btn .button-wrapper"
);


var navbarContactBtn = document.querySelector(".menu-section .items .contact");
// console.log(navbarContactBtn)
navbarContactBtn.addEventListener("click", () => {
  contactForm.style.display = "grid";
});
