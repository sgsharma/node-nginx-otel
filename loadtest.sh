#!/bin/sh
echo "Running load test $1 times"

for i in {1..$1}
do
    curl -s 'localhost' > /dev/null
    curl -s 'localhost/year' > /dev/null
done
