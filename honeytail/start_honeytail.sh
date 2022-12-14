#!/bin/sh

until cd /logs && ls /logs/access.log
do
    echo "Retrying read from log file"
done

echo "Can now read from log file"
honeytail \
    --writekey=$HONEYCOMB_WRITE_KEY \
    --dataset=$HONEYCOMB_DATASET \
    --parser=nginx \
    --nginx.conf=/nginx.conf \
    --nginx.format=request_detail \
    --file=/logs/access.log \
    --add_field service.name=$HONEYCOMB_DATASET
