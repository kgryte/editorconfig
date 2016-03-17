/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var templates = require( './../lib/templates.js' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'editorconfig templates', function tests() {

	it( 'should export an array', function test() {
		expect( templates ).to.be.an( 'array' );
		assert.ok( templates.length );
	});

});
