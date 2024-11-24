function handleButton(value) {
  var clickedButton = document.querySelector(
    `.starRating button:nth-child(${value})`
  );

  var rating = clickedButton.value;

  if (clickedButton.classList.contains("selected")) {
    clickedButton.classList.remove("selected");
  }

  clickedButton.classList.add("selected");
}
