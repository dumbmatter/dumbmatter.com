const Metalsmith  = require('metalsmith');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const processData = require('./plugins/processData');

Metalsmith(__dirname)
    .source('./src')
    .destination('./build')
    .use(markdown())
    .use(processData())
    .use(permalinks())
    .use(layouts({
        engine: 'handlebars',
        partials: 'layouts/partials',
    }))
    .build((err) => {
        if (err) { throw err; }
    });
