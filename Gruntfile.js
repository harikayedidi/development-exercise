module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {},
            }
        },
        /*sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/style.css': 'css/scss/style.scss',
                }
            }
        },*/
        jshint: {
            files: ['js/*.js'],
        },
        cssmin: {
            target: {
                src: ["css/style.css"],
                dest: "css/style.min.css"
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'js/countries.min.js': ['js/countries.js']
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: ['index.html'],
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['jshint', 'uglify'],
            },
           /* sass: {
                files: ['css/scss/** /*.scss'],
                tasks: ['sass'],
            },*/
            css: {
                files: ['css/**/*.css'],
                tasks: ['cssmin'],
            },
        },
    });

    // Actually running things.
   /* grunt.loadNpmTasks('grunt-contrib-sass');*/
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['connect', 'watch']);

};