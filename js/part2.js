// Task 2: find a paragraph and change its text on click.
const changeableText = document.getElementById("changeable-text");
const changeTextButton = document.getElementById("change-text");

function changeText() {
  changeableText.textContent = "The paragraph was changed with JavaScript!";
}

changeTextButton.addEventListener("click", changeText);

// Task 3: toggle styles so repeated clicks also have a visible effect.
const styleBox = document.getElementById("style-box");
const changeBackgroundButton = document.getElementById("change-background");
const changeFontButton = document.getElementById("change-font");
let hasColoredBackground = false;
let hasLargeFont = false;

function changeBackground() {
  hasColoredBackground = !hasColoredBackground;
  styleBox.style.backgroundColor = hasColoredBackground ? "#fff0a6" : "#eee";
}

function changeFontSize() {
  hasLargeFont = !hasLargeFont;
  styleBox.style.fontSize = hasLargeFont ? "24px" : "16px";
}

changeBackgroundButton.addEventListener("click", changeBackground);
changeFontButton.addEventListener("click", changeFontSize);

// Task 4: create a new li or remove the last existing li.
const itemList = document.getElementById("item-list");
const addItemButton = document.getElementById("add-item");
const removeItemButton = document.getElementById("remove-item");
let nextItemNumber = 3;

function addItem() {
  const item = document.createElement("li");
  item.textContent = "Item " + nextItemNumber;
  itemList.appendChild(item);
  nextItemNumber += 1;
}

function removeItem() {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    lastItem.remove();
  }
}

addItemButton.addEventListener("click", addItem);
removeItemButton.addEventListener("click", removeItem);
