let count = 0;

const value = document.getElementById("count");
const buttons = document.querySelectorAll(".btn");

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

    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "currentColor";
    }

    value.textContent = count;
  });
});
