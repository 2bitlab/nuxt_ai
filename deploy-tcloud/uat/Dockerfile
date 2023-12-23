# 定义构建参数
ARG NODE_VERSION=18

# 配置构建环境
FROM node:${NODE_VERSION}-buster-slim as builder

WORKDIR /src
COPY . /src

RUN cp /src/deploy-tcloud/uat/.env /src/.env

# 安装依赖
RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm

RUN pnpm install
# 构建产物

ENV NODE_ENV=production
RUN pnpm run build

# 配置运行环境
FROM node:${NODE_VERSION}-buster-slim

ENV NODE_ENV=production


WORKDIR /app
COPY --from=builder /src/.output /app/.output

EXPOSE 3001
CMD ["node", ".output/server/index.mjs"]
