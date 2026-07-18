const tableForm = document.querySelector("#tableForm");
const numberInput = document.querySelector("#number");
const tableBody = document.querySelector("#tableBody");

function generateTable() {
  const number = Number(numberInput.value);
  if (!Number.isFinite(number)) return;

  tableBody.replaceChildren();
  for (let multiplier = 1; multiplier <= 9; multiplier += 1) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${number} x ${multiplier}</td><td>${number * multiplier}</td>`;
    tableBody.append(row);
  }
}

tableForm.addEventListener("submit", (event) => {
  event.preventDefault();
  generateTable();
});

generateTable();
