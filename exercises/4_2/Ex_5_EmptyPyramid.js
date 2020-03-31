let basePyramid = 11;
let pyramid = "";
let asterisk = "*";
let emptySpace = " ";
let height = (basePyramid / 2) - 0.5;
let middleCollumn = (basePyramid / 2) - 0.5;

for (let currentLine = 0; currentLine <= height; currentLine += 1) {
    for (let currentCollumn = 0; currentCollumn < basePyramid; currentCollumn += 1) {
        if (middleCollumn - currentLine === currentCollumn || middleCollumn + currentLine === currentCollumn || currentLine === height) {
            pyramid = pyramid + asterisk;
        } else {
            pyramid = pyramid + emptySpace;
        }

    }
    console.log(pyramid);
    pyramid = "";
}