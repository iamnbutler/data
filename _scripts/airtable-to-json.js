// TODO:
// ✓ Export Airtable -> JSON Files
// - Cull uneeded content
// - Restructure JSON as wanted

const dotenv = require("dotenv").config();
const slugify = require('slugify');
const fs = require('fs');

// Require airtable & set up a connection
// Add your airtable API info into a .env file (Read more: https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa)
const Airtable = require('airtable');
const base = new Airtable({
  apiKey: process.env.KEY
}).base(process.env.BASE);

// const status = ["Published", "Archive"]; // Add your status tags you want to publish here (i.e "posted", "archived".) This requires a field called "status" that returns an array of tags.

base('Posts').select({
  maxRecords: 999, // Max records to call
  view: "Post Grid",
  // filterByFormula: "NOT({title} = '')" // Use this and status to filter out records that are not published
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

    const json = JSON.stringify(record, null, 4);

    fs.writeFile('./post/json/'+ slug +'.json', json, (err) => {
      if (err) {
          throw err;
      }
      console.log(slug + " saved.");
    });
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