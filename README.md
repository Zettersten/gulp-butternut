# gulp-butternut

> Minify JavaScript with [butternut](https://github.com/Rich-Harris/butternut).

## Installation

Install package with NPM and add it to your development dependencies:

`npm install --save-dev gulp-butternut`

## Usage

```javascript
var gulp = require('gulp');
var butternut = require('gulp-butternut');

gulp.task('compress', function (cb) {
    return gulp.src('lib/*.js')
        .pipe(butternut(options))
        .pipe(gulp.dest('dist'));
});
```

### Options

The `options` argument, if supplied, is an object that can have the following properties:

| Option             | Default value | Description                                                                                    |
|--------------------|---------------|------------------------------------------------------------------------------------------------|
| check              | `false`       | Parse output. See [below](https://github.com/Rich-Harris/butternut#the-check-option)                                                   |
| allowDangerousEval | `false`       | Whether to allow direct `eval` calls                                                           |
| sourceMap          | `true`        | Whether to create a sourcemap. Set to `inline` to append to the output (not recommended)       |
| file               | `null`        | The output filename, used in sourcemap generation                                              |
| source             | `null`        | The source filename, used in sourcemap generation                                              |
| includeContent     | `true`        | Whether to include the source file in the `sourcesContent` property of the generated sourcemap |

## License

[MIT](LICENSE)