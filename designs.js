$(document).ready(function () {

    var submitButton = $("#submit_button");
    var mousepressed = false;

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

    // DEFAULT CANVAS
    if (window.matchMedia("(max-width: 438px)").matches) {
      for (row = 0; row <= 15; row++) {
        $("#pixel_canvas").append("<tr></tr>");
          for (col = 0; col <= 15; col++) {
            $("#pixel_canvas").first().append("<td></td>");
          }
      };
    } else {
      for (row = 0; row <= 22; row++) {
        $("#pixel_canvas").append("<tr></tr>");
          for (col = 0; col <= 22; col++) {
            $("#pixel_canvas").first().append("<td></td>");
          }
      };
    }

    // RE-ARRANGING CANVAS
    submitButton.on("click", function(e) {
      e.preventDefault();

      if ($("#input_height").val() <= 30 && $("#input_width").val() <= 30 &&
          $("#input_height").val() > 0 && $("#input_width").val() > 0) {
        $("table").find("*").remove();
        makeGrid();
      } else {
        alert("The grid size should not be 0 or exceed 30 cell in either directions!")
      }
    });

    // PAINTING ON CANVAS
    $("table").delegate("td", "mousedown", function () {
        mousepressed = true;
        var color = $("#colorPicker").val();
        if(mousepressed) {
          if ($(this).css("background-color") != 'rgb(255, 255, 255)') {
            $(this).css("background-color", "white");
          } else {
            $(this).css("background-color", color);
          }
        }
      });

    $("table").delegate("td", "mouseup", function () {
        mousepressed = false;
      });

    $("table").delegate("td", "mouseover", function () {
        var color = $("#colorPicker").val();
        if(mousepressed) {
          if ($(this).css("background-color") != 'rgb(255, 255, 255)') {
            $(this).css("background-color", "white");
          } else {
            $(this).css("background-color", color);
          }
        }

      });

})
