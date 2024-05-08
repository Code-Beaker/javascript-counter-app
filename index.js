let count = 0;

const value = document.getElementById("count");
const buttons = document.querySelectorAll(".btn");
const square = document.getElementById("square");
const squareRoot = document.getElementById("squareRoot");

buttons.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    const sq = Math.pow(count, 2);
    const root = Math.sqrt(count);
    square.textContent = sq;
    squareRoot.textContent = root;

    if (count < 0) {
      value.style.color = "red";
      squareRoot.style.display = "none";
      document.getElementById("error").style.display = "block";
    } else if (count > 0) {
      value.style.color = "green";
      squareRoot.style.display = "block";
      document.getElementById("error").style.display = "none";
    } else {
      value.style.color = "currentColor";
      document.getElementById("error").style.display = "none";
    }

    value.textContent = count;
  });
});
