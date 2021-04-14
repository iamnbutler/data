const fs = require("fs");
const YAML = require("json-to-pretty-yaml");
const json = require("../Posts.json");

const data = YAML.stringify(json);
fs.writeFile("posts.yaml", data);
