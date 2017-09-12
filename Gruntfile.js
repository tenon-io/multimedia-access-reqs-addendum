'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        datetime: Date.now(),

        clean: [''],

        jsonlint: {
            configFiles: {
                src: ['package.json']
            }
        },

    });

    grunt.registerTask('default', [
        'jsonlint',
    ]);

};
