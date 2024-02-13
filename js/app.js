const testimonialsBtns = document.querySelectorAll(".testimonials-logos img");
const testimonialsHeadImg = document.getElementById("testimonials-head-img");

console.log(testimonialsHeadImg);

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
