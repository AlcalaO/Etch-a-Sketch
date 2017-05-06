$(document).ready(function () {
    var cells = 16;
    var $divGrid = $("#grid");
    var $buttonRestart = $("#restartButton");
    var cellsSize = calculateCellsSize(cells, $divGrid.width());

    createGrid(cells, cellsSize);

    $(document).on("mouseenter", ".cell", function () {
        $(this).addClass("hoverCell");
    });

    $buttonRestart.click(function restart() {
        $divGrid.empty();
        cells = prompt("Enter a new size for the grid:");
        createGrid(cells,calculateCellsSize(cells, $divGrid.width()));
    });

    // calculate a equal size for each cell
    function calculateCellsSize(cells, gridSize) {
        var cellsSize = gridSize / cells;
        return cellsSize;
    }

    function createGrid (cells, cellsSize) {
        // create a grid layout for all the cells to enter.
        $divGrid.css("grid-template-columns", "repeat("+cells+", "
                +cellsSize+"px)");

        var cellMargin = cellsSize * 0.15;
        for (var i = 0; i < cells; i++) {
            for (var j = 0; j < cells; j++) {
                var $divCell = $("<div class='cell'></div>");
                $divCell.width(cellsSize+"px");
                $divCell.height(cellsSize+"px");
                $divGrid.append($divCell);
            }
        }
        $divGrid.css("display", "grid");
    }

});
