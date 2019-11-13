const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset()
})

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.parallax');
//   var instances = M.Parallax.init(elems);
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.sidenav');
//   var instances = M.Sidenav.init(elems);
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.materialboxed');
//   var instances = M.Materialbox.init(elems);
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.scrollspy');
//   var instances = M.scrollSpy.init(elems);
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.textarea');
//   var instances = M.textarea.init(elems);
// });

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {
    accordion: false
  })
});

M.AutoInit();

document.querySelector("#link1").addEventListener("click", () => {
  document.querySelector("#article1").style.display = "none";
  document.querySelector("#article2").style.display = "none";
  document.querySelector("#article3").style.display = "none"
});
document.querySelector("#link2").addEventListener("click", () => {
  document.querySelector("#article1").style.display = "none";
  document.querySelector("#article2").style.display = "none";
  document.querySelector("#article3").style.display = "none"
});
document.querySelector("#link3").addEventListener("click", () => {
  document.querySelector("#article1").style.display = "none";
  document.querySelector("#article2").style.display = "none";
  document.querySelector("#article3").style.display = "none"
});