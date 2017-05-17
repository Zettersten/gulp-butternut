var mocha = require('mocha');
var assert = require('power-assert');
var Vinyl = require('vinyl');
var mississippi = require('mississippi');
var gulpButternut = require('../');

var describe = mocha.describe;
var it = mocha.it;
var beforeEach = mocha.beforeEach;

var pipe = mississippi.pipe;
var to = mississippi.to;
var from = mississippi.from;

describe('Squash files with butternut', function() {

    beforeEach(function() {
        this.testFile = new Vinyl({
            cwd: '/Users/zettersten/broken-promises/test',
            base: '/Users/zettersten/broken-promises/test',
            path: '/Users/zettersten/broken-promises/test/test1.js',
            contents: new Buffer(
                '"use strict";\nfunction foobar(){}\n/* comment one */\n/* comment three */\n/*! comment two MIT */\nfunction itsatrap(){}'
            )
        });
    });

    it('should compress all files w/o options', function(done) {
        pipe(
            [
                from.obj([this.testFile]),
                gulpButternut(),
                to.obj(function(newFile, enc, next) {
                    var contents = newFile.contents.toString();
                    next();
                })
            ],
            done
        );
    });

});