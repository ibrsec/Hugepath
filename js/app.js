const testimonialsBtns = document.querySelectorAll(".testimonials-logos img");
const testimonialsHeadImg = document.getElementById("testimonials-head-img");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const hamburgerMenu = document.querySelector(".hamburger-menu");






//! Testimonial imgs
testimonialsBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const logoToSend = btn.getAttribute("data");
    console.log("logoToSend :>> ", logoToSend);
    testimonialsHeadImg.setAttribute("src", `./img/logos/${logoToSend}.png`);

    testimonialsBtns.forEach((btn) => {
        btn.classList.remove("active");
    });
    btn.classList.toggle("active");
  });
});

//! hamburger Menu
hamburgerBtn.addEventListener("click",function(){
    console.log("test");
    hamburgerMenu.classList.toggle("opened");
})


window.addEventListener("resize", function () {

    if(this.innerWidth > 990){
    hamburgerMenu.classList.remove("opened");

    }
})