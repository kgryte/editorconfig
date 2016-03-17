'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );
var isObject = require( 'validate.io-object' );
var contains = require( 'validate.io-contains' );
var templates = require( './templates' );
var path = require( 'path' );
var fs = require( 'fs' );


// COPY //

/**
* FUNCTION: cp( dest[, opts ] )
*	Synchronously creates a .editorconfig file.
*
* @param {String} dest - .editorconfig destination directory
* @param {Object} [opts] - function options
* @param {String} [opts.template="default"] - .editorconfig template to use
*/
function cp( dest, opts ) {
	var tmpl = 'default';
	var fpath;
	var dpath;

	if ( !isString( dest ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string primitive. Value: `' + dest + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + opts + '`.' );
		}
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
	fpath = path.join( __dirname, tmpl, 'editorconfig' );
	dpath = path.join( dest, '.editorconfig' );

	fs.writeFileSync( dpath, fs.readFileSync( fpath ) );
} // end FUNCTION cp()


// EXPORTS //

module.exports = cp;
