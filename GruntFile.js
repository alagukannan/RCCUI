module.exports = function (grunt) {
    grunt.initConfig({

    // define source files and their destinations
    uglify: {
         all: {
            files: [{
                expand: true,
                cwd: 'js/',
                src: ['**/*.js', '!*.min.js'],
                dest: 'min/',
                ext: '.min.js'
            }]
        }
    },
    watch: {
        js:  { files: 'js/*.js', tasks: [ 'uglify' ] },
    }
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');

// register at least this one task
grunt.registerTask('default', [ 'uglify' ]);


};