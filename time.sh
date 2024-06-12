#!/bin/bash

time=$(date "+%Y-%m-%d %H:%M:%S")
echo $time
echo $time >> /home/ubuntu/homework/hananew/zz.txt

cd /home/ubuntu/homework/hananew

git add .
git commit -m "git add ! 현재시간은: $time"
echo "commit complete!"
git push origin master
echo "push complete!"
