const minusSpan = document.querySelector(".minus");
const numberSpan = document.querySelector(".number");
const plusSpan = document.querySelector(".plus");

let a = 1;

minusSpan.addEventListener("click", () => {
  a--;
  numberSpan.innerHTML = a;
});

plusSpan.addEventListener("click", () => {
  a++;
  numberSpan.innerHTML = a;
});
