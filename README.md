# gulp-butternut

> Minify JavaScript with [butternut](https://github.com/Rich-Harris/butternut).

## Installation

Install package with NPM and add it to your development dependencies:

`npm install --save-dev gulp-butternut`

## Usage

The `options` argument, if supplied, is an object that can have the following properties:

| Option             | CLI equivalent  | Default value | Description                                                                                    |
|--------------------|-----------------|---------------|------------------------------------------------------------------------------------------------|
| check              | --check         | `false`       | Parse output. See [below](https://github.com/Rich-Harris/butternut#the-check-option)                                                   |
| allowDangerousEval | n/a             | `false`       | Whether to allow direct `eval` calls                                                           |
| sourceMap          | -m, --sourcemap | `true`        | Whether to create a sourcemap. Set to `inline` to append to the output (not recommended)       |
| file               | n/a (automatic) | `null`        | The output filename, used in sourcemap generation                                              |
| source             | n/a (automatic) | `null`        | The source filename, used in sourcemap generation                                              |
| includeContent     | n/a             | `true`        | Whether to include the source file in the `sourcesContent` property of the generated sourcemap |

## License

[MIT](LICENSE)