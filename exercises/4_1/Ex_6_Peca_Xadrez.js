let piece = "QueeN";
piece = piece.toLowerCase();

switch (piece) {
    case "king":
        console.log("Moves one square in any direction.");
        break;

    case "queen":
        console.log("Move any number of squares diagonally, horizontally and vertically");
        break;

    case "bishop":
        console.log("Move any number of squares diagonally.");
        break;

    case "tower":
        console.log("Move any number of squares horizontally or vertically.");
        break;

    case "knight":
        console.log("The moves forms an 'L'-shape.");
        break;

    case "pawn":
        console.log("Move forward to the unoccupied square in front of it on the same file.");
        break;

    default:
        console.log("Error");
}