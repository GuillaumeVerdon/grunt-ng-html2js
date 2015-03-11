/*
 * grunt-ng-html2js
 * https://github.com/brandon.nydell/grunt-ng-html2js
 *
 * Copyright (c) 2015 Brandon Nydell
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['test/tests']
        },

        // Configuration to be run (and then tested).
        ng_html2js: {
            normal: {
                files: {
                    'test/tests/test.js': ['test/fixtures/test.html']
                }
            },
            groupNormal: {
                files: [{
                    expand: true,
                    cwd: 'test/fixtures',
                    src: ['*.html'],
                    dest: 'test/tests',
                    ext: '_group.js'
                }]
            },
            moduleName: {
                options: {
                    moduleName: 'testApp',
                    moduleVar: 'ngModule'
                },
                files: {
                    'test/tests/test_module.js': ['test/fixtures/test.html']
                }
            },
            groupModuleName: {
                options: {
                    moduleName: 'testApp',
                    moduleVar: 'ngModule'
                },
                files: [{
                    expand: true,
                    cwd: 'test/fixtures',
                    src: ['*.html'],
                    dest: 'test/tests',
                    ext: '_module_group.js'
                }]
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'ng_html2js', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
