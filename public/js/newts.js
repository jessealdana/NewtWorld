// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-level").on("click", function(event) {
    var id = $(this).data("id");
    var newLevel = $(this).data("newlevel");

    var newNewbState = {
      newb: newLevel
    };

    // Send the PUT request.
    $.ajax("/api/add/newts/" + id, {
      type: "PUT",
      data: newNewbState
    }).then(
      function() {
        console.log("changed level to", newLevel);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newNewt = {
      name: $("#ne").val().trim(),
      role: $("#ro").val().trim(),
      age: $("#ag").val().trim(),
      xp: $("#xp").val().trim(),
      newb: $("[name=newb]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/add/newts", {
      type: "POST",
      data: newNewt
    }).then(
      function() {
        console.log("created new newt");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-newt").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/add/newts/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted newt", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

// var mainEl = document.getElementById("main");
// var brink = newts.length;

// function grimWombat() {
//   if (brink === 0) {
//     var imgEl = document.createElement("img");

//     imgEl.setAttribute("src", url("https://vtfishandwildlife.com/sites/fishandwildlife/files/images/Learn%20More/VT%20Critters/red_eft.jpg"));
//     mainEl.appendChild(imgEl);
//   }
// }