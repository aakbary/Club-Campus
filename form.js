var starRating = 0;

if (document.getElementById("resetButton") != null) {
  document.getElementById("resetButton").addEventListener("click", handleReset);
}

if (document.getElementById("submitButton") != null) {
  document
    .getElementById("submitButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      handleSubmit();
    });
}

var starElements = document.getElementsByClassName("star");
for (var i = 0; i < starElements.length; i++) {
  if (starElements != null) {
    starElements[i].addEventListener("click", function (event) {
      handleButton(event);
    });
  }
}

function handleButton(event) {
  let clickedButton = event.target;
  const stars = document.getElementsByClassName("star");

  for (let star of stars) {
    if (star.classList.contains("selected")) {
      star.classList.remove("selected");
    }
  }

  clickedButton.classList.add("selected");

  starRating = clickedButton.value;
}

function handleSubmit() {
  if (
    starRating < 1 ||
    document.getElementById("writtenReview").value == "" ||
    document.getElementById("writtenReview").value.length > 500
  ) {
    var errorStr = "";
    if (starRating < 1) {
      errorStr += "Please Select a Star Rating";
    }
    if (document.getElementById("writtenReview").value == "") {
      errorStr += "\n Please enter Review in text box";
    }
    if (document.getElementById("writtenReview").value.length > 500) {
      errorStr += "\n Reivew Exceeds 500 Character limit";
    }

    alert(errorStr);
    return;
  }

  var clubName = document.getElementById("clubName").innerText;
  var name = document.getElementById("name").value;

  if (name == "") {
    name = "Anonymous";
  }

  var writtenReivew = document.getElementById("writtenReview").value;

  postReivew(clubName, name, starRating, writtenReivew);

  closeForm();
}

function postReivew(clubName, name, rating, writtenReivew) {
  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSf9xBLr7gIjX3eI-kiqIm81CwcPNNdtOH51leYR-0KUrQPgjg/formResponse";

  const formData = new URLSearchParams();
  formData.append("entry.609640095", clubName);
  formData.append("entry.330908542", name);
  formData.append("entry.1197122180", rating);
  formData.append("entry.692624728", writtenReivew);

  fetch(formURL, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });
}

function closeForm() {
  var newHeading = document.createElement("h2");
  newHeading.textContent = "Thanks For You Reivew!";

  var newText = document.createElement("p");
  newText.textContent =
    "By submitting a review, you agree to share feedback that is respectful and free from inappropriate language, harassment, or any content that promotes bullying.";

  var section = document.getElementById("submit-review");

  section.innerHTML = "";

  section.appendChild(newHeading);
  section.appendChild(newText);
}

function handleReset() {
  const stars = document.getElementsByClassName("star");

  for (let star of stars) {
    if (star.classList.contains("selected")) {
      star.classList.remove("selected");
    }
  }
  starRating = 0;
  document.getElementById("name").value = "";
  document.getElementById("writtenReview").value = "";
}
