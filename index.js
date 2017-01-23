const Metalsmith  = require('metalsmith');
const cleanCss = require('metalsmith-clean-css');
const collections = require('metalsmith-collections');
const feed = require('metalsmith-feed');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const pagination = require('metalsmith-pagination');
const permalinks = require('metalsmith-permalinks');
const tags = require('metalsmith-tags');
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
            reverse: true,
            sortBy: 'date',
        },
    }))
    .use(markdown())
    .use(processData())
    .use(pagination({
        'collections.posts': {
            first: 'index.html',
            layout: 'index.html',
            path: 'page/:num/index.html',
            perPage: 10,
        },
    }))
    .use(tags({
        layout: 'index.html',
        path: 'tag/:tag/index.html',
        pathPage: 'tag/:tag/:num.html',
        perPage: 10,
        reverse: true,
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
        destination: 'feed/index.html',
        limit: 10,
    }))
    .use(layouts({
        engine: 'handlebars',
        partials: 'layouts/partials',
    }))
    .use(cleanCss({
        files: 'style.css',
    }))
    .build((err) => {
        if (err) { throw err; }
    });
