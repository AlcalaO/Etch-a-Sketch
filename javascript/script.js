$(document).ready(function () {
    var cells = 16;
    var $divGrid = $("#grid");
    var $buttonRestart = $("#restartButton");
    // $buttonRestart.bind("click", restart());

    // createGrid(cells, $divGrid.width());
    for (var i = 0; i < cells; i++) {
        for (var j = 0; j < cells; j++) {
            var $divCell = $("<div class='cell'></div>");
            $divGrid.append($divCell);
        }
    }

    $divCell.mouseenter(function () {
        $(this).toggleClass("hoverCell");
    });

    $(".createdCell").bind('hover', changeClass($(this)));

    funtcion changeClass(element) {
        element.toggleClass("hoverCell");
    }

    $buttonRestart.click(function restart() {
        $divGrid.empty();
        cells = prompt("Enter a new size for the grid:");
        createGrid(cells,calculateCellsSize(cells, $divGrid.width()));
    });

    function calculateCellsSize(cells, gridSize) {
        var cellsSize = gridSize / cells;

        return cellsSize;
    }

    function createGrid (cells, cellsSize) {
        $divGrid.css("grid-template-columns", "repeat("+cells+", "+cellsSize+"px)");
        var cellMargin = cellsSize * 0.15;
        for (var i = 0; i < cells; i++) {
            for (var j = 0; j < cells; j++) {
                var $divCreatedCell = $("<div class='cell'></div>");
                $divCell.width(cellsSize+"px");
                $divCell.height(cellsSize+"px");
                $divGrid.append($divCell);
            }
        }
        $divGrid.css("display", "grid");
    }

});
