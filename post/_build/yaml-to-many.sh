#!/bin/bash
file=../posts.yml
output=output_
count=$(cat ${file} | wc -l)
count=$((count + 1))
lines=$(grep -n -e '---' ${file} | awk -F: '{ print $1 }')
lines="${lines} ${count}"
start=$(echo ${lines} | awk '{ print $1 }')
lines=$(echo ${lines} | sed 's/^[0-9]*//')

for n in ${lines}   
do
    end=$((n - 1))
    sed -n "${start},${end}p" ${file} > "../${output}${start}-${end}.yaml"         
    start=$n
done