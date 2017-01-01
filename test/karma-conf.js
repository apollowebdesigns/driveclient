module.exports = function(config){
    config.set({
        //  root path location that will be used to resolve all relative paths in files and exclude sections, should be the root of your project
        basePath : '../',
        port: '8889',

        // files to include, ordered by dependencies

        files: [
            'node_modules/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/scripts/app.js',
            'app/scripts/*.js',
            'test/unit/**/*.spec.js'
        ],

        // karma has its own autoWatch feature but Grunt watch can also do this
        autoWatch : false,

        // testing framework, be sure to install the karma plugin
        frameworks: ['jasmine'],

        // browsers to test against, be sure to install the correct karma browser launcher plugin
        browsers : ['Chrome', 'PhantomJS'],

        // progress is the default reporter
        reporters: ['progress'],

        // map of preprocessors that is used mostly for plugins
        preprocessors: {

        },

        // list of karma plugins
        plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ]
    })}