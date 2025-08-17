const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

function updateSlider() {
  const imageHeight = slider.children[0].clientHeight + 10; // image + margin
  slider.style.transform = `translateY(-${index * imageHeight}px)`;
}

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

nextBtn.addEventListener("click", () => {
  if (index < slider.children.length - 1) {
    index++;
    updateSlider();
  }
});

// Πληκτρολόγιο
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    prevBtn.click();
  } else if (e.key === "ArrowDown") {
    nextBtn.click();
  }
});

// Ροδέλα ποντικιού
slider.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    nextBtn.click();
  } else {
    prevBtn.click();
  }
});
