// const fs = require("fs");
// const data = fs.readFileSync(
//   "./Club-Compass/club-reviews/chess_club.txt",
//   "utf8"
// );

function loadReviews() {
  fetch("./club-reviews/chess_club.txt")
    .then((response) => response.text())
    .then((data) => {
      var allReviews = data.split("~");
      var reviewSection = document.getElementById("reviews-section");

      for (var i = 0; i < allReviews.length - 1; i++) {
        review = allReviews[i].split("|");
        var name = review[0];
        var rating = review[1];
        var writtenReview = review[2];

        var result = getReview(name, rating, writtenReview);
        result.classList.add("review");
        reviewSection.appendChild(result);
      }
    });
}

function getReview(nameContent, ratingValue, writtenReviewContent) {
  const currentReview = document.createElement("div");

  const name = document.createElement("h3");
  name.textContent = nameContent;

  const rating = document.createElement("div");
  rating.textContent = ratingValue;

  const review = document.createElement("p");
  review.textContent = writtenReviewContent;
  review.classList.add("rating");

  currentReview.appendChild(name);
  currentReview.appendChild(rating);
  currentReview.appendChild(review);

  return currentReview;
}

loadReviews();
