/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var cp = require( './../lib' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'editorconfig', function tests() {

	it( 'should export a function', function test() {
		expect( cp ).to.be.a( 'function' );
	});

	it( 'should export a function for creating a editorconfig file synchronously', function test() {
		expect( cp.sync ).to.be.a( 'function' );
	});

});
