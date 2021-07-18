//Navbar Show and Hide

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementsByClassName("navbar")[0].style.top = "-100px";
  } else {
    document.getElementsByClassName("navbar")[0].style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
};

//Read More Press

const projectOneButton = document.getElementsByClassName("read-more")[0];
const projectTwoButton = document.getElementsByClassName("read-more")[1];

projectOneButton.addEventListener("click", () => {
  document.getElementsByClassName("load-one")[0].style.left = "-200%";
  document.getElementsByClassName("load-two")[0].style.left = "-100%";
  document.getElementsByClassName("page-one")[0].style.left = "0%";
  document.getElementsByClassName("navbar")[0].style.top = "0px";
})

projectTwoButton.addEventListener("click", () => {
  document.getElementsByClassName("load-one")[0].style.left = "-200%";
  document.getElementsByClassName("load-two")[0].style.left = "-100%";
  document.getElementsByClassName("page-two")[0].style.left = "0%";
  document.getElementsByClassName("navbar")[0].style.top = "0px";
})

const returnButton = document.getElementsByClassName("return")[0];
const returnButton2 = document.getElementsByClassName("return")[1];

returnButton.addEventListener("click", ()=> {
  document.getElementsByClassName("load-one")[0].style.left = "100%";
  document.getElementsByClassName("load-two")[0].style.left = "200%";
  document.getElementsByClassName("page-one")[0].style.left = "300%";
  document.getElementsByClassName("navbar")[0].style.top = "0px";
})

returnButton2.addEventListener("click", ()=> {
  document.getElementsByClassName("load-one")[0].style.left = "100%";
  document.getElementsByClassName("load-two")[0].style.left = "200%";
  document.getElementsByClassName("page-two")[0].style.left = "300%";
  document.getElementsByClassName("navbar")[0].style.top = "0px";
})

// GSAP Scroll Fade Timelines

const arrowhead = gsap.timeline({
    scrollTrigger: {
        trigger: "#about-page",
        start: "top bottom",

    }
});

arrowhead.to(".arrowhead", {opacity: 0, duration: 1});

const aboutTextArrive = gsap.timeline({
    scrollTrigger: {
        trigger: "#about-page",
        start: "center bottom",
    }
});

aboutTextArrive.from(".about-text", {opacity: 0, duration: 2});

const loadingOne = gsap.timeline({
  scrollTrigger: {
      trigger: "#about-page",
      start: "center bottom",
  }
});

loadingOne.from(".about-load-one", {x: -1400, opacity: 1, duration: 0.8})
  .to(".about-load-one", {x: -1400, opacity: 1, duration: 0.8});

const loadingTwo = gsap.timeline({
  scrollTrigger: {
      trigger: "#about-page",
      start: "center bottom",
  }
});

loadingTwo.from(".about-load-two", {x: 1400, opacity: 1, duration: 0.8})
  .to(".about-load-two", {x: 1400, opacity: 1, duration: 0.8});

const contactLoadingOne = gsap.timeline({
  scrollTrigger: {
      trigger: "#contact-page",
      start: "center bottom",
  }
});

contactLoadingOne.from(".contact-load-one", {x: -1400, opacity: 1, duration: 0.8})
  .to(".contact-load-one", {x: -1400, opacity: 1, duration: 0.8});

const contactLoadingTwo = gsap.timeline({
  scrollTrigger: {
      trigger: "#contact-page",
      start: "center bottom",
  }
});

contactLoadingTwo.from(".contact-load-two", {x: 1400, opacity: 1, duration: 0.8})
  .to(".contact-load-two", {x: 1400, opacity: 1, duration: 0.8});