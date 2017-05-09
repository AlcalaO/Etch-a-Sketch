$(document).ready(function () {
    var cells = 16;
    var rainbowMode = false;
    var $divGrid = $("#grid");
    var $restartButton = $("#restartButton");
    var $clearButton = $("#clearButton");
    var $rainbowButton = $("#rainbowButton");
    var cellsSize = calculateCellsSize(cells, $divGrid.width());

    createGrid(cells, cellsSize);

    $(document).on("mouseenter", ".cell", function () {
        if (rainbowMode) {
            $(this).addClass("multicolorCell");
            $(this).css("background-color", generateRandomColor());
        } else {
            $(this).addClass("hoverCell");
            $(this).css("opacity", opacity($(this)));
        }
    });

    $rainbowButton.click(function () {
        if (rainbowMode) {
            rainbowMode = false;
        } else {
            rainbowMode = true;
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
        $divGrid.empty();
        createGrid(cells, cellsSize);
    });

    // calculate a equal size for each cell
    function calculateCellsSize (cells, gridSize) {
        var cellsSize = gridSize / cells;
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

    function opacity (cell) {
        var cellOpacity = cell.css("opacity");
        var opa = parseFloat(cellOpacity) + 0.1;
        return opa;
    }

});
