const testimonialsBtns = document.querySelectorAll(".testimonials-logos img");
const testimonialsHeadImg = document.getElementById("testimonials-head-img");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const hamburgerMenu = document.querySelector(".hamburger-menu");

const pricingBtns = document.querySelectorAll(".pricing-buttons button");
const pricingDollar_eff = document.getElementById("price-eff");
const pricingDollar_team = document.getElementById("price-team");

const questionBtns = document.querySelectorAll(".question-buttons button");
const qaContainers = document.querySelectorAll(".qa-cont");




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


pricingBtns.forEach((btn,i,arr) => {
  btn.addEventListener("click",function(){
    arr.forEach(btn =>{
      btn.classList.remove("active");
    });
    btn.classList.toggle("active");

    pricingDollar_eff.innerHTML = (btn.innerHTML ==="Monthly") ?  "$19" :(btn.innerHTML ==="Yearly")? "$15": "--";
    pricingDollar_team.innerHTML = (btn.innerHTML ==="Monthly") ?  "$32" :(btn.innerHTML ==="Yearly")? "$29": "--";
  });
})




questionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    for (let i = 0; i < questionBtns.length; i++) {
      questionBtns[i].classList.remove("blue-btn");
    }
    btn.classList.toggle("blue-btn");
  });
});

qaContainers.forEach((each) => {
  each.querySelector(".q-cont").addEventListener("click", function () {
    for (let i = 0; i < qaContainers.length; i++) {
      qaContainers[i].querySelector(".a-cont").classList.remove("open");
      qaContainers[i].querySelector("i").classList.remove("fa-minus");
      qaContainers[i].querySelector("i").classList.add("fa-plus");
    }
    each.querySelector(".a-cont").classList.toggle("open");
    each.querySelector("i").classList.remove("fa-plus");
    each.querySelector("i").classList.add("fa-minus");
  });
});
