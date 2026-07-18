const scores = [45, 82, 91, 60, 77, 33];
const scoreList = document.querySelector("#scoreList");
const summary = document.querySelector("#summary");
const scoreForm = document.querySelector("#scoreForm");
const newScore = document.querySelector("#newScore");

function scoreColor(score) {
  return score >= 90 ? "green" : score >= 50 ? "orange" : "red";
}

function renderScores() {
  scoreList.replaceChildren(
    ...scores.map((score) => {
      const item = document.createElement("li");
      item.textContent = score;
      item.className = scoreColor(score);
      return item;
    }),
  );

  const highest = Math.max(...scores);
  const lowest = Math.min(...scores);
  const average =
    scores.reduce((total, score) => total + score, 0) / scores.length;
  summary.textContent = `Highest: ${highest} | Lowest: ${lowest} | Average: ${average.toFixed(1)}`;
}

scoreForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const score = Number(newScore.value);
  if (!Number.isFinite(score) || score < 0 || score > 100) return;
  scores.push(score);
  newScore.value = "";
  renderScores();
});

renderScores();
