#!/bin/bash

set -e  # Exit immediately if a command fails

echo "开始dev构建"

# 丢弃所有本地修改
git reset --hard

# 拉取最新的代码
git pull

git checkout dev

echo "复制环境变量.env 到根目录"
cp -f ./deploy-tcloud/dev/.env .env

npx prisma migrate deploy


CONTAINER_NAME="nuxt_ai_dev"
IMAGE_NAME="ccr.ccs.tencentyun.com/prompt-lab/nuxt_ai_dev"

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

# docker pull $IMAGE_NAME

docker run -d --env-file .env --name $CONTAINER_NAME -p 3000:3000 --pull always $IMAGE_NAME
