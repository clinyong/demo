const fs = require("fs");
const path = require("path");

const srcPath = path.resolve(__dirname, "../src");
const readmeFile = path.resolve(__dirname, "../README.md");
const url = "https://clinyong.github.io/demo/";

function start() {
  fs.readdir(srcPath, function(err, list) {
    if (err) throw err;

    const content = list
      .map(name => ({
        name: name
          .split("-")
          .slice(1)
          .join("-"),
        link: url + name
      }))
      .map(item => `- [${item.name}](${item.link})`)
      .join("\n");

    fs.writeFileSync(readmeFile, content + "\n", {
      encoding: "utf8"
    });
  });
}

start();
