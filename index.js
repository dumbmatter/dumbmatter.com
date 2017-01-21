const Metalsmith  = require('metalsmith');
const collections = require('metalsmith-collections');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const processData = require('./plugins/processData');

Metalsmith(__dirname)
    .source('./src')
    .destination('./build')
    .use(processData())
    .use(collections({
        posts: {
            pattern: 'posts/*.md',
            sortBy: 'date',
            reverse: true,
        },
    }))
    .use(markdown())
    .use(permalinks())
    .use(layouts({
        engine: 'handlebars',
        partials: 'layouts/partials',
    }))
    .build((err, files) => {
        if (err) { throw err; }
    });
