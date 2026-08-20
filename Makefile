up:
	docker compose up -d --build

down:
	docker compose down

build:
	docker compose exec web npm run build

watch:
	docker compose exec web npm run watch
