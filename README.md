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

Markdown seemed like an excellent place to start. It's easy to write, and we can easily add extra data on top with YAML front-matter.

## Keeping files consistent

I'm using [Netlify CMS](https://www.netlifycms.org/) as a hyper-lightweight way of taking markdown and adding consistent, structured YAML front-matter. Here is an example configuration:

```yaml
collections:
  - name: "post" # Used in routes, e.g., /admin/collections/blog
    label: "Posts" # Used in the UI
    label_singular: "Post"
    folder: "data/post" # The path to the folder where the documents are stored
    preview_path: "data/post/{{filename}}.{{extension}}"
    create: true # Allow users to create new documents in this collection
    slug: "{{fields.date}}-{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - { label: "UUID", name: "uuid", widget: "uuid" }
      - { label: "Type", name: "type", options: "post", widget: "hidden" }
      - { label: "Title", name: "title", widget: "string" }
      - {
          label: "Status",
          name: "status",
          widget: "select",
          options: ["draft", "published", "archived"],
          default: "draft",
        }
      - {
          label: "Publish Date",
          name: "date",
          date_format: "YYYY-MM-DD",
          time_format: false,
          format: "YYYY-MM-DD",
          widget: "datetime",
          picker_utc: true,
        }
      - {
          label: "Edit Note",
          name: "edit-note",
          widget: "markdown",
          required: false,
        }
      - { label: "Body", name: "body", widget: "markdown" }
      - {
          label: "Excerpt",
          name: "excerpt",
          widget: "markdown",
          required: false,
        }
      - {
          label: "Creator",
          name: "creator",
          widget: "string",
          default: "Nate Butler",
        }
      - {
          label: "Custom Slug",
          name: "custom-slug",
          widget: "string",
          required: false,
        }
```

Netlify CMS is service agnostic; You can access it locally or on any hosting service. Eventually, I'd like to write something local with 0 online dependencies, but this works pretty well for now.
