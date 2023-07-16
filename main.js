const stepsObj = document.getElementsByClassName("step");
const steps = Array.from(stepsObj).slice(1);
let selected;

steps.forEach((step) => {
  step.addEventListener("click", () => {
    selected = true;
    steps.forEach((s) => {
      s.style.color = "hsl(217, 12%, 63%)";
      s.style.backgroundColor = "hsl(213, 19%, 18%)";
    });
    step.style.backgroundColor = "hsl(217, 12%, 63%)";
    step.style.color = "white";
    window.localStorage.setItem("rate", step.innerHTML);
  });
});

function navigate() {
  if (selected) {
    location.assign("./thank-you.html");
  } else {
    alert("you have to select a value before submiting");
  }
}
