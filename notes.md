/*
        overview
    this is a time limited project primary goal is to produce a Minimum Viable Project

        MVP- requirements
            Basic functionality
                single-player
                grid size
                tile behavior
                    click to reveal
                    if bomb 
                    if no bomb
                    near by bomb count
                game outcome
                    win/loss behavior
                start button

        icebox features
            bomb count
            flag count
            timer
            audio effect
            video effect
            animations
            difficulty



win con
dont hit bomb
loop for empty squeres if no open squeres = win


flood logic/numbers
click = check for bomb = reveal 
check empty adjacent



click tile
check for mine; mine = false
reveal tile


guards
restore tile color




== get adjacent funciton ==
    1. The grid is represented as a 1D array, but we treat it as if it were a 2D grid (like a matrix) so that each index has a row and column position. In this example, we're assuming the grid is square (the width and height are the same), which means the total number of tiles is a perfect square e.g., 9 tiles make a 3x3 grid, 16 tiles make a 4x4 grid

    2.const width = Math.sqrt(boardEls.length); // determine width
    3. Calculate the Row and Column of the Current Tile:
        const row = Math.floor(idx / width);
        const col = idx % width;

       > row is the integer division of idx by width. This gives us the row number (starting from 0). For example, if idx = 5 and width = 3, the result will be row = 1 (i.e., the second row).
       >col is the remainder of the division (idx % width), which gives us the column number (starting from 0). For example, if idx = 5 and width = 3, the result will be col = 2 (i.e., the third column).


    4.Loop Through Neighboring Positions: The function then loops through all positions around the current tile, including diagonals. It checks every combination of row (r) and column (c) from -1 to +1, except the center tile itself (r === 0 && c === 0).

    >The r and c variables represent relative row and column changes. By iterating over r = -1, 0, +1 and c = -1, 0, +1, you get all 8 neighbors around the center (including diagonals). For example:

    r = -1, c = 0 is the tile above the current tile.

    r = 1, c = 1 is the tile diagonally below and to the right.

    r = 0, c = -1 is the tile to the left.

    5. Check if Neighbor is Within Bounds:

    const newRow = row + r;
    const newCol = col + c;
    if (newRow >= 0 && newRow < width && newCol >= 0 && newCol < width) {
    neighbors.push(newRow * width + newCol);
    }

        For each neighbor, we calculate its new row (newRow = row + r) and column (newCol = col + c).

    We then check if this new row and column are within bounds of the grid (i.e., they are not outside the grid's limits).

    newRow >= 0 && newRow < width ensures the row is valid.

    newCol >= 0 && newCol < width ensures the column is valid.

    If the new row and column are valid, we calculate the 1D index of the neighbor (newRow * width + newCol) and add it to the neighbors array.
*/