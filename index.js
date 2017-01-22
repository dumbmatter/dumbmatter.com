const Metalsmith  = require('metalsmith');
const collections = require('metalsmith-collections');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const processData = require('./plugins/processData');

Metalsmith(__dirname)
    .source('./src')
    .destination('./build')
    .use(collections({
        posts: {
            pattern: 'posts/*.md',
            sortBy: 'date',
            reverse: true,
        },
    }))
    .use(markdown())
    .use(processData())
    .use(permalinks({
        linksets: [{
            date: 'YYYY/MM',
            match: {collection: 'posts'},
            pattern: ':date/:title',
        }],
    }))
    .use(layouts({
        engine: 'handlebars',
        partials: 'layouts/partials',
    }))
    .build((err, files) => {
        if (err) { throw err; }
    });
