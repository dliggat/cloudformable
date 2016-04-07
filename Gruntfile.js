module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'helpers/*.js'],
      options: {
        reporter: require('jshint-stylish')
      }
    },
    watch: {
      files: ['.jshintrc', '<%= jshint.files %>'],
      tasks: ['jshint']
    },
    assemble: {
      options: {
        partials: ['partials/*.hbs', 'partials/**/*.hbs'],
        helpers: ['helpers/*.js'],
        data: ['data/*.{json,yml}'],
        ext: '.template'
      },
      site: {
        src: ['*.hbs'],
        dest: '_output/'
      }
    },
    jsbeautifier: {
      files : ['_output/*.template'],
      options : {
        js: {
          indentSize: 2,
          fileTypes: ['.template'],
          maxPreserveNewlines: 2,
          preserveNewlines: true,
          endWithNewline: true
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('render', ['assemble', 'jsbeautifier']);
};
