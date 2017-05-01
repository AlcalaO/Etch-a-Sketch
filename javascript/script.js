$(document).ready(function () {
    var gridSize = 16;
    var $divGrid = $("#grid");

    for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
            var $divCell = $("<div class='cell'></div>");
            $divGrid.append($divCell);
        }
    }

    $(".cell").mouseenter(function () {
        $(this).toggleClass("cell");
        $(this).toggleClass("hoverCell");
    });
});
