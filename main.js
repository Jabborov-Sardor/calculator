const elInput1 = document.getElementById("inp1");
const elInput2 = document.getElementById("inp2");
const elDre = document.querySelector("#res");

document.querySelector(".btnPlus").onclick = function () {
  let sum = +elInput1.value + +elInput2.value;
  elDre.innerHTML = `${sum}`;
};
document.querySelector(".btnMinus").onclick = function () {
  let sum = +elInput1.value - +elInput2.value;
  elDre.innerHTML = `${sum}`;
};
document.querySelector(".btnMult").onclick = function () {
  let sum = +elInput1.value * +elInput2.value;
  elDre.innerHTML = `${sum}`;
};
document.querySelector(".btnDivide").onclick = function () {
  let sum = +elInput1.value / +elInput2.value;
  elDre.innerHTML = `${sum}`;
};
document.querySelector(".btnRes").onclick = function () {
  let sum = +elInput1.value % +elInput2.value;
  elDre.innerHTML = `${sum}`;
};
