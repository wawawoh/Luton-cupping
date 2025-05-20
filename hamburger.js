const cross = document.querySelector(".cross");

const burger = document.querySelector(".burger");
const list = document.querySelector(".nav-list");
const grey = document.querySelector(".main-content-wrapper");

burger.addEventListener("click", () => {
  list.classList.add("active");
  grey.classList.add("active");
});

cross.addEventListener("click", () => {
  list.classList.remove("active");
  grey.classList.remove("active");
});
