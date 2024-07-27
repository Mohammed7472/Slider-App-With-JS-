let sliderImgs = Array.from(document.querySelectorAll(".slider-container img"));
let slideNumber = document.querySelector(".slide-number");
let indicatorsBox = document.querySelector(".indicators");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let list = document.createElement("ul");
indicatorsBox.appendChild(list);

for (let i = 1; i <= sliderImgs.length; i++) {
    let item = document.createElement("li");
    item.setAttribute("data-number", i);
    item.appendChild(document.createTextNode(i));
    list.appendChild(item);
}

let currentSlide = 1;

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;
list.querySelectorAll("li").forEach((li) =>
    li.addEventListener("click", function (e) {
        currentSlide = +e.target.getAttribute("data-number");
        checker();
    })
);

function prevSlide() {
    if (!prevBtn.classList.contains("disabled")) {
        currentSlide--;
    }
    checker();
}
function nextSlide() {
    if (!nextBtn.classList.contains("disabled")) {
        currentSlide++;
    }
    checker();
}

checker();

function checker() {
    slideNumber.textContent = `Slide # ${currentSlide} of ${sliderImgs.length}`;
    removeAllActive();
    sliderImgs[currentSlide - 1].classList.add("active");
    list.children[currentSlide - 1].classList.add("active");
    if (currentSlide === 1) {
        prevBtn.classList.add("disabled");
    } else {
        prevBtn.classList.remove("disabled");
    }
    if (currentSlide === sliderImgs.length) {
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.classList.remove("disabled");
    }
}
function removeAllActive() {
    sliderImgs.forEach((img) => img.classList.remove("active"));
    list.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
}
