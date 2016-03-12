/*
 * grunt-check-outdated
 * https://github.com/creydr/grunt-check-outdated
 *
 * Copyright (c) 2016 Christoph Stäbler
 * Licensed under the MIT license.
 */

'use strict';

var david = require('david');
var Table = require('cli-table');
var extend = require('extend');
var async = require('async');

module.exports = function(grunt) {
	grunt.registerTask('outdated', 'Plugin to detect outdated npm packages', function() {
		var done = this.async();
        var manifest = require(process.cwd() + '/package.json');

        var defaults = {
			checkDev: false,
			checkProd: true,
            onlyStable: false
		};

		var options = extend({}, defaults, grunt.config.get('outdated'));

        var checkForOutdated = function(options, next) {
            david.getUpdatedDependencies(manifest, options, function(err, deps) {
                if (err) {
                    grunt.log.error('an error occurred.');

                    next(new Error(err));
                } else {
                    if (Object.keys(deps).length) {
                        grunt.log.errorlns('outdated dependencies detected:');

                        var table = new Table({
                            head : [ 'Dependency', 'installed', 'stable', 'latest' ],
                            colWidths : [ 50, 11, 10, 10 ]
                        });

                        for ( var dep in deps) {
                            table.push([dep, deps[dep].required, deps[dep].stable, deps[dep].latest ]);
                        }

                        grunt.log.writeln(table.toString());
                    } else {
                        grunt.log.writeln('No outdated dependencies detected');
                    }

                    next();
                }
            });
        };

        var beforeCheck = function(next) {
            grunt.log.writeln('checking for outdated dependencies of "%s" version %s', manifest.name, manifest.version);

            next();
        };

        var checkDevDependencies = function(next) {
            if(options.checkDev) {
                grunt.log.writeln();
                grunt.log.subhead('checking development dependencies...');
                checkForOutdated({dev: true, stable: options.onlyStable}, next);
            } else {
                next();
            }
        };

        var checkProdDependencies = function(next) {
            if(options.checkProd) {
                grunt.log.writeln();
                grunt.log.subhead('checking production dependencies...');
                checkForOutdated({stable: options.onlyStable}, next);
            } else {
                next();
            }
        };

        async.series([
            beforeCheck,
            checkDevDependencies,
            checkProdDependencies
        ], function () {
            done();
        });
	});
};
