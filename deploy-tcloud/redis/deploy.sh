#!/bin/bash

set -e  # Exit immediately if a command fails

echo "开始redis配置"
mkdir -p /data/redis
mkdir -p /data/redis/data

cp -f ./deploy-tcloud/redis/redis.conf /data/redis/redis.conf

docker run -p 6379:6379 --name redis -v /data/redis/redis.conf:/etc/redis/redis.conf  -v /data/redis/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes
