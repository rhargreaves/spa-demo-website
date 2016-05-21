SHELL := /bin/bash

test: acceptance-test

acceptance-test: install
	npm start & \
	npm test; \
	pkill -TERM -P $$!;

install:
	npm install

docker-build:
	docker build -t rhargreaves/spa-demo-website .

docker-run:
	docker run -it --rm rhargreaves/spa-demo-website
