const elModalBtn = document.querySelector(".modal-btn");
const elModal = document.querySelector(".sitenav");
console.log(elModalBtn, elModal);

elModalBtn.addEventListener("click", function () {
  elModal.classList.toggle("sitenav-open");
  elModalBtn.classList.toggle("modal-btn__change");
});

elModal.addEventListener("click", function () {
  elModal.classList.toggle("sitenav-open");
  elModalBtn.classList.toggle("modal-btn__change");
});
