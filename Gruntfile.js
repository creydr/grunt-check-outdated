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
		nodeunit: {
			tests: ['test/*_test.js']
		},
		outdated: {
			checkDev: true,
			onlyStable: true
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['nodeunit']);

	grunt.registerTask('check', ['outdated']);

	grunt.registerTask('default', [ 'jshint', 'test' ]);
};
