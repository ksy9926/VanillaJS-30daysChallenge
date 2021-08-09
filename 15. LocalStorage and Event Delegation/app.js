const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  console.log(item);
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));

  // 인풋 입력한 값 제출 후 다시 비우기
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map(
      (plate, i) =>
        `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
          plate.done ? "checked" : ""
        } />
          <label for="item${i}">${plate.text}</label>
        </li>
        `
    )
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// 첫 로딩시 로컬스토리지의 내용을 띄우기 위해 한번 실행
addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

const checkBoxes = document.querySelectorAll("input");

populateList(items, itemsList);
