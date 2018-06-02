publish:
	node scripts/update-readme.js
	rm -rf dist/demo
	mkdir dist/demo
	cp -r src/* dist/demo
