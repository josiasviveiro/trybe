let n = 5;
let symbol = "*";
let inputLine = "";
let inputPosition = n;

for (let i = 0; i < n; i+=1) {
    for (let j = 0; j <= n; j+=1) {
        if (j < inputPosition) {
            inputLine += " ";
        } else {
            inputLine += symbol;
        }
    }
    inputPosition -= 1;
    console.log(inputLine);
    inputLine = "";
}