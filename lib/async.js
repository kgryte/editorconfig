'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );
var isString = require( 'validate.io-string-primitive' );
var isFunction = require( 'validate.io-function' );
var contains = require( 'validate.io-contains' );
var fs = require( 'fs' );
var path = require( 'path' );
var noop = require( '@kgryte/noop' );
var templates = require( './templates.js' );


// COPY //

/**
* FUNCTION: cp( dest[, opts ][, clbk ] )
*	Asynchronously creates a .editorconfig file.
*
* @param {String} dest - .editorconfig destination directory
* @param {Object} [opts] - function options
* @param {String} [opts.template="default"] - .editorconfig template to use
* @param {Function} [clbk] - callback to invoke upon attempting to create a .editorconfig file
*/
function cp() {
	var args = arguments;
	var nargs = args.length;
	var tmpl = 'default';
	var rStream;
	var wStream;
	var fpath;
	var dpath;
	var opts;
	var dest;
	var clbk;

	if ( !nargs ) {
		throw new Error( 'insufficient input arguments. Must provide a file destination.' );
	}
	dest = args[ 0 ];
	if ( !isString( dest ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string primitive. Value: `' + dest + '`.' );
	}
	if ( nargs === 1 ) {
		clbk = noop;
	}
	else if ( nargs === 2 ) {
		if ( isObject( args[ 1 ] ) ) {
			opts = args[ 1 ];
			clbk = noop;
		}
		else if ( isFunction( args[ 1 ] ) ) {
			clbk = args[ 1 ];
		}
		else {
			throw new TypeError( 'invalid input argument. Second argument must either be an options object or a callback. Value: `' + args[ 1 ] + '`.' );
		}
	}
	else {
		opts = args[ 1 ];
		clbk = args[ 2 ];
		if ( !isObject( opts ) ) {
			throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + opts + '`.' );
		}
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
		}
	}
	if ( opts ) {
		if ( opts.hasOwnProperty( 'template' ) ) {
			tmpl = opts.template;
			if ( !isString( tmpl ) ) {
				throw new TypeError( 'invalid option. `template` option must be a string primitive. Option: `' + tmpl + '`.' );
			}
			if ( !contains( templates, tmpl ) ) {
				throw new Error( 'invalid option. Unrecognized template name. Must be one of [' + templates.join( ',' ) + '] Option: `' + tmpl + '`.' );
			}
		}
	}
	fpath = path.join( __dirname, '..', 'templates', tmpl, 'editorconfig' );
	dpath = path.join( dest, '.editorconfig' );

	rStream = fs.createReadStream( fpath );
	wStream = fs.createWriteStream( dpath );

	wStream.on( 'error', onError );
	wStream.on( 'finish', onFinish );

	rStream.pipe( wStream );

	/**
	* FUNCTION: onError( error )
	*	Callback invoked upon a writeStream error.
	*
	* @private
	* @param {Error} error - error object
	*/
	function onError( error ) {
		clbk( error );
	}

	/**
	* FUNCTION: onFinish()
	*	Callback invoked once a writeStream is finished writing.
	*
	* @private
	*/
	function onFinish() {
		clbk();
	}
} // end FUNCTION cp()


// EXPORTS //

module.exports = cp;
