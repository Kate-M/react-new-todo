// https://github.com/ai/browserslist#config-file
const browsersList = require('./browserslist.json');
const precss = require('precss');
const cssnext = require('postcss-cssnext')({ browsers: browsersList });

module.exports = {
    plugins: [
        precss,
        cssnext,
    ],
};
