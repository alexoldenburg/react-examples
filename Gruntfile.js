/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.

    watch: {
      source: {
        files: [
          'gruntfile.js',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.html',
          './src/**/*.css',
          './src/**/*.scss',
        ],
        reload: true,
        tasks: ['requirejs:compile', 'babel']
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: './build/'
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          appDir: './src/',
          dir: './build/',
          fileExclusionRegExp: /^\.|^Gruntfile.js$|^sass|^node_modules|.jsx$|^model.js$/
        }
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['stage-2'],
        plugins: ['transform-react-jsx']
      },
      jsx: {
        files: [{
          expand: true,
          cwd: 'src/js/',
          src: ['**/*.jsx'],
          dest: 'build/js/',
          ext: '.js'
        }]
      },
      dist: {
        files: {
          'build/js/model.js': 'src/js/model.js'
        }

      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', ['requirejs', 'babel', 'connect', 'watch']);

};
