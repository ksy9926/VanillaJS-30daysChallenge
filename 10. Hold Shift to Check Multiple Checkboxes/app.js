const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(this);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("starting to check them inbetween");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

Array.from(checkboxes).forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
