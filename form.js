var starRating = 0;

function handleButton(buttonIndex) {
  const stars = document.getElementsByClassName("star");

  for (let star of stars) {
    if (star.classList.contains("selected")) {
      star.classList.remove("selected");
    }
  }

  var clickedButton = document.querySelector(
    `.starRating button:nth-child(${buttonIndex})`
  );

  clickedButton.classList.add("selected");

  starRating = clickedButton.value;
}

function handleSubmit() {
  if (starRating < 1 || document.getElementById("writtenReview").value == "") {
    alert("Invalid Entry");
    return;
  }
  var reviewSection = document.getElementById("reviews-section");
  var result = newReview();
  result.classList.add("review");
  reviewSection.appendChild(result);
}

function newReview() {
  const newReview = document.createElement("div");

  const name = document.createElement("h3");
  name.textContent = "Anonymous";

  const rating = document.createElement("div");
  rating.textContent = starRating;

  var reviewText = document.getElementById("writtenReview").value;
  const review = document.createElement("p");
  review.textContent = reviewText;
  review.classList.add("rating");

  newReview.appendChild(name);
  newReview.appendChild(rating);
  newReview.appendChild(review);

  return newReview;
}
