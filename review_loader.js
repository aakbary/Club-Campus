let reviewRatingArray = [];

function loadReviews() {
  var pagePath = document.getElementById("pagePath").getAttribute("data-path");
  fetch(pagePath)
    .then((response) => response.text())
    .then((data) => {
      var allReviews = data.split("~");
      var reviewSection = document.getElementById("reviews-section");

      for (var i = 0; i < allReviews.length - 1; i++) {
        review = allReviews[i].split("|");
        var name = review[0];
        var rating = review[1];
        reviewRatingArray.push(parseInt(rating));
        var writtenReview = review[2];

        var result = getReview(name, rating, writtenReview);
        result.classList.add("review");
        reviewSection.appendChild(result);
      }
      displayAvgReview();
    });
}

function getReview(nameContent, ratingValue, writtenReviewContent) {
  const currentReview = document.createElement("div");

  const name = document.createElement("h3");
  name.textContent = nameContent;

  const rating = document.createElement("div");
  rating.classList.add("starReview");
  switch (ratingValue) {
    case "1":
      rating.textContent = "★☆☆☆☆";
      break;
    case "2":
      rating.textContent = "★★☆☆☆";
      break;
    case "3":
      rating.textContent = "★★★☆☆";
      break;
    case "4":
      rating.textContent = "★★★★☆";
      break;
    case "5":
      rating.textContent = "★★★★★";
      break;
    default:
      break;
  }
  const review = document.createElement("p");
  review.textContent = writtenReviewContent;
  review.classList.add("rating");

  currentReview.appendChild(name);
  currentReview.appendChild(rating);
  currentReview.appendChild(review);

  return currentReview;
}

function displayAvgReview() {
  var reviewsHeader = document.getElementById("reviewsHeader");
  var avgRating = document.createElement("p");
  avgRating.classList.add("avgStar");
  avgRating.innerText = "★ " + calcAvgReview() + " ★";

  reviewsHeader.appendChild(avgRating);
}

function calcAvgReview() {
  let sum = 0;
  for (var i = 0; i < reviewRatingArray.length; i++) {
    sum += reviewRatingArray[i];
  }

  return sum / reviewRatingArray.length;
}

loadReviews();
