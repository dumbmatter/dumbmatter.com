const Metalsmith  = require('metalsmith');
const collections = require('metalsmith-collections');
const feed = require('metalsmith-feed');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const pagination = require('metalsmith-pagination');
const permalinks = require('metalsmith-permalinks');
const processData = require('./plugins/processData');

Metalsmith(__dirname)
    .metadata({
        site: {
            url: 'http://dumbmatter.com/',
        },
    })
    .source('./src')
    .destination('./build')
    .ignore('drafts')
    .use(collections({
        posts: {
            pattern: 'posts/*.md',
            sortBy: 'date',
            reverse: true,
        },
    }))
    .use(markdown())
    .use(processData())
    .use(pagination({
        'collections.posts': {
            perPage: 10,
            layout: 'index.html',
            first: 'index.html',
            path: 'page/:num/index.html',
        },
    }))
    .use(permalinks({
        linksets: [{
            date: 'YYYY/MM',
            match: {collection: 'posts'},
            pattern: ':date/:filename',
        }],
    }))
    .use(feed({
        collection: 'posts',
        limit: 10,
    }))
    .use(layouts({
        engine: 'handlebars',
        partials: 'layouts/partials',
    }))
    .build((err, files) => {
        if (err) { throw err; }
    });
