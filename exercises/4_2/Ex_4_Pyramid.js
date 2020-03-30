let basePyramid = 9;
let pyramid = "";
let asterisk = "*";
let emptySpace = " ";
let height = (basePyramid / 2);
let middleCollumn = (basePyramid / 2);

if (basePyramid % 2 == 1) {
    height -= 0.5;
    middleCollumn -= 0.5;
    for (let currentLine = 0; currentLine <= height; currentLine += 1) {
        for (let currentCollumn = 0; currentCollumn < basePyramid; currentCollumn += 1) {
            if (middleCollumn - currentLine <= currentCollumn && middleCollumn + currentLine >= currentCollumn) {
                pyramid = pyramid + asterisk;
            } else {
                pyramid = pyramid + emptySpace;
            }
        }
        console.log(pyramid);
        pyramid = "";
    }
} else {
    for (let currentLine = 0; currentLine <= height; currentLine += 1) {
        for (let currentCollumn = 0; currentCollumn < basePyramid; currentCollumn += 1) {
            if (middleCollumn - currentLine <= currentCollumn && middleCollumn + currentLine > currentCollumn) {
                pyramid = pyramid + asterisk;
            } else {
                pyramid = pyramid + emptySpace;
            }
        }
        console.log(pyramid);
        pyramid = "";
    }
}