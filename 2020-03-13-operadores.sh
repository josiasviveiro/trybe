#!/bin/bash

read -p "Digite um numero: " num1
read -p "Digite um segundo numero: " num2

echo "Soma: " $[num1 + num2]
echo "Subtracao:"  $[num1 - num2]
echo "Multiplicacao: " $[num1 * num2]
echo "Divisao(sem casa decimal): " $[num1 / num2]
echo "scale=2; $num1/ $num2" | bc

