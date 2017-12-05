// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

/* var submitButton = document.getElementById("#submit_button");
var gridHeight = $("#input_height").val();
var gridWidth = $("#input_width").val();

function makeGrid() {
  for (row = 0; row <= gridHeight; row++) {
    $("#pixel_canvas").append("<tr>\"XX\"</tr>");
      for (col = 0; col <= gridWidth; col++) {
        $("#pixel_canvas").first().append("<tr>\"XX\"</tr>");
      }
  }
}

function cnsl() {
  console.log("THIS WORKS")
}

$("#submit_button").on("click", function() {
  $("submit_button").preventDefault();
  makeGrid();
}) */
var submitButton = $("#submit_button")
var gridHeight = $("#input_height").val();
var gridWidth = $("#input_width").val();
submitButton.on("click", function() {
  alert(gridHeight + "  -  " + gridWidth)
})
