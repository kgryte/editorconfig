'use strict';

// MODULES //

var fs = require( 'fs' );
var path = require( 'path' );


// TEMPLATES //

/**
* FUNCTION: templates()
*	Creates a list of .editorconfig templates.
*
* @returns {String[]} array of template names
*/
function templates() {
	var fnames;
	var fpath;
	var stats;
	var out;
	var len;
	var dir;
	var i;

	dir = path.resolve( __dirname, '../templates' );
	fnames = fs.readdirSync( dir );
	len = fnames.length;

	out = [];
	for ( i = 0; i < len; i++ ) {
		fpath = path.join( dir, fnames[ i ] );
		stats = fs.statSync( fpath );
		if ( stats.isDirectory() ) {
			out.push( fnames[ i ] );
		}
	}
	return out;
} // end FUNCTION templates()


// EXPORTS //

module.exports = templates();
