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

  var clubName = document.getElementById("clubName").value;
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
  newText.textContent = "Your review is under examination";

  var section = document.getElementById("submit-review");

  section.innerHTML = "";

  section.appendChild(newHeading);
  section.appendChild(newText);
}
