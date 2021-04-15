// TODO:
// - Set up dotenv for API keys + base ID 
// - Grab data from Airtable base (JS API)
// - Itterate through each record
//   - match the record to a list of accepted statuses (i.e. "published", "archived")
//   - create a slug from slugifying the title + date
//   - organize fields into frontmatter and content
//   - save each record as a md or yaml file
require("dotenv").config();
var slugify = require('slugify')
var markdown = require("markdown-it");
var fs = require('fs');
var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.KEY}).base(process.env.BASE);

process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
});

base('Posts').select({
    maxRecords: 1, // Max records to call
    view: "Post Grid",
    // filterByFormula: "NOT({title} = '')" // Use this to filter out records that are not published
    sort: [{field: "date", direction: "desc"}] // This orders the output of the record list. You can change the field to sort by something else (example: title)
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
      // filterRecords();
        slugify_string(record)
        export_md(record);
        console.log('Retrieved', record.get('title'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

// Create slug from title
function slugify_string(record) {
  let slug = slugify(record.get('title'), {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true,      // convert to lower case, defaults to `false`
    strict: true      // strip special characters except replacement, defaults to `false`
  });
  console.log('slug: ' + slug );
  return slug;
}

// Export record to a markdown file
// TODO: File name should be slugified
function export_md(record) {
  fs.writeFile('./post/' + record.get('title') + '.md', record.get('title'), function (err) {
    if (err) return console.log(err);
    console.log(record.get('title')+ ' > ./post/' + record.get('title') + '.md');
  });
}