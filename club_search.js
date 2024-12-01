document.getElementById("searchBar").addEventListener("input", Search());

function Search() {
  var input = document.getElementById("searchBar").value.toLowerCase();
  var clubDropdown = document.getElementById("dropdown-list");

  var clubs = clubDropdown.querySelectorAll("li");

  for (var i = 0; i < clubs.length; i++) {
    var clubName = clubs[i].querySelector("a").innerText.toLowerCase();
    if (clubName.substring(0, input.length) === input && input != "") {
      clubs[i].classList.add("visible");
    } else {
      clubs[i].classList.remove("visible");
    }
  }
}
