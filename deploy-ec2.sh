#!/bin/bash

# 停止并删除旧容器（如果存在）
docker stop recipea-landing || true
docker rm recipea-landing || true

# 拉取最新镜像
docker pull recipea/landing:latest

# 运行新容器
docker run -d \
  --name recipea-landing \
  -p 3000:3000 \
  --restart unless-stopped \
  -e NODE_ENV=production \
  -e NEXT_TELEMETRY_DISABLED=1 \
  recipea/landing:latest 