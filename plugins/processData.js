const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec'];

const plugin = (options) => {
    return (files, metalsmith, done) => {
        for (const key of Object.keys(files)) {
            const file = files[key];
            if (file.date) {
                const date = new Date(file.date);
                file.dateParts = {
                    year: String(date.getFullYear()),
                    month: months[date.getMonth()],
                    day: ('0' + date.getDate()).slice(-2),
                };
            }
        }
        done();
    }
};

module.exports = plugin;
