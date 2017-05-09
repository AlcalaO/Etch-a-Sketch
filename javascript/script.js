$(document).ready(function () {
    var cells = 16;
    var rainbowMode = false;
    var $divGrid = $("#grid");
    var $restartButton = $("#restartButton");
    var $clearButton = $("#clearButton");
    var cellsSize = calculateCellsSize(cells, $divGrid.width());

    createGrid(cells, cellsSize);

    $(document).on("mouseenter", ".cell", function () {
        $(this).addClass("multicolorCell");
        if (rainbowMode) {
            $(this).css("background-color", generateRandomColor());
        } else {
            opaqueCell($(this));
        }
    });

    $restartButton.click(function restart() {
        $divGrid.empty();
        cells = prompt("Enter a new size for the grid:");
        createGrid(cells,calculateCellsSize(cells, $divGrid.width()));
        $divGrid.addClass(".cell");
        $divGrid.toggleClass(".cell");
    });

    $clearButton.click(function clear() {
        createGrid(cells, cellsSize);
    });

    // calculate a equal size for each cell
    function calculateCellsSize (cells, gridSize) {
        var cellsSi200ze = gridSize / cells;
        return cellsSize;
    }

    function createGrid (cells, cellsSize) {
        // create a grid layout for all the cells to enter.
        $divGrid.css("grid-template-columns", "repeat("+cells+", "
                +cellsSize+"px)");

        var cellMargin = cellsSize * 0.15;
        var $oo = $("body");
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

    function generateRandomColor () {
        var letters = '0123456789ABCDEF';
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function opaqueCell (cell) {
        var opacity = cell.opacity() + 0.1;
        cell.css("opacity", opacity);
    }

});
