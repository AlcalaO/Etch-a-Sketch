$(document).ready(function () {
    var gridSize = 16;
    var $divGrid = $("#grid");

    for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
            var $divCell = $("<div class='cell'></div>");
            $divCell.css("display", "inline-block");
            $divCell.width("40px");
            $divCell.height("40px");
            $divCell.css("margin", "16px");
            $divCell.css("background-color", "blue");
            $divGrid.append($divCell);
        }
    }

    $("#cell").mouseenter(function () {
        $(this).toggleClass()
    });
});
