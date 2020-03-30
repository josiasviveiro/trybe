let basePyramid = 5;
let pyramid = "";
let asterisk = "1";
let emptySpace = "0";
let height = (basePyramid / 2) - 0.5;
let middleCollumn =  (basePyramid / 2) - 0.5;

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