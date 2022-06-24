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

A general data source of truth data repository.

## Files on disk

Rather than rely on databases that change and continually shifting data schema, I wanted a place for data like projects, posts, and more to exist simply as flat files.

## Storing data in Markdown

Markdown seemed like an excellent place to start. It's easy to write, and we can easily add extra data on top with front-matter.

## Front Matter

```yaml
uuid: "1b855fc1-7eec-4b35-b711-b035b8458c5d" # ID / Unique identifier
title: "post-title" #
slug: "Post Title" # YYYY-MM-DD-title.md
status: "draft" # draft | published | archived
date_created: "03/04/1997" # DD/MM/YYYY
date_modified: 09/09/1999"" # DD/MM/YYYY
```
