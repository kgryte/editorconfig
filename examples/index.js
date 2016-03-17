'use strict';

var mkdirp = require( 'mkdirp' );
var path = require( 'path' );
var cp = require( './../lib' );

var dirpath = path.resolve( __dirname, '../build/' + new Date().getTime() );

mkdirp.sync( dirpath );
cp.sync( dirpath, {
	'template': 'default'
});

