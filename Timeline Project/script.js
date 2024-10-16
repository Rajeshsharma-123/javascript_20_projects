const timeline = document.getElementById("timeline");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let step = 1;

function mainCode() {
    circles.forEach((circle, index) => {
        if (index < step) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");
    timeline.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;

    prev.disabled = step === 1;
    next.disabled = step === circles.length;
}

next.addEventListener("click", () => {
    step++;
    if (step > circles.length) {
        step = circles.length;
    }
    mainCode();
});

prev.addEventListener("click", () => {
    step--;
    if (step < 1) {
        step = 1;
    }
    mainCode();
});
