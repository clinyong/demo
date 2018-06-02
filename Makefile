publish:
	cd dist && git reset --hard && git pull
	node scripts/update-readme.js
	rm -rf dist/demo
	mkdir dist/demo
	cp -r src/* dist/demo
	cd dist && git add -A && git commit -m 'Publish demo' && git push
	git add -A && git commit -m 'Update readme' && git push
