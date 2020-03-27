let n = 5;

if (n > 1) {
    for (let i = 0; i < n; i+=1) {        
        let matrix = "";
        for (let j = 0; j < n; j+=1) {
            matrix += "*";
        }
        console.log(matrix);        
    }
} else {
    console.log("Error: The number is 1, or less than 1.")
}
