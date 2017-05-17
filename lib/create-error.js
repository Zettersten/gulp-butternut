var curry = require('lodash/fp/curry');
var GulpButternutError = require('./gulp-butternut-error');

function createError(file, msg, cause) {
    var perr = new GulpButternutError(msg, cause);
    perr.plugin = 'gulp-uglify';
    perr.fileName = file.path;
    perr.showStack = false;
    return perr;
}

module.exports = curry(createError);