let idList = 0;

function clearInput() {
  document.getElementById("itemInput").value = "";
}

function enterItem(e) {
  const list = document.getElementById("list");
  const oldHTML = list.innerHTML;
  const itemValue = document.getElementById("itemInput").value;

  if (e.keyCode === 13) {
    if (itemValue === "") {
      alert("No podes agregar un elemento vacio!");
    } else {
      list.innerHTML = `${oldHTML} <li onclick="remove(${idList})" id="${idList}">${
        document.getElementById("itemInput").value
      }</li>`;
      idList++;
      clearInput();
    }
  }
}

function addItemHTML() {
  const list = document.getElementById("list");
  const oldHTML = list.innerHTML;
  const itemValue = document.getElementById("itemInput").value;

  if (itemValue === "") {
    alert("No podes agregar un elemento vacio!");
  } else {
    list.innerHTML = `${oldHTML} <li onclick="remove(${idList})" id="${idList}">${
      document.getElementById("itemInput").value
    }</li>`;
    idList++;
    clearInput();
  }
}

function remove(idList) {
  const liItem = document.getElementById(idList);
  liItem.remove();
}
