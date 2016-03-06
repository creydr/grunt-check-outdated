/*
 * grunt-check-outdated
 * https://github.com/creydr/grunt-check-outdated
 *
 * Copyright (c) 2016 Christoph Stäbler
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		jshint : {
			all : [ 'Gruntfile.js', 'tasks/*.js' ],
			options : {
				jshintrc : '.jshintrc'
			}
		},
		outdated: {
			checkDev: true
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', []);
	
	grunt.registerTask('check', ['outdated']);

	grunt.registerTask('default', [ 'jshint', 'test' ]);
};
