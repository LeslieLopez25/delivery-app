window.menuItems = 0;

const clothingItems = document.getElementsByClassName("clothing");

const clothingTotal = document.getElementById("price");

function callFeeAPI({ target }) {
  if (target.className === "clothing" && target.checked) {
    window.menuItems += parseInt(target.value);
  } else if (target.className === "clothing" && !target.checked) {
    window.menuItems -= parseInt(target.value);
  }

  clothingTotal.textContent = `$${(window.menuItems / 100).toFixed(2)}`;
}

for (const clothing of clothingItems) {
  clothing.addEventListener("click", callFeeAPI);
}
