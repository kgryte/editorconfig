.editorconfig
=========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates a `.editorconfig` file.


## Installation

``` bash
$ npm install @kgryte/editorconfig
```


## Usage

``` javascript
var cp = require( '@kgryte/editorconfig' );
```

#### cp( dest[, opts ][, clbk ] )

Asynchronously create a `.editorconfig` file in a specified `destination` directory.

``` javascript
cp( 'path/to/a/directory', onCreate );

function onCreate( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Success!' );
}
```

The function accepts the following `options`:
*	__template__: `.editorconfig` template name. Default: `'default'`.

By default, a `default` template is used. To specify a different `.editorconfig` template, set the `template` option.

``` javascript
cp( 'path/to/a/directory', {
	'template': 'default'
});
```



#### cp.sync( dest[, opts] )

Synchronously create a `.editorconfig` file in a specified `destination` directory.

``` javascript
cp.sync( 'path/to/a/directory' );
```

The function accepts the same `options` as the asynchronous version.


## Notes

* 	Supported templates may be found in the `./lib` directory and are named according to the directory name.


## Examples

``` javascript
var mkdirp = require( 'mkdirp' ),
	path = require( 'path' ),
	cp = require( '@kgryte/editorconfig' );

var dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

mkdirp.sync( dirpath );
cp.sync( dirpath, {
	'template': 'default'
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

---
## CLI


### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g @kgryte/editorconfig
```


### Usage

``` bash
Usage: editorconfig [options] [destination]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -tmpl  --template [name]     Template name. Default: 'default'.
```


### Examples

``` bash
$ cd ~/my/project/directory
$ editorconfig
# => creates a .editorconfig file in the current working directory
```

To specify a destination other than the current working directory, provide a `destination`.

``` bash
$ editorconfig ./../some/other/directory
```



---
## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/@kgryte/editorconfig.svg
[npm-url]: https://npmjs.org/package/@kgryte/editorconfig

[travis-image]: http://img.shields.io/travis/kgryte/editorconfig/master.svg
[travis-url]: https://travis-ci.org/kgryte/editorconfig

[coveralls-image]: https://img.shields.io/coveralls/kgryte/editorconfig/master.svg
[coveralls-url]: https://coveralls.io/r/kgryte/editorconfig?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/editorconfig.svg
[dependencies-url]: https://david-dm.org/kgryte/editorconfig

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/editorconfig.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/editorconfig

[github-issues-image]: http://img.shields.io/github/issues/kgryte/editorconfig.svg
[github-issues-url]: https://github.com/kgryte/editorconfig/issues
