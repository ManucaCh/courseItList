function clearInput() {
  document.getElementById("itemInput").value = "";
}

function addItem() {
  const inputItem = document.getElementById("itemInput");
  console.log(inputItem.value);
  clearInput();
}

function enterItem(e) {
  const list = document.getElementById("list");
  const oldHTML = list.innerHTML;
  if (e.keyCode === 13) {
    list.innerHTML = `${oldHTML} <li>${
      document.getElementById("itemInput").value
    }</li>`;
    clearInput();
  }
}

function addItemHTML() {
  const list = document.getElementById("list");
  const oldHTML = list.innerHTML;

  list.innerHTML = `${oldHTML} <li>${
    document.getElementById("itemInput").value
  }</li>`;
  clearInput();
}
