SHELL := /bin/bash

test: acceptance-test

acceptance-test: install
	npm start & \
	npm test; \
	pkill -TERM -P $$!;

install:
	npm install
