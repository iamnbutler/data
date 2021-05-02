const dotenv = require("dotenv").config();
const yaml = require("js-yaml");
const slugify = require("slugify");
const fs = require("fs");

// Require airtable & set up a connection
// Add your airtable API info into a .env file (Read more: https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa)
const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.KEY,
}).base(process.env.BASE);

base("Work")
  .select({
    maxRecords: 999, // Max records to call
    view: "Post Grid",
    sort: [
      {
        field: "date",
        direction: "desc",
      },
    ], // This orders the output of the record list. You can change the field to sort by something else (example: title)
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function (record) {
        // Define variables
        const title = record.get("title");
        const date = record.get("date");
        const status = record.get("status");

        if (status === 'published') {
          // Create record slug
          let slug = slugify_string(record, title, date);

          const p = record.fields;
          let frontMatter = {
            // This is what the output of your md or yaml file will contain
            status: p.status,

            title: title,
            subtitle: p.subtitle,
            slug: slug,
            custom_slug: p.custom_slug,

            date: date,

            company: p.company,
            section: p.section,
            tags: p.tags,

            summary: p.summary,

            role: p.role,
            goal: p.goal,
            team: p.team,

            wrapup: p.wrapup,
            outcome: p.outcome,

            link_one: p.link_one,
            link_two: p.link_two,

            show_thumbnail: p.show_thumbnail,
            thumbnail: p.thumbnail_url,
            wide_thumbnail: p.wide_thumbnail_url,
            hero_image: p.hero_image_url,
          };

          // Export record as mm-yyyy-slug.md
          export_md(record, slug, frontMatter);
        }
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

// Create record slug
function slugify_string(record, title, date) {
  if (!date) {
    date = "0000-00-00";
  }

  let slug = slugify(date + "-" + title, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
  });

  return slug;
}

// Export record to a markdown file
function export_md(record, slug, frontMatter) {
  let markdownOutput = record.fields.body;

  let yamlStr = yaml.dump(frontMatter);

  // Format our YFM (YAML Front Matter) + Markdown for output.
  fs.writeFileSync(
    "./work/" + slug + ".md",
    "---\n" + yamlStr + "---\n" + markdownOutput,
    "utf8"
  );
}
