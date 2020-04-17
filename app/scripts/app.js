// parallax function and how to

document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    let speed = layer.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX * speed) / 100;
    let y = (window.innerWidth - e.pageY * speed) / 100;
    layer.style.transform = `
          translateX(${x}px)
          translateY(${y}px)`;
  });
}

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  //fixes the body element
  document.body.style.position = "fixed";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  //return to previous place on the body
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, 3000);
}

// works modal

/* Open when someone clicks on the span element */
function openWorks() {
  document.getElementById("works-modal").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeModal() {
  document.getElementById("works-modal").style.width = "0%";
}

// curve transition

let scroll = document.querySelector(".curve");
window.addEventListener("scroll", function () {
  let value = 1.5 + window.scrollY / -850;
  scroll.style.transform = `scaleY(${value})`;
});
