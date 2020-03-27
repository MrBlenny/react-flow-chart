default:
	npm install

lint:
	npm lint

clean:
	rm -rf node_modules
	npm cache clean --force
	npm install

build:
	npm run-script build

publish:
	npm run-script build
	npm publish dist --access public --dry-run

publish-prod:
	npm run-script build
	npm publish dist --access public

storybook:
	npm run start:storybook