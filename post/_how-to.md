# Downloading Posts

Go to the [Airtable API](https://airtable.com/api) and get your Base ID & API Key.

Note: **DO NOT share your API key with anyone or commit it into any git repository!** One way to avoid directly committing your keys to your repository is using something like [Dotenv](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f).

Run this to output a .yml file of your base.

```
airtable-export post YOUR_BASE_ID YOUR_TABLE_NAME --key=YOUR_API_KEY --user-agent "Airtable Export Robot"
```
