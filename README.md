```
                    ___                         ___     
     _____         /\  \                       /\  \    
    /::\  \       /::\  \         ___         /::\  \   
   /:/\:\  \     /:/\:\  \       /\__\       /:/\:\  \  
  /:/  \:\__\   /:/ /::\  \     /:/  /      /:/ /::\  \ 
 /:/__/ \:|__| /:/_/:/\:\__\   /:/__/      /:/_/:/\:\__\
 \:\  \ /:/  / \:\/:/  \/__/  /::\  \      \:\/:/  \/__/
  \:\  /:/  /   \::/__/      /:/\:\  \      \::/__/     
   \:\/:/  /     \:\  \      \/__\:\  \      \:\  \     
    \::/  /       \:\__\          \:\__\      \:\__\    
     \/__/         \/__/           \/__/       \/__/    
     
```

A general data repository for other projects and archival purposes.

### /post

`/post` – All my posts pulled from an airtable base and converted to JSON/MD files.

`/post` TODO:

- Clean out unneeded data in JSON objects
- Clean up markdown output
- Format markdown/yaml for use with 11ty
- Clean up script and post to seperate repo/npm

`/post` How To:

Want to play around with the [airtable to md script](post/_build/airtable-base-to-markdown-files.js)? Set up your base ID/API Key in a .env file and customize the script. It is pretty hardcoded for my usecase currently but I have plans to clean it up to be a bit more project agnostic.
