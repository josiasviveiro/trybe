#!/bin/bash

# Ex.1
#echo "Shell Script é demais!"

# Ex.2
#PHRASE="Shell Script com variáveis é demais!"
#echo $PHRASE

# Ex.3
# HOSTNAME=$(hostname)
# echo "Este script está rodando no computador: $HOSTNAME"

# Ex.4
#FILE="/home/josias/script.sh"
#if [ -e "$FILE" ]
#    then
#        echo "O caminho $FILE está habilitado!"
#fi

#if [ -w "$FILE" ]
#    then
#        echo "Você tem permissão para editar $FILE"
#    else
#        echo "Você NÃO foi autorizado a editar $FILE"
#fi

# Ex.5
#PHRASES="shell script usando estrutura repetição for terminal"
#for word in $PHRASES
#    do
#        echo $word
#    done

# Ex.6
#read -p "Digite o caminho de um arquivo ou diretório:" FILE

#if [ -f $FILE ]
#    then
#        echo "$FILE é um arquivo comum"
#elif [ -d $FILE ]
#    then
#        echo "$FILE é um diretório"
#else
#    "$FILE é alguma outra coisa"
#fi

#ls -l $FILE

# Ex.7
#FILE=$1

#if [ -f "$FILE" ]
#  then
#    echo "$FILE é um arquivo comum"
#elif [ -d "$FILE" ]
#  then
#    echo "$FILE é um diretório"
#else
#    echo "$FILE é alguma outra coisa"
#fi
#ls -l $FILE
  
# Ex.8
#FILES=$@

#for FILE in $FILES
#  do
#    if [ -f "$FILE" ]
#      then
#        echo "$FILE é um arquivo comum"
#    elif [ -d "$FILE" ]
#      then
#        echo "$FILE é um diretório"
#    else
#        echo "$FILE é alguma outra coisa"
#    fi
#    ls -l $FILE
#  done
  
# Ex.9
#DIRECTORY=$1
#if [ -d "$DIRECTORY" ]
#  then
#    FILES=`ls -l $DIRECTORY | wc -l`
#    echo "O $DIRECTORY tem $FILES arquivos."
#else
#    echo "O argumento $DIRECTORY não é um diretório!"
#fi
  
# Ex.10
#DAY=$(date +%F)

#for FILE in `ls *.png`
# do
#    mv $FILE ${DAY}-${FILE}
# done

 # Ex.11
DIRECTORY=$1
EXTENSION=$2

DAY=$(date +%F)

cd $DIRECTORY

for FILE in `ls *.$EXTENSION`
 do
    echo "Renomeando $FILE para ${DAY}-${FILE}"
    mv $FILE ${DAY}-${FILE}
 done
