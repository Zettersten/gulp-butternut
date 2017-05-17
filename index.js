var butternut = require('butternut');
var minifier = require('./minifier');
var GulpButternutError = require('./lib/gulp-butternut-error');

module.exports = function(opts) {
    return minifier(opts, butternut);
};

module.exports.GulpButternutError = GulpButternutError;