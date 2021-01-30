var newbInput = document.querySelector("#name");
var newbForm = document.querySelector("#newb-form");
var newbList = document.querySelector("#newb-list");
var newbCountSpan = document.querySelector("#newb-count");

var newts = ["The Newtalorian", "Sir Newtalot", "Joe Newten"];

renderNewts();

function renderNewts() {
  newbList.innerHTML = "";
  newbCountSpan.textContent = newts.length;

  for (var i = 0; i < newts.length; i++) {
    var newt = newts[i];

    var li = document.createElement("li");
    li.textContent = newt;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Kick that Newb";

    li.appendChild(button);
    newbList.appendChild(li);
  }
}

newbForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var newbText = newbInput.value.trim();

  if (newbText === "") {
    return;
  }

  newts.push(newbText);
  newbInput.value = "";

  renderNewts();
});

newbList.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("button") === true){
    var index = element.parentElement.getAttribute("data-index");
    newts.splice(index, 1);

    renderNewts();
  }
});