const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".testimonial");
const dotsContainer = document.getElementById("dotsContainer");

let index = 0;

function getVisibleCount() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function getSlideWidth() {
    return slides[0].offsetWidth + 20;
}

function updateSlidePosition() {
    const slideWidth = getSlideWidth();
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    updateDots();
}

function moveToSlide(i) {
    index = i;
    updateSlidePosition();
}

function createDots() {
    dotsContainer.innerHTML = "";
    const visible = getVisibleCount();
    const dotCount = slides.length - visible + 1;
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    }
    updateDots();
}

function updateDots() {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
}

function moveSlide(step) {
    const visible = getVisibleCount();
    const maxIndex = slides.length - visible;
    index += step;
    if (index > maxIndex) index = 0;
    if (index < 0) index = maxIndex;
    updateSlidePosition();
}

// Авто-прокрутка
setInterval(() => moveSlide(1), 5000);

// Свайп
let startX = 0;
let endX = 0;

track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

track.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
        moveSlide(diff > 0 ? 1 : -1);
    }
});

// Инициализация
window.addEventListener("resize", () => {
    createDots();
    updateSlidePosition();
});

createDots();
updateSlidePosition();