#!/bin/bash

# Docker image build and run script
set -e

IMAGE_NAME="ordisimple"
DOCKERFILE_PATH="${1:-.}"

# Extract version from package.json
IMAGE_TAG=$(grep '"version"' package.json | head -1 | sed 's/.*"\([^"]*\)".*/\1/')

echo "Building Docker image: $IMAGE_NAME:$IMAGE_TAG"
docker build -t "$IMAGE_NAME:$IMAGE_TAG" "$DOCKERFILE_PATH"
echo "Docker image built successfully: $IMAGE_NAME:$IMAGE_TAG"

# Remove old container if it exists
if sudo docker ps -a --format '{{.Names}}' | grep -q "^ordisimple-site$"; then
    echo "Removing old container..."
    sudo docker rm -f ordisimple-site
    echo "Old container removed successfully!"
fi

echo "Running Docker container..."
sudo docker run -d --name ordisimple-site --network ordisimple-net -p 6002:3000 "$IMAGE_NAME:$IMAGE_TAG"

echo "Container started successfully!"