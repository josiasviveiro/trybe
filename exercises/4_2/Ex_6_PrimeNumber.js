function getRndInteger(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

let n = getRndInteger(0, 100);
let prime = 0;

for (let i = 2; i < n; i += 1){
    let division = n % i;
    if (division === 0){
        prime += 1;
    }    
} 

if (prime != 0){
    console.log("The number " + n + " is not prime");
} else {
    console.log("The number " + n + " is prime");
}
