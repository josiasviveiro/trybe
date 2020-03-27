let aliquotaINSS;
let aliquotaIR;

let grossSalary = 3500.00;

if(grossSalary <= 1556.94) {
    aliquotaINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    aliquotaINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
    aliquotaINSS = grossSalary * 0.11
} else {
    aliquotaINSS = 570.88;
}

let baseSalary = grossSalary - aliquotaINSS;

if (baseSalary <= 1903.98) {
    aliquotaIR = 0;
} else if (baseSalary <= 2826.65) {
    aliquotaIR = baseSalary *0.075 - 142.80;
} else if (baseSalary <=4664.68) {
    aliquotaIR = baseSalary * 0.225 - 636.13
} else {
    aliquotaIR = baseSalary * 0.275 - 869.36;
}

console.log("Salario: " + (baseSalary - aliquotaIR));
