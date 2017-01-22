const path = require('path');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const plugin = (options) => {
    return (files, metalsmith, done) => {
        for (const key of Object.keys(files)) {
            const file = files[key];

            file.filename = path.basename(key, '.html');

            // Date processing
            if (file.date) {
                const dateParts = file.date.toISOString().split('T')[0].split('-');
                file.dateParts = {
                    year: dateParts[0],
                    month: months[parseInt(dateParts[1]) - 1],
                    day: dateParts[2],
                };
            }

            // Create teasers from blog posts
            if (file.layout === 'post.html') {
                const splitContents = file.contents.toString().split('<!--more-->');
                file.teaser = splitContents[0];
                file.hasMore = splitContents.length > 1 ? true : false;
            }
        }
        done();
    }
};

module.exports = plugin;
