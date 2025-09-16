IMAGE_NAME=ghcr.io/${GHCR_USERNAME}/ezrto-landing:latest

.PHONY: build
# Build project
build:
	@npm install
	@npm run build
	@docker build . -t ${IMAGE_NAME}

.PHONY: push
# Push project
push:
	@docker push ${IMAGE_NAME}