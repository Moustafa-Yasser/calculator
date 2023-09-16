let buttons = document.querySelectorAll(".btn");
let spanFun = document.querySelector(".fun");
let result = document.querySelector(".result");
let btnResult = document.querySelector(".res");
let btnRest = document.querySelector(".rest");
let test = "";
buttons.forEach((button) => {
  button.addEventListener("click", (ev) => {
    let values = ev.target.getAttribute("data-set");
    let show = ev.target.textContent;
    test += values;
    spanFun.style = "transform: scale(1);";
    spanFun.innerHTML += show;
  });
});
btnResult.addEventListener("click", (e) => {
  if (test === "") {
    spanFun.innerHTML = "";
  } else {
    let answer = eval(test);
    result.style = "transform: rotateX(0deg);";
    result.innerHTML = answer;
    test;
  }
});
// Math((23.3432).toFixed());
btnRest.addEventListener("click", () => {
  result.style = "transform: rotateX(90deg);";
  spanFun.style = "transform: scale(0);";
  test = "";
  setTimeout(() => {
    spanFun.innerHTML = "";
    result.innerHTML = "";
  }, 500);
});

let dark = document.querySelector(".dark");
let move = document.querySelectorAll(
  "table tbody tr:first-child td:not(:last-child)"
);
let con = document.querySelector(".container");

dark.addEventListener("click", () => {
  con.classList.toggle("one");
  if (con.classList.value === "container one") {
    document.body.style.backgroundColor = "#fff";
    move.forEach((e) => {
      e.style.color = "#000";
    });
  } else {
    document.body.style.backgroundColor = "#17181a";
    move.forEach((e) => {
      e.style.color = "#fff";
    });
  }
});
document.querySelector(".mi").addEventListener("click", function () {
  result.innerHTML = -result.innerHTML;
});
