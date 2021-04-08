console.log("helo");
var changeBgColor = document.querySelector("#change-bg-color");
var toTop = document.querySelector(".to-top");
var icon = document.querySelector(".nav-bar");
var image1 = "./Shoes/shoe2.jpg";
var image2 = "./Shoes/shoe3.jpg";
var image3 = "./Shoes/shoe7.jpg";
var slideShow = 0;
var imageHandler = [image1, image2, image3];
var slider = document.querySelector(".slider");
var div1 = document.querySelector(".div1");
var div2 = document.querySelector(".div2");
var div3 = document.querySelector(".div3");

// ********************************************************************************************

(function () {
  // var slideShow = 0;
  setInterval(function () {
    if (slideShow === imageHandler.length - 1) {
      // div3 show here
      slideShow = 0;
      // slider.style.innerHTML = "";
      slider.style.backgroundImage = `url('${imageHandler[slideShow]}')`;
      slider.innerHTML = `<h1><span class = "first">MEN'S</span><h1/>
                          <h1><span class = "second">SHOES</span></h1>
                          <h1><span class = "third">COLLECTION</span></h1>
                          <h1><span class = "forth">New trending shoes</span></h1>
                          <h1><span class="slider-btn">SHOP COLLECTIONS</span></h1>  `;
    } else if (slideShow === 0) {
      slideShow++;
      // slider.style.innerHTML = "";
      slider.style.backgroundImage = `url('${imageHandler[slideShow]}')`;
      slider.innerHTML = `<h1><span class = "first">SPORT'S</span><h1/>
                          <h1><span class = "second">ARRIVAL</span></h1>
                          <h1><span class = "third">GET YOUR'S NOW</span></h1>
                          <h1><span class = "forth">Up-to 50% OFF</span></h1>
                          <h1><span class="slider-btn">SHOP COLLECTIONS</span></h1>  `;

      // div1 show here
    } else if (slideShow === 1) {
      // div2 show here
      slideShow++;
      // slider.style.innerHTML = "";
      slider.style.backgroundImage = `url('${imageHandler[slideShow]}')`;
      slider.innerHTML = `<h1><span class = "first">WOMEN'S</span><h1/>
                          <h1><span class = "second">SPORT'S</span></h1>
                          <h1><span class = "third">COLLECTION</span></h1>
                          <h1><span class = "forth">New Stylesh shoes</span></h1>
                          <h1><span class="slider-btn">SHOP COLLECTIONS</span></h1>  `;
    }
  }, 6000);
})();

// ********************************************************************************************

// ********************************************************************************************

changeBgColor.addEventListener("mouseover", () => {
  changeBgColor.style.backgroundColor = "black";
});

changeBgColor.addEventListener("mouseout", () => {
  changeBgColor.style.backgroundColor = "#616161";
});
// ********************************************************************************************

// ****************************************** GO-TO TOP **************************************************
toTop.addEventListener("mouseover", () => {
  toTop.style.backgroundColor = "black";
  toTop.style.transform = "translateY(-8px )";
});

toTop.addEventListener("mouseout", () => {
  toTop.style.backgroundColor = "#616161";
  toTop.style.transform = "translateY(0px)";
});

toTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// ********************************************************************************************

var goToForm = document.querySelector(".go-to-form");
var contactForm = document.querySelector(".contact-form");
var closeIcon = document.querySelector(
  ".contact-form .right .btn .btn-wrapper"
);
console.log(closeIcon);
closeIcon.addEventListener("click", () => {
  contactForm.style.display = "none";
});
console.log(contactForm);
// console.log(goToForm);

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
// console.log(showAllProductBtn)
showAllProductBtn.addEventListener("click", () => {
  location.replace("./products.html");
});

// console.log("after")

var navbarContactBtn = document.querySelector(".menu-section .items .contact");
// console.log(navbarContactBtn)
navbarContactBtn.addEventListener("click", () => {
  contactForm.style.display = "grid";
});


