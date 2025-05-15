#!/bin/bash

# 构建 Docker 镜像
docker build -t recipea-landing .

# 停止并删除旧容器（如果存在）
docker stop recipea-landing || true
docker rm recipea-landing || true

# 运行新容器
docker run -d \
  --name recipea-landing \
  -p 3000:3000 \
  --restart unless-stopped \
  recipea-landing 