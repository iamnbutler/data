# Storing an Airtable database as a series of Markdown files with frontmatter
## Downloading Posts

_This has far too many steps, and uses too many tools right now. Will come back and simply this at some point._

Go to the [Airtable API](https://airtable.com/api) and get your Base ID & API Key.

Note: **DO NOT share your API key with anyone or commit it into any git repository!** One way to avoid directly committing your keys to your repository is using something like [Dotenv](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f).

Run this to output a .yml file of your base.

```
airtable-export post YOUR_BASE_ID YOUR_TABLE_NAME --key=YOUR_API_KEY --user-agent "Airtable Export Robot"
```

## Converting to YAML

Use [json2yaml](https://www.npmjs.com/package/json2yaml) to convert our JSON file into conventional YAML syntax.

If this is the first time running this (you need sudo/write access for this.)

```
npm install -g json2yaml
json2yaml ./Posts.json > ./posts.yml
```

## Split YAML into multiple files

run yaml-to-many.sh.

```
chmod u+x post/_build/yaml-to-many.sh
chmod 744 post/_build/yaml-to-many.sh
bash post/_build/yaml-to-many.sh
```

Right now this makes a list like output_xxx-yyy.yaml. Next up, getting names from the table + converting to .md