#!/bin/bash

# Ex.6
read -p "Digite o caminho de um arquivo ou diretório:" FILE

if [ -f $FILE ]
    then
        echo "$FILE é um arquivo comum"
elif [ -d $FILE ]
    then
        echo "$FILE é um diretório"
else
    "$FILE é alguma outra coisa"
fi

ls -l $FILE
