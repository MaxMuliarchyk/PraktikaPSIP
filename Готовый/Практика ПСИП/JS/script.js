const scrollToTopButton = document.getElementById("scrollToTop");

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

window.addEventListener("scroll", scrollFunction);
const scrollToTop = () => {
  const distanceFromTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (distanceFromTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, distanceFromTop - distanceFromTop / 10);
  }
};

scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};

const modalWindow = document.querySelector(".modal");
const buttonModal = document.querySelector(".project-item-photo");
var player = document.getElementById("Youtube");

buttonModal.addEventListener("click", () => {
  modalWindow.classList.add("actives");
});

modalWindow.addEventListener("click", () => {
  modalWindow.classList.remove("actives");
});

const slides = document.querySelectorAll(".slider");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("activess");
  }
  slides[n].classList.add("activess");
};

const prepareCurrentSlide = (ind) => {
  activeSlide(index);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

setInterval(nextSlide, 4000);

const footerButton = document.querySelector(".footer-button");

footerButton.addEventListener("click", () => {
  alert("Через минуту вам позвонят");
});

let tooltipElem;

document.onmouseover = function (event) {
  let target = event.target;

  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // ...создадим элемент для подсказки

  tooltipElem = document.createElement("div");
  tooltipElem.className = "tooltip";
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + "px";
  tooltipElem.style.top = top + "px";
};

document.onmouseout = function (e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};

var modals = document.getElementById("myModal");

// Получите изображение и вставьте его внутрь модального - используйте его текст "alt" в качестве подписи
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.addEventListener("click", () => {
  modals.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
});

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.addEventListener("click", () => {
  modals.style.display = "none";
});
