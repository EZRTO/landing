#!/bin/bash

IMAGE_NAME="ghcr.io/${GHCR_USERNAME}/ezrto-landing:latest"
CONTAINER_NAME="ezrto-landing"

echo "Logging into GHCR..."
echo "${GHCR_TOKEN}" | docker login ghcr.io -u "${GHCR_USERNAME}" --password-stdin

# Stop and remove old container
docker rm -f $CONTAINER_NAME || true

# Pull latest image
docker pull $IMAGE_NAME

# Run container with environment variables
docker run -d \
  --name $CONTAINER_NAME \
  --network ezrto_network  \
  -p 127.0.0.1:3001:3001 \
  --restart unless-stopped \
  $IMAGE_NAME

echo "Deployment complete!"

