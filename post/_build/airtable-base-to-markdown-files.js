// TODO:
// - Set up dotenv for API keys + base ID 
// ✓ Grab data from Airtable base (JS API)
// ✓ Itterate through each record
//   - match the record to a list of accepted statuses (i.e. "published", "archived")
//   - create a slug from slugifying the title + date
//   - organize fields into frontmatter and content
//   - save each record as a md or yaml file
const dotenv = require("dotenv").config();
const yaml = require('js-yaml');
const slugify = require('slugify');
const markdown = require("markdown-it");
const fs = require('fs');
const Airtable = require('airtable');
const base = new Airtable({
  apiKey: process.env.KEY
}).base(process.env.BASE);

base('Posts').select({
  maxRecords: 10, // Max records to call
  view: "Post Grid",
  // filterByFormula: "NOT({title} = '')" // Use this to filter out records that are not published
  sort: [{
    field: "date",
    direction: "desc"
  }] // This orders the output of the record list. You can change the field to sort by something else (example: title)
}).eachPage(function page(records, fetchNextPage) {

  records.forEach(function (record) {

    // Define variables
    const title = record.get('title');
    const date = record.get('date');

    // Create record slug
    let slug = slugify_string(record, title, date);

    let data = {
      title: title,
      slug: slug,
      'custom_slug': '',
      status: '',
      date: date,
      'date_updated': '',
      author: '',
      subtitle: '',
      'primary_tag': '',
      tags: [
        'javascript', 'node.js', 'web development'
      ],
      summary: '',
      edit: '', // TODO: Move to markdown output
      body: '', // TODO: Move to markdown output
      featured: false,
      'show_thumbnail': true,
      thumbnail: '',
      'prefer_wide_thumbnail': false,
      wide_thumbnail: '',
      hero_image: '',
      post_images: [
        'a','b','c'
      ],
      'post_visible': true
    };
    
    // Logs // TODO: Remove
    console.log('Record: ', record.get('title'));
    console.log('Date: ', record.get('date'));
    console.log('Slug: ' + slug);

    // Export record as mm-yyyy-slug.md
    export_md(record, slug, data);
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) {
    console.error(err);
    return;
  }
});

// Create record slug
function slugify_string(record, title, date) {

  let slug = slugify(date + '-' + title, {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true // strip special characters except replacement, defaults to `false`
  });

  return slug;
}

// Export record to a markdown file
// TODO: File name should be slugified
function export_md(record, slug, data) {
  let markdownOutput = 
    '# Hello World!\n' +
    slug;

  let yamlStr = yaml.dump(data);

  // Format our YFM (YAML Front Matter) + Markdown for output. 
  fs.writeFileSync(
    './post/' + slug + '.md', 
    '---\n'
    + yamlStr +
    '---\n' +
    markdownOutput, 
    'utf8');
}