// const inp1 = document.querySelector("#firstInp");
// const inp2 = document.querySelector("#secondInp");
// const result = document.querySelector(".result");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     let target = e.currentTarget;

//     if (target.textContent === "+") {
//       calcPlus(+inp1.value, +inp2.value);
//       changeResult();
//     } else if (target.textContent === "-") {
//       calcMinus(+inp1.value, +inp2.value);
//       changeResult();
//     } else if (target.textContent === "*") {
//       calcMultiply(+inp1.value, +inp2.value);
//       changeResult();
//     } else if (target.textContent === "/") {
//       calcDivide(+inp1.value, +inp2.value);
//       changeResult();
//     } else if (target.textContent === "%") {
//       calcRes(+inp1.value, +inp2.value);
//       changeResult();
//     } else {
//       inp1.value = "";
//       inp2.value = "";
//       result.textContent = "";
//       result.style.backgroundColor = "transparent";
//       result.style.border = "2px solid greenyellow";
//     }
//   });
// });

// function calcPlus(num1, num2) {
//   //   if (result.textContent === "") {
//   //     return (result.textContent = "");
//   //   }

//   return (result.textContent = num1 + num2);
// }
// function calcMinus(num1, num2) {
//   if (num1 > num2) {
//     return (result.textContent = num1 - num2);
//   } else if (num1 < num2) {
//     return (result.textContent =
//       "Birinchi son Ikkinchi sondan katta bo'lishi kerak");
//   }
// }
// function calcMultiply(num1, num2) {
//   //   if (result.textContent === "") {
//   //     return (result.textContent = "");
//   //   }
//   return (result.textContent = num1 * num2);
// }
// function calcDivide(num1, num2) {
//   if (num1 > num2) {
//     return (result.textContent = num1 / num2);
//   } else if (num1 < num2) {
//     return (result.textContent =
//       "Birinchi son Ikkinchi sondan katta bo'lishi kerak");
//   }
// }
// function calcRes(num1, num2) {
//   if (num1 > num2) {
//     return (result.textContent = num1 % num2);
//   } else if (num1 < num2) {
//     return (result.textContent =
//       "Birinchi son Ikkinchi sondan katta bo'lishi kerak");
//   }
// }
// function changeResult() {
//   result.style.backgroundColor = "red";
//   result.style.color = "white";
//   result.style.fontSize = "50px";
//   result.style.borderRadius = "6px";
//   result.style.border = "none";
// }
