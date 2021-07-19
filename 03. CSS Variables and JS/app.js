const inputs = Array.from(document.querySelectorAll(".controls input"));

function onChangeHandler(e) {
  const suffix = this.dataset.sizing || "";
  console.log(suffix);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("input", onChangeHandler));
