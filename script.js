const inputField = document.getElementById("input-field");
const outputField = document.querySelector(".output-field");
const buttons = document.querySelectorAll("button");

inputField.addEventListener("keyup", function () {
  outputField.innerHTML = inputField.value;
});

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("uppercase"))
      outputField.innerHTML = inputField.value.toUpperCase();
    else if (button.classList.contains("lowercase"))
      outputField.innerHTML = inputField.value.toLowerCase();
    else if (button.classList.contains("capitalize"))
      outputField.innerHTML =
        inputField.value.charAt(0).toUpperCase() + inputField.value.slice(1);
    else if (button.classList.contains("bold"))
      outputField.style.fontWeight =
        outputField.style.fontWeight == "bold" ? "normal" : "bold";
    else if (button.classList.contains("italic"))
      outputField.style.fontStyle =
        outputField.style.fontStyle == "italic" ? "normal" : "italic";
    else if (button.classList.contains("underline"))
      outputField.style.textDecoration =
        outputField.style.textDecoration == "underline" ? "none" : "underline";
  });
});
