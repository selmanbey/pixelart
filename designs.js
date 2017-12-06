$(document).ready(function () {
    var submitButton = $("#submit_button");

    function makeGrid() {
      var gridHeight = $("#input_height").val();
      var gridWidth = $("#input_width").val();

      for (row = 0; row < gridHeight; row++) {
        $("#pixel_canvas").append("<tr></tr>");
          for (col = 0; col < gridWidth; col++) {
            $("#pixel_canvas").first().append("<td></td>");
          }
      }
    };

    /* DEFAULT CANVAS */
    for (row = 0; row <= 30; row++) {
      $("#pixel_canvas").append("<tr></tr>");
        for (col = 0; col <= 30; col++) {
          $("#pixel_canvas").first().append("<td></td>");
        }
    };

    submitButton.on("click", function(e) {
      e.preventDefault();

      if ($("#input_height").val() <= 50 && $("#input_width").val() <= 50) {
        $("table").find("*").remove();
        makeGrid();
        // $("#sizePicker").remove();
        // $("#gridHeader").remove();
      } else {
        alert("The grid size should not exceed 50 cell in either directions!")
      }
    });


    $("table").delegate("td", "mouseover", function () {
        var color = $("#colorPicker").val();
        $(this).css("background-color", color)
      });
})
