module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'app/scripts/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint'],
            karma: {
                files: ['app/js/**/*.js', 'test/unit/*.js'],
                tasks: ['karma:continuous:run']
            }
        },

        connect: {
            server: {
                options: {
                    base: 'app',
                    keepalive: true
                }
            }
        },

        serve: {
            options: {
                'port': 9876
            }
        },

        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['PhantomJS'],
                    files: [
                        //TODO get files properly loaded into project http://paislee.io/testing-angularjs-with-grunt-karma-and-jasmine/
                        'node_modules/angular/angular.js',
                        'bower_components/angular-mocks/angular-mocks.js',
                        'test/unit/**/*.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask('unit-test', ['karma:continuous:start', 'watch:karma']);
    grunt.registerTask('default', ['jshint']);

};
